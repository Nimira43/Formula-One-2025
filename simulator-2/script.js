const canvas = document.getElementById('track')
const ctx = canvas.getContext('2d')

class Car {
  constructor(id, x, y, colour, isPlayer = false) {
    this.id = id 
    this.x = x 
    this.y = y 
    this.colour = colour 
    this.angle = 0 
    this.speed = 0 
    this.maxSpeed = 4 
    this.acceleration = 0.2 
    this.friction = 0.05 
    this.turnSpeed = 0.05 
    this.width = 20 
    this.height = 40 
    this.isPlayer = isPlayer 
    this.pathIndex = 0 
  }

  update(keys, path = []) {
    if (this.isPlayer) {
      if (keys['ArrowUp']) this.speed += this.acceleration 
      if (keys['ArrowDown']) this.speed -= this.acceleration 
      this.speed *= (1 - this.friction) 
      this.speed = Math.max(-this.maxSpeed, Math.min(this.speed, this.maxSpeed)) 
      if (keys['ArrowLeft']) this.angle -= this.turnSpeed 
      if (keys['ArrowRight']) this.angle += this.turnSpeed 
      this.x += Math.sin(this.angle) * this.speed 
      this.y -= Math.cos(this.angle) * this.speed 
    } else {
      const target = path[this.pathIndex] 
      if (!target) return 
      const dx = target.x - this.x 
      const dy = target.y - this.y 
      const distance = Math.sqrt(dx * dx + dy * dy) 
      if (distance < 5) {
        this.pathIndex = (this.pathIndex + 1) % path.length 
      } else {
        this.angle = Math.atan2(dy, dx) 
        this.x += Math.cos(this.angle) * this.maxSpeed 
        this.y += Math.sin(this.angle) * this.maxSpeed 
      }
    }
  }

  draw(ctx) {
    ctx.save() 
    ctx.translate(this.x, this.y) 
    ctx.rotate(this.angle) 
    ctx.fillStyle = this.colour 
    ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height) 
    ctx.restore() 
  }
}





const car = {
  x: 400, y: 300,
  angle: 0,
  speed: 0,
  maxSpeed: 4,
  acceleration: 0.2,
  friction: 0.05,
  turnSpeed: 0.05,
  width: 20, height: 40
}

const aiCar = {
  x: 100,
  y: 100,
  angle: 0,
  speed: 2,
  width: 40,
  height: 20,
  pathIndex: 0
} 

const aiPath = [
  { x: 100, y: 100 },
  { x: 700, y: 100 },
  { x: 700, y: 500 },
  { x: 100, y: 500 }
] 

const keys = {}
document.addEventListener('keydown', e => keys[e.key] = true)
document.addEventListener('keyup', e => keys[e.key] = false)

function update() {
  if (keys['ArrowUp']) car.speed += car.acceleration
  if (keys['ArrowDown']) car.speed -= car.acceleration
  car.speed *= (1 - car.friction)
  car.speed = Math.max(-car.maxSpeed, Math.min(car.speed, car.maxSpeed))

  if (keys['ArrowLeft']) car.angle -= car.turnSpeed
  if (keys['ArrowRight']) car.angle += car.turnSpeed

  car.x += Math.sin(car.angle) * car.speed
  car.y -= Math.cos(car.angle) * car.speed
}

function updateAICar() {
  const target = aiPath[aiCar.pathIndex] 
  const dx = target.x - aiCar.x 
  const dy = target.y - aiCar.y 
  const distance = Math.sqrt(dx * dx + dy * dy) 

  if (distance < 5) {
    aiCar.pathIndex = (aiCar.pathIndex + 1) % aiPath.length 
  } else {
    aiCar.angle = Math.atan2(dy, dx) 
    aiCar.x += Math.cos(aiCar.angle) * aiCar.speed 
    aiCar.y += Math.sin(aiCar.angle) * aiCar.speed 
  }
}

function drawCar() {
  ctx.save() 
  ctx.translate(car.x, car.y)
  ctx.rotate(car.angle)
  ctx.fillStyle = 'red'
  ctx.fillRect(-car.width/2, -car.height/2, car.width, car.height)
  ctx.restore()
}

function drawAICar() {
  ctx.save() 
  ctx.translate(aiCar.x, aiCar.y) 
  ctx.rotate(aiCar.angle) 
  ctx.fillStyle = 'blue' 
  ctx.fillRect(-aiCar.width/2, -aiCar.height/2, aiCar.width, aiCar.height) 
  ctx.restore() 
}

function drawTrack() {
  ctx.fillStyle = '#333' 
  ctx.fillRect(50, 50, 700, 500) 
  ctx.strokeStyle = '#fff' 
  ctx.lineWidth = 4 
  ctx.strokeRect(50, 50, 700, 500) 
}

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height) 
  drawTrack() 
  update() 
  updateAICar() 
  drawCar() 
  drawAICar() 
  requestAnimationFrame(loop) 
}

loop()