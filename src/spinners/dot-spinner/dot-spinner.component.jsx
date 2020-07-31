import React from 'react'
import './dot-spinner.styles.scss'
import styled, { keyframes } from 'styled-components'

const growAnimation = keyframes`
    0% {
        opacity: 0.7;
        transform: scale(1);
    }
    50% {
        opacity: 1;
        transform: scale(1.4);
    }
    100% {
        opacity: 0.7;
        transform: scale(1);
    }
`

const wiggleAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(10deg);
    }
    100% {
        transform: rorate(0deg);
    }
`

const DotGrow = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: grey;

    animation-name: ${growAnimation};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-delay: ${props => props.delay}ms;
`

const DotContainer = ({style, rotation, delay}) => {
    const updatedStyle = !!rotation ? {
        transform: `rotate(${rotation}deg)`
    } : undefined
    return (
    <div className='dot-container' style={{...style, ...updatedStyle}}>
        <DotGrow delay={delay} />
    </div>
    )
}

export const DotGrowSpinner = () => {
    const dotCount = 10
    const rotation = 360 / dotCount
    const rotations = new Array(dotCount).fill(0).map((e, indx) => indx * rotation)
    const animationDelay = 100;

    console.log('rotation: ', rotations)

    return (
    <div className='dot-spinner'>
        {rotations.map((rot, indx) => <DotContainer key={indx} rotation={rot} delay={indx * animationDelay} />)}
    </div>
    )
}