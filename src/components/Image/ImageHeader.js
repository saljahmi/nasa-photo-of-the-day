import React from 'react';

const ImageHeader = props => {

    return(
        <div className = 'header-border'>
            <h2>{props.title}</h2>
        </div>
    );
};

export default ImageHeader