# Instrumentum

## Idée

### Concept
Créer un monde abstrait combinant la musique et la technologie ayant pour but de permettre aux gens de s'amuser et de faire de la musique en groupe. Il y aurait 5 piédestaux dont un cube par piédestals et chaque cubes produiraient des sons de manière indépendante, permettant à plusieurs personnes de jouer ensemble. Il y aurait une projection sur le mur faisant face aux 5 cubes et celle-ci sera aussi controllé par les cubes. Pour chaque forme,  chaque faces auraient un TOF qui controlleraient quelque chose. Par exemple, un TOF pourrait controller le volume, un autre pourrait controller un effet phaser, etc.

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

[Inspiration projection](https://youtu.be/ATLhkFcQZN0)

## Scénario Interactif (nouvelle version)

### Interactif
![shéma Interactif ](medias/assets/images/shema_Interactif_new.png)

## Scénario Interactif (ancienne version)

### Interactif
```mermaid
graph TD;
    A{Utiliser Instruments}-->B{Guitare} & C{Piano} & D{Drum};
    B{Guitare} & C{Piano} & D{Drum}-->E{Interaction avec Projection};
    E{Interaction avec Projection}-->F{Plus D'interaction?};
    F{Besoin D'effets? De Changer le visuel?}--|Oui|-->G{Midi};
    F{Besoin D'effets? De Changer le visuel?}--|Non|-->I{Fin de l'intéraction?};
    G{Midi}-->H{Activation Lumiere};
    H{Activation Lumiere}-->I{Fin de l'intéraction?};
    I{Fin de l'intéraction?}--|Oui|-->J{Veille};
    I{Fin de l'intéraction?}--|Non|-->A{Utiliser Instruments};
    J{Veille}-->A{Utiliser Instruments};
```
### Narratif
```mermaid
graph TD;
    A{Point de départ}--|Choix d'instruments|-->B{Guitare} & C{Piano} & D{Drum};
    B{Guitare} & C{Piano} & D{Drum}-->E{Interaction avec Projection};
    E{Interaction avec Projection}-->F{La personne veut-elle plus?};
    F{La personne veut-elle plus? visuel ou effets}--|Oui|-->G{Utilise le clavier midi};
    F{La personne veut-elle plus? visuel ou effets}--|Non|-->I{la personne est satisfaite};
    G{Utilise le clavier midi}-->H{La personne ajoute des effets/change visuel};
    H{La personne ajoute des effets/change visuel}--> I{la personne est satisfaite} & J{la personne est impressionner} & K{La personne expérimente plus} & L{La personne quitte};
```


### À refaire


## Scénarimage / Simulation

### Simulation
![plancheVisuelle](medias/assets/images/simulation_top.png)
![plancheVisuelle](medias/assets/images/simulation_devant.png)

### Scénarimage
![plancheVisuelle](medias/assets/images/scenarimage.jpg)

#### Organique
![plancheVisuelle](medias/assets/images/examples_01_00009.jpg)

#### Organique Modifié (Synth)
![plancheVisuelle](medias/assets/images/examples_02_00009.jpg)

#### Synth Complet
![plancheVisuelle](medias/assets/images/examples_03_00009.jpg)

### Exemple Concret Dans Touch Designer (Merci à Victor)
https://youtu.be/ATLhkFcQZN0

## Synoptique

![plancheVisuelle](assets/images/Synoptique.jpg)

## Plantation
![plancheVisuelle](assets/images/Plantation.jpg)

## Technologies

### Support médiatique
Donc, il aurait quelques mp4 pour les bases des visuels, ensuite les instruments seront la source audio, et en midi il interagiront avec les autres logiciels (Touch Designer, reaper, Max, Qlc ou SoundSwitch) pour permettre une interaction visuelle et audiovisuelle.

### Matériel

#### Électronique
- 3 [Epsum Home Cinema 2150 Wireless 3CLD Projector](https://epson.ca/Remise-%C3%A0-neuf-certifi%C3%A9e/Divertissement-%C3%A0-domicile/Home-Cinema-2150-Wireless-1080p-3LCD-Projector---Remise-%C3%A0-neuf-certifi%C3%A9e/p/V11H852020-N)
  ![plancheVisuelle](assets/images/projecteur_epson.PNG)
  
- 2-6 5PX-HEX (Lumières)
  ![plancheVisuelle](medias/assets/images/5PX-HEX.jpg)
  
- 2 Sculpture Mains
  
  ![plancheVisuelle](medias/assets/images/main_sculptures.jpg)

- [Support pour les sculptures](https://youtu.be/exuQNdkZcog)
  
- Ordinateurs (1 ou 2)
  
- NanoKontrol 2
  ![plancheVisuelle](medias/assets/images/nanokontrol2.jpg)
  
- Fils XLR, HDMI, USB-C, USB-A
- 2-6 Speakers Genelec
  
  ![plancheVisuelle](medias/assets/images/genelec_speakers.jpg)

#### Instruments
- Akai MPK Mini Plus 37-key Keyboard
  ![plancheVisuelle](medias/assets/images/akai_keyboard-37.png)
  
- EART Electric Guitar SSS Single Coil
  ![plancheVisuelle](medias/assets/images/guitar_electrique.jpg)
  
- Donner Electric Drum Set
  ![plancheVisuelle](medias/assets/images/drum_set.jpg)
  


### Logiciels
Différents Logiciels seront utilisé pour que les projections, les instruments et les lumières intéragissents entre elles.

- Touch Designer (Pour la projection et l'intéraction sur les visuels)
- MadMapper (Pour mapper les visuels sur les sculptures)
- After Effects (Pour les visuels de bases de l'écran)
- QLC+ ou SoundSwitch (Pour les lumières et l'intéractivité avec celle-ci)
- Reaper ou Max (Pour la détection d’audio des instruments, et les effets sur celle-ci)
- Blender / Maya (Pour les bases de visuels 3D, objets, etc.)

Le réseau de communication serait majoritairement midi car celle-ci est faite pour la détection d’audio d’instruments musicales.

## Réferences: 

https://village-numerique.mutek.org/fr/installations/isochrone-par-manuel-chantre


