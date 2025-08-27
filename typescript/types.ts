// Driver metadata
export interface DriverData {
  id: string
  driver: string
  carNumber: string
  colour: string
  badge: string
}

// Key input state
export interface KeyState {
  ArrowUp: boolean
  ArrowDown: boolean
  ArrowLeft: boolean
  ArrowRight: boolean
}

// Bounding box for movement constraints
export interface Bounds {
  top: number
  bottom: number
  width: number
}

// Road line element
export interface RoadLineProps {
  y: number
  speed: number
  element: HTMLDivElement
}

// Player car
export interface PlayerProps {
  x: number
  y: number
  speed: number
  element: HTMLDivElement
}

// Enemy car
export interface EnemyProps {
  driver: DriverData
  y: number
  speed: number
  direction: number
  drift: number
  element: HTMLDivElement
}

// Game state
export interface GameState {
  score: number
  isPlaying: boolean
  speed: number
  roadLines: RoadLineProps[]
  enemies: EnemyProps[]
  scoreDisplay: HTMLElement
  startScreen: HTMLElement
  gameArea: HTMLElement
  player: PlayerProps | null
  input: InputHandler | null
}
