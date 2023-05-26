// Slideshow.stories.ts|tsx

import type {Meta, StoryObj} from '@storybook/react'

import SlideShow from '../index'
import React, {useEffect, useRef} from 'react'

const meta: Meta<typeof SlideShow> = {
  title: 'SlideShow',
  component: SlideShow,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof SlideShow>

const images = [
    "https://images.unsplash.com/photo-1684529419842-6b0284bc83cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1684698937050-ae323feb1fb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1682018667453-b8d127e055b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1681999683665-6902894af42c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
];

export const Default: Story = {
  args: {
    children: images.map(i => <img src={i} />),
  },
}


export const Navigation: Story = {

  render: (args) => {

    const slideRef = useRef();

      useEffect(() => {
          slideRef.current.pause();
      }, [slideRef]);

    return (
        <>
            <SlideShow {...args} ref={slideRef}>
                {images.map(i => <img src={i} />)}
            </SlideShow>
            <div style={{textAlign: "center"}}>
                <a href="javascript:void(0)" onClick={() => slideRef.current.goNext()}>next</a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="javascript:void(0)" onClick={() => slideRef.current.goBack()}>prev</a>
            </div>
        </>
    )

  },
};


export const Pages: Story = {

    render: (args) => {

        const slideRef = useRef();

        useEffect(() => {
            slideRef.current.pause();
        }, [slideRef]);

        return (
            <>
                <SlideShow {...args} ref={slideRef}>
                    {images.map(i => <img src={i} />)}
                </SlideShow>
                <div style={{textAlign: "center"}}>
                    {images.map((_, i) => (<><a href="javascript:void(0)" onClick={() => slideRef.current.goTo(i)}>{i+1}</a>&nbsp;&nbsp;&nbsp;</>))}
                </div>
            </>
        )

    },
};