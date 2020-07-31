import React from 'react'
import './hoverable.styles.scss'

const makeHoverable = (WrappedComponent) => () => (
    <div className='hoverable'>
        <WrappedComponent />
    </div>
)

export default makeHoverable