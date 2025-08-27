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
    this.height = 10 
    this.isPlayer = isPlayer 
    this.pathIndex = 0 

    this.distance = 0 
    this.lap = 1 
    this.prevX = x 
    this.prevY = y 
  }

  update(keys, path = []) {
    if (this.isPlayer) {
      if (keys['ArrowUp']) this.speed += this.acceleration 
      if (keys['ArrowDown']) this.speed -= this.acceleration 
      this.speed *= (1 - this.friction) 
      this.speed = Math.max(-this.maxSpeed, Math.min(this.speed, this.maxSpeed)) 
      if (keys['ArrowLeft']) this.angle -= this.turnSpeed 
      if (keys['ArrowRight']) this.angle += this.turnSpeed 
      this.x += Math.cos(this.angle) * this.speed 
      this.y += Math.sin(this.angle) * this.speed 
    } else {
      const target = path[this.pathIndex] 
      if (!target) return 
      const dx = target.x - this.x 
      const dy = target.y - this.y 
      const dist = Math.sqrt(dx * dx + dy * dy) 
      if (dist < 5) {
        this.pathIndex = (this.pathIndex + 1) % path.length 
      } else {
        this.angle = Math.atan2(dy, dx) 
        this.x += Math.cos(this.angle) * this.maxSpeed 
        this.y += Math.sin(this.angle) * this.maxSpeed 
      }
    }

    const dx = this.x - this.prevX 
    const dy = this.y - this.prevY 
    this.distance += Math.sqrt(dx * dx + dy * dy) 
    this.prevX = this.x 
    this.prevY = this.y 

    if (this.pathIndex === 0 && this.distance > 1000) {
      this.lap += 1 
      this.distance = 0 
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

function getRaceOrder(cars) {
  return [...cars].sort((a, b) => (b.lap * 10000 + b.distance) - (a.lap * 10000 + a.distance)) 
}

const raceState = {
  cars: []
} 

const canvas = document.getElementById('track') 
const ctx = canvas.getContext('2d') 
const keys = {} 
document.addEventListener('keydown', e => keys[e.key] = true) 
document.addEventListener('keyup', e => keys[e.key] = false) 

const aiPath = [
  { x: 100, y: 100 },
  { x: 700, y: 100 },
  { x: 700, y: 500 },
  { x: 100, y: 500 }
] 

const cars = [] 
cars.push(new Car('player', 400, 300, 'red', true))
for (let i = 0; i < 19; i++) {
  const x = 100 + i * 30 
  const y = 100 
  const color = `hsl(${(i * 20) % 360}, 70%, 50%)` 
  cars.push(new Car(`ai-${i}`, x, y, color)) 
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

  cars.forEach(car => {
    car.update(keys, aiPath) 
    car.draw(ctx) 
  }) 

  raceState.cars = cars.map(car => ({
    id: car.id,
    x: car.x,
    y: car.y,
    angle: car.angle,
    lap: car.lap,
    distance: car.distance,
    colour: car.colour
  })) 

  requestAnimationFrame(loop) 
}

loop() 
