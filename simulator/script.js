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
    
  }
  start() {}
  loop() {}
  end() {}
}

new Game()