import React from 'react';

const ImageSub = props => {
    
    return(
        <div className = 'sub-border'>
            <h2>{props.date}</h2>
            <p>{props.explanation}</p>
        </div>
    );
};

export default ImageSub;