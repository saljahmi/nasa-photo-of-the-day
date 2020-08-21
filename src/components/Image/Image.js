import React, {useState} from 'react';
import ImageHeader from './ImageHeader.js'
import ImageSub from './ImageSub'

const Image = props => {
    const {image, setImage} = props;
    
    return(
        <div className = 'image-border'> 
            {image && <>
            <ImageHeader
                title = {image.title}
            />
            <div className = 'image-wrapper'>
                <img 
                    alt = "photo of the day"
                    className = 'image'
                    src = {image.hdurl}
                />
            </div>
            <ImageSub
                date = {image.date}
                explanation = {image.explanation}
            />
            </>}
        </div>
    );
};

export default Image;