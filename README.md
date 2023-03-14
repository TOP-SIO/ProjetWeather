# Projet de Station Météo
Ce projet consiste en la création d'une station météo qui utilise un Raspberry Pi, un capteur BME280 et un écran tactile 7 pouces pour afficher les données météorologiques en temps réel.

## Matériel requis

Raspberry Pi (de préférence version 3 ou supérieure)

Capteur BME280 (température, humidité, pression)

Écran tactile 7 pouces

Carte microSD pour le système d'exploitation

Câbles et connecteurs pour le montage

## Prérequis
Connaissance de base en électronique et programmation Python

Installation de Raspbian sur le Raspberry Pi

Connexion à internet pour installer les packages requis

## Montage
Connectez le capteur BME280 au Raspberry Pi en utilisant les broches appropriées (consultez le schéma de câblage en ligne)

Connectez l'écran tactile 7 pouces au Raspberry Pi en utilisant les connecteurs appropriés (consultez le schéma de câblage en ligne)

Assurez-vous que tout est correctement branché et fixé

## Configuration
Assurez-vous que Raspbian est installé sur votre Raspberry Pi

Installez les packages nécessaires en utilisant la commande sudo apt-get install python3-pip git i2c-tools

Activez l'interface I2C en utilisant la commande sudo raspi-config et sélectionnez l'option "Interfacing Options" > "I2C" > "Yes"

Clonez le repository Github contenant le code source en utilisant la commande git clone https://github.com/TOP-SIO/ProjetWeather.git

Naviguez jusqu'au dossier contenant le code source et installez les packages requis en utilisant la commande sudo pip3 install -r requirements.txt

Exécutez le script principal en utilisant la commande python3 main.py

## Utilisation
Lorsque vous exécutez le script principal, les données météorologiques seront collectées à partir du capteur BME280 et affichées sur l'écran tactile 7 pouces. Vous pouvez utiliser l'écran tactile pour interagir avec l'interface utilisateur et afficher des données supplémentaires.

## Crédits
Ce projet a été créé par [votre nom ici]. Il est basé sur les bibliothèques et les codes sources suivants :

Adafruit_BME280

Tkinter

Pillow

### Licence
Ce projet est sous licence [votre licence ici]. Consultez le fichier LICENSE.md pour plus d'informations.
