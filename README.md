# ToDoTrip - Make a list for your trip

Ce projet à pour but d'utiliser le framework d'angularjs lors d'un projet pour ce familiariser avec celui-ci.

## Mise en route

Pour commencer à utiliser ToDoTrip, il faut simplement cloner ce repository

### Pré-requis

Logiciel : 
* Git : [http://git-scm.com/](http://git-scm.com/).
* NodeJS : [http://nodejs.org/](http://nodejs.org/) avec NPM.

### Cloner ToDoTrip

Cloner le repository [git][git]:

```
git clone https://github.com/jessyca27/ToDoTrip.git
cd ToDoTrip
```

### Installation des dépendances

Il faut simplement lancer :

```
npm install
```

Cela va installer toutess les dépendances requises ainsi que lancer automatiquement `bower`.
Une fois le processus fini, deux nouveaux dossier dans le projet sont crées : 

* `node_modules` - Contiens les package installer avec npm
* `app/bower_components` - Contient le framework de angularjs, jquery, bootstrap ....


Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.


### Lancer l'application

Un simple serveur web est configurer par défaut, pour le lancer il faut juste : 

```
npm start
```

Vous pouver voir l'application à l'adresse : `http://localhost:8000/app/index.html`.

## Contact

For more information on AngularJS please check out http://angularjs.org/

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server
