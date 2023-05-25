import { ReactNode } from 'react'

export type FxType = 'fade' | 'scrollHorz'
export type easingType = 'ease' | 'linear'

export type BaseProps = {
  /** the content of the slideshow */
  children: ReactNode
  /** Ref for the slideshow. This is useful for executing methods like goBack, goNext, goTo, pause and resume on the slideshow */
  ref?: SlideshowRef
  /**
   * The name of the slideshow transition to use.
   * The following transition names are available by default and more can be added with plugins: fade and scrollHorz.
   * */
  fx?: FxType
  /** The time between slide transitions in milliseconds. */
  duration?: number
  /** how long the transition takes */
  transitionDuration?: number
  /** The number of milliseconds to add onto, or substract from, the time before the first slide transition occurs. */
  delay?: number
  /** Specifies the first slide to display */
  defaultIndex?: number
  /** Specifies if the transition should loop infinitely */
  loop?: boolean
  /** whether the transition effect pause when the mouse hovers the slider */
  pauseOnHover?: boolean
  /** The timing transition function to use. You can use one of linear, ease. */
  easing?: easingType
}

export type SlideshowRef = {
  goNext: () => void
  goBack: () => void
  goTo: (index: number, options?: { skipTransition?: boolean }) => void
  pause: () => void
  resume: () => void
}
