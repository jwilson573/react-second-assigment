import React from 'react';

const validation = (props) => {
    const commentLength = props.commentLength;
    let validateText = "";
    console.log(commentLength);
    if(commentLength > 5){
        validateText = "Your comment speaks volumes. Good jerb!";
        
    } else {
        validateText = "Comment is too short! Please say more!";
    }
    return (
        <div>
            <p>{validateText}</p>
        </div>
    )
}

export default validation;