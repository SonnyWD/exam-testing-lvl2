# Questionnaire 

### Objectif des tests unitaires
Quel est l'objectif principal des tests unitaires ?

   - B) Vérifier le comportement d'une unité de code isolée


### Utilisation de Gherkin
Gherkin est principalement utilisé pour :

   - B) Décrire le comportement attendu dans un format compréhensible par tous

### Principe d'isolation
Expliquez en quoi consiste le principe d'isolation dans les tests unitaires et pourquoi il est important.

### Origine du BDD
Le BDD est une extension du :
   - A) Waterfall
   - B) Test Driven Development
   - C) Extreme Programming
   - D) Scrum
    - Nous ne l'avons pas vu en cours 

### Fonction des tests d'intégration
Les tests d'intégration vérifient principalement :

   - B) L'interaction entre différents composants ou modules


### Structure Gherkin
Expliquez la structure d'un scénario Gherkin et donnez un exemple concret.

Fonctionnalité : Emprunt de livre (décrit ce que cela fait)

  En tant qu’utilisateur inscrit
  Je veux pouvoir emprunter un livre disponible
  Afin de le lire à domicile

  (décrit le cas d'utilisation)
  Scénario : L’utilisateur emprunte un livre disponible
    Étant donné que le livre "1984" est disponible dans le catalogue
    Et que l’utilisateur "Alice" est inscrit avec la catégorie "standard"
    Quand Alice emprunte le livre "1984"
    Alors le livre "1984" doit être marqué comme "borrowed"
    Et il doit être associé à l’utilisateur "Alice"
    Et la date de retour doit être fixée à 14 jours après l’emprunt


### Mocks en tests unitaires
Dans le contexte des tests unitaires, que sont les "mocks" ?

   - B) Des objets qui simulent le comportement de dépendances réelles

### Objectif des tests end-to-end
Les tests end-to-end visent à :

   - B) Tester l'application de bout en bout du point de vue de l'utilisateur


### Cycle TDD
Expliquez en détail le cycle Red-Green-Refactor du TDD et ce qui se passe à chaque étape.

J'ai pas souvenir que tu en aies parlé.

### Caractéristiques d'un bon test unitaire
Quelle est la caractéristique idéale d'un bon test unitaire ?

    - B) Il doit être rapide à exécuter, isolé et répétable

### Mots-clés de Gherkin
Quels sont les mots-clés principaux de Gherkin ?

    - C) Feature, Scenario, Given, When, Then

### Tests unitaires vs tests d'intégration
Quelles sont les principales différences entre les tests unitaires et les tests d'intégration ?

Les tests unitaires testent uniquement une fonction de manière isolée, un test d'intégration va tester l'intéraction entre deux fonctions par exemple.

### Nom du cycle TDD
Le cycle TDD classique est connu sous le nom de :
    - A) Plan-Do-Check-Act
    - B) Red-Green-Refactor
    - C) Build-Measure-Learn
    - D) Test-Code-Deploy
    Je ne sais pas

### Focus des tests fonctionnels
Les tests fonctionnels se concentrent sur :

    - B) Les interactions entre composants

### BDD et communication d'équipe
Comment le BDD peut-il améliorer la communication entre les équipes techniques et les équipes métier ?

Je sais pas 

### Avantage principal du TDD
Quel est l'avantage principal du TDD ?
    - A) Il réduit le temps de développement global
    - B) Il garantit l'absence totale de bugs
    - C) Il favorise un design modulaire et des interfaces claires
    - D) Il élimine le besoin de documentation
    Je sais pas

### Avantages et défis des tests end-to-end
Quels sont les avantages et les défis spécifiques liés aux tests end-to-end par rapport aux autres types de tests ?

Les tests end-to-end vérifient le bon fonctionnement de l'application dans son ensemble, comme si un utilisateur l'utilisait réellement.
Ils permettent de valider les parcours critiques (ex : inscription, commande), mais sont souvent plus lents et fragiles que les tests unitaires.
Ils nécessitent une maintenance régulière, donc on les utilise de façon ciblée pour tester les fonctionnalités essentielles.
Ils sont complémentaires aux tests unitaires et d’intégration.

### Format des scénarios BDD
Quel est le format typique d'un scénario BDD ?
    - A) Si-Alors
    - B) Étant donné-Quand-Alors
    - C) Qui-Quoi-Où-Quand
    - D) Pour-Pendant-Après
Je ne sais pas 

### Avantages et limites des tests unitaires
Décrivez les avantages et les limites des tests unitaires dans un projet de développement logiciel.

Les tests unitaires présentent de nombreux avantages : ils sont rapides à exécuter, peu coûteux, et permettent de détecter les bugs très tôt dans le développement.
Ils facilitent également la modularité du code et le refactoring en toute sécurité.
Cependant, ils ont leurs limites : ils ne testent que des composants isolés, ne détectent pas les problèmes d’intégration, et peuvent nécessiter des mocks pour simuler certaines dépendances.
Mal utilisés, ils peuvent donner une fausse impression de fiabilité globale du système.


### Fonctionnalité de réutilisation dans Gherkin
Quelle est la fonctionnalité de Gherkin qui permet de réutiliser des étapes communes à plusieurs scénarios ?
    - A) Hooks
    - B) Background
    - C) Scenario Outline
    - D) Tags
Je ne sais pas

### Responsabilité des tests fonctionnels
Qui est généralement responsable de l'écriture et de l'exécution des tests fonctionnels ?
    - A) Les développeurs uniquement

### Moment d'écriture du code en TDD
Dans le TDD, à quel moment écrit-on le code de production ?
    - A) Avant d'écrire les tests
    - B) Après avoir écrit les tests mais avant de les exécuter
    - C) Après avoir exécuté les tests et constaté leur échec
    - D) Après que tous les tests aient réussi
Je ne sais pas

### Outils pour tests end-to-end
Quel outil est couramment utilisé pour les tests end-to-end d'applications web ?

    - C) Playwright

### Différences entre BDD et TDD
En quoi le BDD diffère-t-il du TDD en termes d'approche et d'objectifs ?
Je ne sais pas


### Défis des tests d'intégration
Quels défis sont fréquemment rencontrés lors de la mise en place de tests d'intégration ?

    - D) Toutes les réponses ci-dessus

### Caractéristiques d'un bon test end-to-end
Quelle est la caractéristique d'un bon test end-to-end ?

    - B) Il doit simuler avec précision le comportement réel des utilisateurs


### Défis de l'adoption du TDD
Quels sont les défis couramment rencontrés lors de l'adoption du TDD dans une équipe, et comment pourriez-vous les surmonter ?
Je ne sais pas 

### Frameworks de tests unitaires
Lequel de ces frameworks n'est PAS utilisé pour les tests unitaires ?

    - C) Selenium


### Rôles dans le processus BDD
Quels rôles sont généralement impliqués dans le processus BDD ?
    - A) Uniquement les développeurs
    - B) Développeurs et testeurs
    - C) Développeurs, testeurs et product owners
    - D) Développeurs, testeurs, product owners et parties prenantes métier
Je ne sais pas 

### Maintenance des tests end-to-end
Comment géreriez-vous la maintenance des tests end-to-end pour une application qui évolue rapidement ?

Pour une application qui évolue rapidement, je maintiendrais les tests end-to-end en me concentrant sur les parcours critiques, en utilisant des sélecteurs stables (data-testid), en évitant les dépendances inutiles à l’interface, et en exécutant les tests automatiquement en CI pour détecter les régressions tôt.
Je documenterais aussi chaque scénario pour faciliter leur mise à jour.

### Inconvénients des tests fonctionnels
Quel est le principal inconvénient des tests fonctionnels ?

    - B) Ils sont généralement lents et coûteux à exécuter


### Intégration de Gherkin en agile
Comment intégreriez-vous Gherkin dans un processus de développement agile ? Quels seraient les avantages ?
je ne sais pas 

### Principes du TDD
Lequel des principes suivants n'est PAS associé au TDD ?
    - A) Écrire le test minimum qui échoue
    - B) Écrire le code minimum qui fait passer le test
    - C) Refactoriser le code après chaque test réussi
    - D) Écrire tous les tests à la fin du développement
Je ne sais pas 

### Différences entre tests fonctionnels et autres tests
En quoi les tests fonctionnels diffèrent-ils des tests unitaires et d'intégration en termes d'approche et d'objectifs ?

Les tests fonctionnels se concentrent sur le comportement global du système par rapport aux spécifications métier, en simulant des scénarios réels d’utilisation.
À l’inverse, les tests unitaires vérifient des composants isolés (comme une fonction ou une méthode) et les tests d’intégration vérifient que plusieurs composants fonctionnent bien ensemble.
L’approche des tests fonctionnels est plus orientée utilisateur, tandis que les tests unitaires et d’intégration sont plus techniques et proches du code.

### Approche combinant TDD, BDD et Gherkin
Quelle approche combine naturellement TDD, BDD et Gherkin ?
    - A) Extreme Programming
    - B) Specification By Example
    - C) Scrum
    - D) Kanban
Je ne sais 

### Organisation des tests fonctionnels
Décrivez comment vous organiseriez les tests fonctionnels pour une application web de e-commerce.
Je sais pas 

### Pyramide de tests
Quelle est la pyramide de tests classique, du bas vers le haut ?

    - B) Tests unitaires, Tests d'intégration, Tests fonctionnels, Tests E2E


### Stratégie de test optimale
Comment détermineriez-vous la stratégie de test optimale pour un projet, en considérant les différents types de tests abordés dans ce questionnaire ?

Pour déterminer la stratégie de test optimale, je commencerais par identifier les parcours critiques de l’application (ex : inscription, commande, paiement).
Je m’appuierais sur la pyramide de tests : beaucoup de tests unitaires pour la logique métier, un nombre modéré de tests d’intégration pour les interactions entre composants, et quelques tests end-to-end pour valider les parcours réels côté utilisateur.
Je prendrais en compte la vitesse d’exécution, la maintenabilité, et le coût des différents tests, en automatisant autant que possible dans une pipeline CI/CD.
L’objectif est de maximiser la couverture utile, tout en gardant les tests rapides, fiables et faciles à maintenir.

### Quelle est l'erreur récurente qui peut être faite lors de test end 2 end ? (Je l'ai répété pas mal de fois)

Un bon test E2E doit rester ciblé sur un scénario utilisateur précis, rapide à exécuter, et éviter de dupliquer des vérifications couvertes ailleurs (comme les règles métiers testées en unitaire).