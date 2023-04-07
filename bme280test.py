import smbus2
import bme280
import mysql.connector
import time

mydb = mysql.connector.connect(
  host="localhost",
  user="pi400",
  password="pi",
  database="temp_sensor"
)

while True:
  port = 1
  address = 0x77
  bus = smbus2.SMBus(port)

  calibration_params = bme280.load_calibration_params(bus, address)

  data = bme280.sample(bus, address, calibration_params)

  temps = data.timestamp
  print("temps :",temps)

  temperature = data.temperature
  print("température :",temperature,"°C")

  pression = data.pressure
  print("pression :",pression,"hPa")

  humidite = data.humidity
  print("humidité :",humidite,"%")

  mycursor = mydb.cursor()
  sql = "INSERT INTO `sensor`(`temperature`, `pression`, `humidite`) VALUES ({},{},{})".format(temperature,pression,humidite)
  # print(sql)
  mycursor.execute(sql)

  sql = "SELECT * FROM `sensor`;"
  mycursor.execute(sql)
  res = mycursor.fetchall()

  for line in res:
    print(line)

  mydb.commit()
  
  time.sleep(1800)
