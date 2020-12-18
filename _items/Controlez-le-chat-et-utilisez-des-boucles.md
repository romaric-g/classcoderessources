---
title: Controlez le chat et utilisez des boucles
date: 2020-11-03T07:42:23+01:00 
created: 2020-03-18T15:39:13+01:00
author: ClaudeTerosier
preview: /images/previews/P1_-_M4.jpg
---
Rien de trop difficile pour le moment. Vous avez certainement fait avancer le chat avec le blocavancer de "10" .

Bloc avancer de 10
Peut-être même l’avez-vous fait parler en utilisant le blocdire "Hello!" pendant "2" secondes.

Bloc dire "Hello" pendant "2" secondes
Vous auriez aussi pu le faire miauler avecjouer le son "meow".

Bloc jouer le son "meow"
Vous avez donc certainement dû prendre l’un de ces blocs dans la partie “Scripts”, et vous l’avez glissé dans la partie où le code s’exécute, puis vous avez cliqué dessus pour l’activer. Avez-vous aussi essayé d’accoler deux blocs, par exempledire "Hello!"etavancer de "10"comme ceci ?

Empiler les blocs
Imaginons maintenant que vous souhaitiez faire avancer le chat. Vous utilisez le blocavancer de "10". Le chat avance une fois de 10… mais de 10 quoi ? 10 pas ? Pourtant il ne semble pas faire 10 pas ! Et en effet, car il avance de 10 pixels.

Mais au fait, c’est quoi un pixel ? Le pixel, c’est l’unité de base qui permet de mesurer la définition d’une image. Avez-vous déjà essayé de zoomer sur une image ? Si vous le faites, vous vous apercevrez que votre image est constituée de plein de petits carrés (ou rectangles parfois), chacun portant une couleur élémentaire. L’assemblage de tous ces carrés, ou pixels, constitue votre image. D’ailleurs, pixel, ça vient de “picture element”, soit “élément d’image” en français.

Avez-vous essayé de changer cette valeur pour en tester d’autres ? (Si non, vous devriez essayer...)

Modifier la valeur des pixels
Donc, si vous souhaitez faire avancer le chat une fois de 10 pixels, vous cliquez sur le blocavancer de "10"que vous avez préalablement glissé dans la partie “code”. Si vous souhaitez le faire avancer deux fois, vous cliquez deux fois. Trois fois ? Vous cliquez trois fois… et ainsi de suite. Vous pouvez aussi ajouter plusieurs fois le même bloc, comme ceci :

Ajouter plusieurs fois le même bloc
Mais si vous souhaitez que votre chat avance tout seul indéfiniment, comment allez-vous procéder ? Vous vous dites qu’il existe sûrement un bloc qui permet de faire ça, et vous avez raison ! Avez-vous trouvé lequel ?

Indice : et si vous regardiez dans la catégorie “Contrôle” ?

Répétez des instructions
Eh oui ! Vous avez sûrement remarqué dans la section “Contrôle” qu’il existe un blocrépéter indéfiniment. En insérant le blocavancer de "10" à l’intérieur du blocrépéter indéfiniment puis en cliquant dessus, le chat Scratch avance indéfiniment… c’est-à-dire jusqu’à ce qu’il sorte de la scène. Votre bout de code ressemble donc à ça :

Faites avancer votre chat indéfiniment
Remarquez que dans les scripts, il existe un autre bloc similaire, le blocrépéter "10" fois. Vous avez bien sûr deviné son utilité : au lieu d’utiliser un certain nombre de fois un même bloc - dans notre casavancer de "10"- il vous suffit juste d’utiliser une fois chacun ces deux blocs et de remplir avec les valeurs adéquates. Ainsi, au lieu d'empiler 12 fois le blocavancer de "10", on peut être plus efficace avec seulement 2 blocs :

Répétez vos actions avec le bloc répéter "x" fois
En programmation, on appelle cela “faire une boucle”. Vous devinez pourquoi...

**Une question ? Un avis ? Besoin de conseil quel qu’il soit ? Notre bureau d’accueil est là via [classcode-accueil@inria.fr](mailto:classcode-accueil@inria.fr), on vous répond au plus vite !**