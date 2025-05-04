import React from 'react'

const Child = React.memo((props) => {
    console.log("re render of child component")
    return (
        <div>
            <button onClick={props.handleClick}> {props.buttonName}</button>
        </div>
    )
})

export default Child


//  If we wrap component with React.memo then it will render only when child component changed


//  If we send function then React.memo will not save re render