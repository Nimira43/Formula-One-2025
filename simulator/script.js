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

  update() {
    this.y = this.y >= 1500 ? this.y - 1500 : this.y + this.speed
    this.element.style.top = `${this.y}px`
  }
}

class Player {
  constructor(container, speed) {
    this.speed = speed
    this.x = 0
    this.y = 0
    this.element = document.createElement('div')
    this.element.className = 'car'
    container.appendChild(this.element)
    this.x = this.element.offsetLeft
    this.y = this.element.offsetTop
  }

  update(bounds, keyState) {
    if (keyState.ArrowUp && this.y > bounds.top) this.y -= this.speed
    if (keyState.ArrowDown && this.y < bounds.bottom) this.y += this.speed
    if (keyState.ArrowLeft && this.x > 0) this.x -= this.speed
    if (keyState.ArrowRight && this.x < bounds.width - 50) this.x += this.speed

    this.element.style.left = `${this.x}px`
    this.element.style.top = `${this.y}px`
  }
}

class Enemy {
  constructor() {
    this.driver = driverData
    this.y = -600 * (index + 1)
    this.speed = 3 + Math.random() * 3
    this.direction = Math.random() < 0.5 ? -1 : 1
    this.drift = 0.75 + Math.random()

    this.element = document.createElement('div')
    this.element.className = 'enemy'
    this.element.innerHTML = `<br>${driverData.car}`
    this.element.style.top = `${this.y}px`
    this.element.style.left = `${Math.floor(Math.random() * (container.offsetWidth - 50))}px`
    this.element.style.backgroundColor = driverData.colour
    this.element.style.border = `3px solid ${driverData.badge}`

    container.appendChild(this.element)
  }

  update(container) {
    this.y += this.speed
    this.element.style.top = `${this.y}px`

    let newLeft = this.element.offsetLeft + this.direction * this.drift
    const maxLeft = container.offsetWidth - 50

    if (newLeft <= 0 || newLeft >= maxLeft) this.direction *= -1
    this.element.style.left = `${newLeft}px`

    if (this.y >= 1500) this.reset(container)
  }
  
  reset(container) {
    this.y = -600
    this.element.style.left = `${Math.floor(Math.random() * (container.offsetWidth - 50))}px`
    this.element.style.backgroundColor = this.driver.colour
    this.element.style.border = `3px solid ${this.driver.badge}`
    this.speed = 2 + Math.random() * 3
    this.direction = Math.random() < 0.5 ? -1 : 1
    this.drift = 0.5 + Math.random()
  }

  checkCollision(other) {
    const a = this.element.getBoundingClientRect()
    const b = other.element.getBoundingClientRect()
    return !(
      a.bottom < b.top ||
      a.top > b.bottom ||
      a.right < b.left ||
      a.left > b.right
    )
  }
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

  start() {
    this.startScreen.classList.add('hide')
    this.gameArea.innerHTML = ''
    this.score = 0
    this.isPlaying = true

    this.roadLines = Array.from({ length: 10 }, (_, i) => new RoadLine(i * 150, this.gameArea, this.speed))
    this.player = new Player(this.gameArea, this.speed)

    const selectedDrivers = drivers.sort(() => 0.5 - Math.random()).slice(0, 7)
    this.enemies = selectedDrivers.map((driver, i) => new Enemy(driver, this.gameArea, i))

    this.input.enable()
    requestAnimationFrame(() => this.loop())
  }

  loop() {
    const bounds = this.gameArea.getBoundingClientRect()
    this.roadLines.forEach(line => line.update())
    this.player.update(bounds, this.input.keyState)

    this.enemies.forEach((enemy, i) => {
      enemy.update(this.gameArea)

      if (enemy.checkCollision(this.player)) return this.end()

      for (let j = i + 1; j < this.enemies.length; j++) {
        const other = this.enemies[j]
        if (enemy.checkCollision(other)) {
          enemy.direction *= -1
          other.direction *= -1
          enemy.speed = Math.max(1.5, enemy.speed * 0.8)
          other.speed = Math.max(1.5, other.speed * 0.8)
        }
      }
    })

    this.score++
    this.scoreDisplay.innerHTML = `Score: ${this.score}`

    if (this.isPlaying) requestAnimationFrame(() => this.loop())
  }
  
  end() {
    this.isPlaying = false
    this.input.disable()
    this.scoreDisplay.innerHTML = `Game Over<br>Score was ${this.score}`
    this.startScreen.classList.remove('hide')
  }
}

new Game()