import React from 'react'
import './Toggle.css'

const ChildToggle = (props) => {
    return (
        <div className='child_container'>
            <h3>{props.title}</h3>
            {
                props.isActive ? <p>{props.children}</p>
                : <button onClick={props.show}>Show</button>
            }
        </div>
    )
}

export default ChildToggle