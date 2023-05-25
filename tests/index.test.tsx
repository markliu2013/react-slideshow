import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import SlideShow from '../src'

describe('SlideShow render', () => {
  it('renders without crashing', () => {
    render(
      <SlideShow>
        <img src='http://local.com/1.jpg' />
        <img src='http://local.com/2.jpg' />
        <img src='http://local.com/3.jpg' />
        <img src='http://local.com/4.jpg' />
      </SlideShow>,
    )
  })
})
