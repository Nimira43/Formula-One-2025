import { drivers } from './driversData.js'

class InputHandler {
  constructor() {

  }

  disable() {}
  enable() {}
}

class RoadLine {
  constructor(y, container, speed) {

  }
  update() {}
}

class Player {
  constructor(container, speed) {

  }
  update(bounds, keyState) {}
}

class Enemy {
  constructor() {

  }
  update(container) {}
  reset(container) {}
  checkCollision(other) {}
}

class Game {
  constructor() {
    this.score = 0
    this.isPlaying = false
    this.speed = 5
    this.roadLines = []
    this.enemies = []

    this.scoreDisplay = document.querySelector('.score')
    this.startScreen = document.querySelector('.start-screen')
    this.gameArea = document.querySelector('.game-area')

    this.player = null
    this.input = new InputHandler()

    this.startScreen.addEventListener('click', () => this.start())
  }
  start() {}
  loop() {}
  end() {}
}

new Game()