import React from 'react'
import styled, { keyframes } from 'styled-components'

const spinAnimation = (rotations = 1) => keyframes`
    0% {
        transform: scale(1) rotate(0deg);
        animation-timing-function: ease-in;
    }
    50% {
        transform: scale(0.6) rotate(${rotations * 180}deg);
        animation-timing-function: linear;
    }
    100% {
        transform: scale(1) rotate(${rotations * 360}deg);
        animation-timing-function: ease-out;
    }
`

const Square = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(220,220,220);
    mix-blend-mode: multiply;
    animation-name: ${spinAnimation()};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-delay: ${props => props.delay}ms;
    border-radius: 35px;
`

const SquareBlur = () => {
    const count = 5;
    const delay = 200
    const delays = (new Array(count)).fill(0).map((e, indx) => indx * delay)

    console.log('delays:', delays)

    return (
        <div style={{position: 'relative'}}>
            {delays.map((delay, indx) => <Square key={indx} delay={delay} />)}
        </div>
    )
}

export default SquareBlur