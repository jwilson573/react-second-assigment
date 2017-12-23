import React from 'react';

const charComponent = (props) => {
    return (
        <div onClick={props.click}>
            {props.character}
        </div>
    )
}

export default charComponent;