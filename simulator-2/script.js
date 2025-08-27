const canvas = document.getElementById('track')
  const ctx = canvas.getContext('2d')

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

  function drawCar() {
    ctx.save();
    ctx.translate(car.x, car.y)
    ctx.rotate(car.angle)
    ctx.fillStyle = 'red'
    ctx.fillRect(-car.width/2, -car.height/2, car.width, car.height)
    ctx.restore()
  }

  function drawTrack() {
    ctx.fillStyle = '#333';
    ctx.fillRect(50, 50, 700, 500);
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 4;
    ctx.strokeRect(50, 50, 700, 500);
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawTrack()
    update()
    drawCar()
    requestAnimationFrame(loop)
  }

  loop()