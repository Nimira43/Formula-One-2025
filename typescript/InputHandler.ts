import { KeyState, DriverData } from './types'
import { renderSim2 } from './sim2'

export class InputHandler {
  public keyState: KeyState
  private enabled: boolean
  private driver: DriverData
  private element: HTMLElement | null

  constructor(targetElement: HTMLElement | null, driver: DriverData) {
    this.keyState = {
      ArrowUp: false,
      ArrowDown: false,
      ArrowLeft: false,
      ArrowRight: false,
    }

    this.enabled = true
    this.driver = driver
    this.element = targetElement

    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (this.enabled && e.key in this.keyState) {
        this.keyState[e.key as keyof KeyState] = true
      }
    })

    document.addEventListener('keyup', (e: KeyboardEvent) => {
      if (e.key in this.keyState) {
        this.keyState[e.key as keyof KeyState] = false
      }
    })

    if (this.element) {
      this.element.addEventListener('mouseenter', () => {
        renderSim2(this.driver.id)
      })
    }
  }

  enable(): void {
    this.enabled = true
    console.log(`[Input] Enabled for ${this.driver.driver}`)
  }

  disable(): void {
    this.enabled = false
    Object.keys(this.keyState).forEach(key => {
      this.keyState[key as keyof KeyState] = false
    })
    console.log(`[Input] Disabled for ${this.driver.driver}`)
  }
}
