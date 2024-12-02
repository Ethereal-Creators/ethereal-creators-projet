# Instrumentum

## Idée

### Concept
Créer un monde abstrait combinant la musique et la technologie ayant pour but de permettre aux gens de s'amuser, de faire de la musique en groupe.
Il y aurait 5 piédestaux dont un cube par piédestals et chaque cubes produiraient des sons de manière indépendante, permettant à plusieurs personnes de jouer ensemble. 
Il y aurait une projection sur le mur faisant face aux 5 cubes et celle-ci sera aussi controllé par les cubes. 

Pour chaque forme,  chaque faces auraient un TOF qui controlleraient quelque chose. Par exemple, un TOF pourrait controller le volume, un autre pourrait controller un effet phaser, etc.

![Plan_Projet_Final](https://github.com/user-attachments/assets/27dec7d9-5cf1-4566-b7f0-308f94037dca)
![cube_explication](https://github.com/user-attachments/assets/6c15836a-44ed-4d33-a0ad-c0b0501be749)

## Références et inspirations

### Planche d'ambiance visuelles
![plancheVisuelle](medias/assets/images/MoodBoard%20Visuel.png)

### Pour les cubes

![moodboard cube](medias/assets/images/moodboard_cube.jpg)

### Planche d'ambiance sonores 

L’ambiance sonore du projet est composée d’une boucle de basses et de nappes de synthé qui créent une atmosphère mystérieuse. Cette musique ajoute une tension constante et plonge le joueur dans l’univers du jeu.

[ambiance de fond](https://www.youtube.com/watch?v=L2eq-I0jY7Q)

## Références artistique

![Image projection Tutoriel](medias/assets/images/img_tutoriel_01.png)

[Inspiration projection](https://youtu.be/ATLhkFcQZN0)

## Scénario Interactif (nouvelle version)

### Interactif
![shéma Interactif ](medias/assets/images/shema_Interactif_nouveau.png)

## Scénarimage / Simulation

### Simulation

![Simulatin 3D](medias/assets/images/simulation_back.jpg)
![Simulatin 3D](medias/assets/images/simulation_side.jpg)

### Scénarimage
![plancheVisuelle](medias/assets/images/scenarimage_instrumentum_final.jpg)

#### Organique
![plancheVisuelle](medias/assets/images/examples_01_00009.jpg)

#### Organique Modifié (Synth)
![plancheVisuelle](medias/assets/images/examples_02_00009.jpg)

#### Synth Complet
![plancheVisuelle](medias/assets/images/examples_03_00009.jpg)

### Exemple Concret Dans Touch Designer (Merci à Victor)
https://youtu.be/ATLhkFcQZN0

## Synoptique

![plancheVisuelle](medias/images/InstrumentumSypnotique.png)

## Plantation
![Plantation top](medias/assets/images/grand_studio_cad_instrumentum.png)
![Plantation top](medias/assets/images/simulation_top.png)
![Plantation devant](medias/assets/images/simulation_devant.png)

## Technologies

### Support médiatique
Donc, il aurait quelques fichiers **MP4** pour les bases des visuels, ensuite les instruments seront la source audio, et en midi il interagiront avec les autres logiciels (Touch Designer, reaper, Max, Qlc ou SoundSwitch) pour permettre une interaction visuelle et audiovisuelle.

### Matériel

#### Électronique

- 2-6 5PX-HEX (Lumières) [Documentation](https://www.adj.com/5px-hex)
  ![plancheVisuelle](medias/assets/images/5PX-HEX.jpg)
  
- Ordinateurs (1 ou 2)

- Fils XLR

  ![XLR Cable](medias/assets/images/xlr_cable.png)
  
- Fils HDMI 

  ![HDMI_Cable_image](medias/assets/images/hdmi_cable.jpg)

- [HDMI Extender](https://www.amazon.ca/Extender-Ethernet-Monitor-Automatic-Functions/dp/B0CLLVQ6BV?th=1)

  ![HDMI Extender Image](medias/assets/images/hdmi_extender.jpg)

- Fils USB-C

  ![USB-C CABLE](medias/assets/images/usb-c_cable.jpg)
  
- Fils USB-A

  ![USB-A CABLE](medias/assets/images/usb-a_cable.jpg)

- 2-6 Speakers Genelec [Documentation](https://www.genelec.com/8040b)
  
  ![plancheVisuelle](medias/assets/images/genelec_speakers.jpg)

#### Cubes (x3)

- extrusions Aluminium (Jointure en coin)

- Tof (5x par cube doon total de 15)

![TOF](medias/assets/images/unit_tof.png)

- 3x M5Atom

![M5Atom](medias/assets/images/m5atom-lite-developer-module-with-programmable-button-esp32.png)

- 3x M5Atom adaptateur ethernet

![adaptateur ethernet](medias/assets/images/24363_1_kwadrat.png)

- 3x M5Stack PbHub

![PbHub - 1](medias/assets/images/pbhub_1.png)
![PbHub - 2](medias/assets/images/pbhub_2.png)

- **Beaucoup de cables**
- 3x cables ethernet

![Ethernet](medias/assets/images/ethernet.jpg)

#### Pour les stands et cubes

- [Extrusion d'aluminium 2020mm](https://www.amazon.ca/gp/product/B09WHCKS3P/?th=1)

  ![Extrusion Image](medias/assets/images/extrusion_aluminium.png)
  
- Équerres d'angles à 3 voies

  ![Equerre_image](medias/assets/images/jointure.png)


### Logiciels
Différents Logiciels seront utilisé pour que les projections, les instruments et les lumières intéragissents entre elles.

- TouchDesigner (Pour la projection et l'intéraction sur les visuels)
- QLC+ (Pour les lumières et l'intéractivité avec celle-ci)
- Blender / Maya (Pour modéliser les cubes)
- Ableton live 12 (son)

Le réseau de communication serait majoritairement midi car celle-ci est faite pour la détection d’audio d’instruments musicales.

## Réferences: 

https://village-numerique.mutek.org/fr/installations/isochrone-par-manuel-chantre


