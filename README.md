# React-Slideshow

React slideshow component supporting slide, fade.

## Installation
```
# npm
npm install react-slideshow-lib

# yarn
yarn add react-slideshow-lib
```

### Options
1. fx - The name of the slideshow transition to use. The following transition names are available by default and more can be added with plugins: fade and scrollHorz.
2. duration - The time between slide transitions in milliseconds.
3. transitionDuration - how long the transition takes.
4. delay - The number of milliseconds to add onto, or substract from, the time before the first slide transition occurs.
5. defaultIndex - Specifies the first slide to display
6. loop - Specifies if the transition should loop infinitely
7. pauseOnHover - whether the transition effect pause when the mouse hovers the slider
8. easing - The timing transition function to use. You can use one of linear, ease.


Here's a basic example
```tsx
import React from 'react';
import SlideShow from 'react-slideshow-lib';

const Example = () => {

    return (
        <SlideShow>
            <img src="url1" />
            <img src="url2" />
            <img src="url3" />
            <img src="url4" />
        </SlideShow>
    );
};

export default Example;
```
[codesandbox](https://codesandbox.io/s/slideshow-default-bsecfv)

Navigation example

```tsx
import React, { useEffect, useRef } from "react";
import SlideShow from "react-slideshow-lib";

const images = [
    "https://images.unsplash.com/photo-1684529419842-6b0284bc83cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1684698937050-ae323feb1fb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1682018667453-b8d127e055b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1681999683665-6902894af42c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
];

export default function App() {
    const slideRef = useRef();

    useEffect(() => {
        slideRef.current.pause();
    }, [slideRef]);

    return (
        <>
            <SlideShow ref={slideRef}>
                {images.map((i) => (
                    <img src={i} />
                ))}
            </SlideShow>
            <div style={{ textAlign: "center" }}>
                <a href="javascript:void(0)" onClick={() => slideRef.current.goNext()}>
                    next
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="javascript:void(0)" onClick={() => slideRef.current.goBack()}>
                    prev
                </a>
            </div>
        </>
    );
}
```
[codesandbox](https://codesandbox.io/s/slideshow-navigation-rs1cfo)


Page example

```tsx
const Example = () => {

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
    
};

export default Example;

```
[codesandbox](https://codesandbox.io/s/slideshow-pages-yvjdib)