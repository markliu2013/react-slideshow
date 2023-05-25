import React, { useState, useEffect, useMemo, useImperativeHandle } from 'react'
import { BaseProps, SlideshowRef } from './types'

import styles from './index.module.scss'
import { defaultProps } from './props'

const SlideShow = React.forwardRef<SlideshowRef, BaseProps>((props, ref) => {
  const { children, pauseOnHover, duration, delay, transitionDuration, loop, defaultIndex, fx, easing } = props
  const childrenCount = useMemo<number>(() => React.Children.count(children), [children])
  const [currentIndex, setCurrentIndex] = useState<number>(defaultIndex!)
  const [preIndex, setPreIndex] = useState<number>(-1)
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const [firstPlayed, setFirstPlayed] = useState<boolean>(false)
  const [isHovering, setIsHovering] = useState<boolean>(false)
  const [isNext, setIsNext] = useState<boolean>(false)

  const next = () => {
    if (!loop && currentIndex === childrenCount - 1) {
      return
    }
    setIsNext(true)
    setPreIndex(currentIndex)
    setCurrentIndex((prevState) => (prevState + 1) % childrenCount)
  }

  const prev = () => {
    if (!loop && currentIndex === 0) {
      return
    }
    setIsNext(false)
    setPreIndex(currentIndex)
    setCurrentIndex((prevState) => (prevState === 0 ? childrenCount - 1 : prevState - 1))
  }

  const goto = (index: number) => {
    if (index < 0 || index >= childrenCount || index === currentIndex) {
      return
    }
    setIsNext(index > currentIndex)
    setPreIndex(currentIndex)
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (isPlaying) {
      if (!(pauseOnHover && isHovering)) {
        const timer = setTimeout(() => {
          next()
          setFirstPlayed(true)
        }, duration! + delay!)
        return () => clearTimeout(timer)
      }
    }
  }, [isPlaying, isHovering, pauseOnHover, duration, delay])

  useEffect(() => {
    if (isPlaying && firstPlayed) {
      if (!(pauseOnHover && isHovering)) {
        const timeout = setTimeout(() => {
          next()
        }, duration! + transitionDuration!)
        return () => clearInterval(timeout)
      }
    }
  }, [currentIndex, isPlaying, firstPlayed, isHovering, pauseOnHover, duration, transitionDuration])

  useImperativeHandle(ref, () => ({
    goNext: next,
    goBack: prev,
    goTo: goto,
    pause: () => setIsPlaying(false),
    resume: () => setIsPlaying(true),
  }))

  if (React.Children.count(children) === 0) {
    return null
  }

  return (
    <div
      className={`${styles['slide-container']} ${styles[fx!]}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {(React.Children.map(children, (thisArg) => thisArg) || []).map((each, key) => (
        <div
          className={styles['item']}
          key={key}
          aria-roledescription='slide'
          aria-hidden={key !== currentIndex}
          style={{
            transitionDuration: transitionDuration + 'ms',
            transitionTimingFunction: easing,
          }}
          data-isPre={key === preIndex}
          data-isNext={isNext}
        >
          {each}
        </div>
      ))}
    </div>
  )
})

SlideShow.displayName = 'SlideShow'

SlideShow.defaultProps = defaultProps

export default SlideShow
