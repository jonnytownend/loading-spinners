import React from 'react'
import styled, { keyframes } from 'styled-components'

const spinAnimation = (numSpins = 1) => {
    const rotation = 360 * numSpins
    return keyframes`
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(${rotation}deg);
        }
    `
}

const Ring = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border: 5px solid rgb(220,220,220);
    border-top: 5px solid black;
    border-radius: 50%;
    box-sizing: border-box;
    mix-blend-mode: multiply;

    animation-name: ${spinAnimation(1)};
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-delay: ${props => props.delay}ms;
`

const BorderSpinner = () => {
    const ringCount = 4
    const delay = 100
    const delays = (new Array(ringCount)).fill(0).map((e,indx) => indx * delay)

    console.log('delays:', delays)

    return (
        <div style={{position: 'relative', opacity: '0.6'}}>
            {delays.map((delay, indx) => <Ring key={indx} delay={delay} />)}
        </div>
    )
}

export default BorderSpinner