# Projet CV Web

Dans le cadre du module Frontend de première année à l'IG2I, nous sommes ammenés à travailler sur un court projet consistant à refaire notre CV en XHTML, CSS et JavaScript.

Un des critères d'évaluation du CV est la validité de la page sur W3C validator.

## Forme du CV :
Les balises <div> ont été beaucoup utilisées pour la création du CV. Elles permettent de manier aisément des blocs dans d’autres blocs et sont très puissantes lorsqu’elles sont utilisées avec un display : flex (CSS3).

Le CV est séparé en deux grandes parties. 
### header :
Un partie nommé « header » contient une photo, un nom, l’intitulé « Recherche de stage », une date de naissance ainsi qu’une adresse. 

### page :
La seconde partie du CV est la partie « page ». 
Elle contient deux colonnes (div affichées en flex).

#### left-div :
Cette première colonne est consacrée aux informations essentielles : mes compétences, langues et loisirs. 

#### right-div :
Cette seconde colonne contient les autres informations du CV : formations, expériences professionnelles, projets informatiques et réalisations. 

## JavaScript :
Pour l’utilisation du JavaScript, j’ai décidé de rendre mon âge dynamique (s’actualisant donc chaque année) en codant dans un premier temps une fonction age() qui prend en paramètres le jour, le mois et l’année de naissance. 
Utiliser une telle fonction permettrait de l’adapter pour n’importe qui. 

La seconde utilisation du JavaScript est en mettant en place un système de RepCaptcha, demander à l’utilisateur de cliquer sur un bouton pour afficher le numéro de téléphone. 
Cela pourrait être une utilisation concrète car de nombreux bots, à l’image des moteurs de recherche, scannent les pages web pour en extraire des informations pour les revendre. Cela permet donc de ne pas avoir le numéro de téléphone en claire ni dans la page ni dans le JavaScript (on effectue une simple opération mathématique sur chaque nombre avant de l’afficher).  

