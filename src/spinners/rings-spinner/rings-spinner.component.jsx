import React from 'react'
import './rings-spinner.styles.scss'
import styled, { keyframes } from 'styled-components'

const rotateAnimation = keyframes`
    0% {
        opacity: 1;
        transform: scale(1) rotateX(0deg) rotateY(0deg);
        animation-timing-function: ease-in;
    }
    50% {
        opacity: 0.7;
        transform: scale(1.2) rotate(180deg) rotateY(180deg);
        animation-timing-function: linear;
    }
    100% {
        opacity: 1;
        transform: scale(1) rotate(360deg) rotateY(360deg);
        animation-timing-function: ease-out;
    }
`

const Ring = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border: 5px solid grey;
    border-radius: 50%;
    box-size: border-box;

    animation-name: ${rotateAnimation};
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-delay: ${props => props.delay}ms;
`

const RingSpinner = () => {
    const ringCount = 4
    const delay = 200
    const delays = (new Array(ringCount).fill(0)).map((e,i) => i * delay)

    return (
    <div className='ring-spinner'>
        {delays.map((delay, indx) => <Ring key={indx} delay={delay} />)}
    </div>
    )
}

export default RingSpinner