import Scene from './components/Scene'

// Setup canvas.
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// Set canvas dimensions.
let canvasWidth = window.innerWidth
let canvasHeight = window.innerHeight

canvas.width = canvasWidth
canvas.height = canvasHeight

addEventListener('resize', () => {
  canvasWidth = window.innerWidth
  canvasHeight = window.innerHeight

  canvas.width = canvasWidth
  canvas.height = canvasHeight

  scene.updateCanvas(canvasWidth, canvasHeight)
})

// Start app.
const scene = new Scene(
  ctx,
  canvasWidth,
  canvasHeight
)

scene.draw()
