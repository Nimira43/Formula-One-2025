import { drivers } from './driversData.js'

class InputHandler {
  constructor() {
    this.keyState = {
      ArrowUp: false,
      ArrowDown: false,
      ArrowLeft: false,
      ArrowRight: false
    }
    this.enabled = true

    document.addEventListener('keydown', e => {
      if (this.enabled && e.key in this.keyState) {
        this.keyState[e.key] = true
      }
    })

    document.addEventListener('keyup', e => {
      if (e.key in this.keyState) {
        this.keyState[e.key] = false
      }
    })
  }

  disable() {
    this.enabled = false
    Object.keys(this.keyState).forEach(key => this.keyState[key] = false)
  }

  enable() {
    this.enabled = true
  }
}

class RoadLine {
  constructor(y, container, speed) {
    this.y = y
    this.speed = speed
    this.element = document.createElement('div')
    this.element.className = 'line'
    this.element.style.top = `${this.y}px`
    container.appendChild(this.element)
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