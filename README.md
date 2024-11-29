# Instrumentum

## Idée

### Concept
Créer un monde abstrait combinant la musique, la technologie et la nature ayant pour but de permettre aux gens de s'amuser, de faire de la musique en groupe et les sensibiliser envers la nature. Il y aurait 5 piédestaux dont un cube par piédestals et chaque cubes produiraient des sons de manière indépendante, permettant à plusieurs personnes de jouer ensemble. Il y aurait une projection sur le mur faisant face aux 5 cubes et celle-ci sera aussi controllé par les cubes. Pour chaque forme,  chaque faces auraient un TOF qui controlleraient quelque chose. Par exemple, un TOF pourrait controller le volume, un autre pourrait controller un effet phaser, etc.

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
![shéma Interactif ](medias/assets/images/shema_Interactif_nouveau.png)

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

- 2-6 5PX-HEX (Lumières) [Documentation](https://www.adj.com/5px-hex)
  ![plancheVisuelle](medias/assets/images/5PX-HEX.jpg)
  
- Ordinateurs (1 ou 2)

- Fils XLR, HDMI, USB-C, USB-A

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

#### Piédestales (x3)


### Logiciels
Différents Logiciels seront utilisé pour que les projections, les instruments et les lumières intéragissents entre elles.

- TouchDesigner (Pour la projection et l'intéraction sur les visuels)
- QLC+ (Pour les lumières et l'intéractivité avec celle-ci)
- Blender / Maya (Pour modéliser les cubes)
- Ableton live 12 (son)

Le réseau de communication serait majoritairement midi car celle-ci est faite pour la détection d’audio d’instruments musicales.

## Réferences: 

https://village-numerique.mutek.org/fr/installations/isochrone-par-manuel-chantre


