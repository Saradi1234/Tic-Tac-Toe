import React from 'react'

const Square = (props) => {
    return (
        <div onClick={props.onClick} className='square'
            style={{
                'border': "1px solid",
                'display': 'flex',
                "justifyContent": "space-evenly",
                "alignItems": "center",
                "height": "100px",
                "width": "100%"
            }}
        >
            <h5>{props.value}</h5>
        </div>
    )
}

export default Square