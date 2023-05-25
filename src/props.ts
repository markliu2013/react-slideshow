import { easingType, FxType } from './types'

export const defaultProps = {
  fx: 'fade' as FxType,
  duration: 500,
  transitionDuration: 500,
  delay: 0,
  defaultIndex: 0,
  loop: true,
  pauseOnHover: true,
  easing: 'ease' as easingType,
}
