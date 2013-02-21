

Inspired by [controldeck.js](https://github.com/dfcb/controldeck.js). With the same idea, this repo shows how to turn a mobile phone into a game controller.

Our first game is Super Mario which is written by [@Diogenesthecynic](https://github.com/Diogenesthecynic/) in javascript. 

### How to Play

1. First, make sure your have [node](http://nodejs.org/) installed, if not, follow the [installation guide](https://github.com/joyent/node/wiki/Installation).

2. Download this repo from github and get the submodules.
        
        git clone git://github.com/yuanchuan/game-controller.git
        cd game-controller 
        git submodule update --init

3. Install required packages and run.

        npm install
        node app.js

4. Open your browser and have fun!

  - The game page: [http://localhost:3000/mario/index.html](http://localhost:3000/mario/) 
  - The controller page: [http://localhost:3000/mario/controller.html](http://localhost:3000/mario/controller.html)

### Screenshot

![supermario](screenshot/mario.jpg)

###License

[Creative Commons Attribution 3.0 License](http://creativecommons.org/licenses/by/3.0/)
