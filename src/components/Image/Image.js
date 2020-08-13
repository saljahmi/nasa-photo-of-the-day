import React, {useState} from 'react';
import ImageHeader from './ImageHeader.js'
import ImageSub from './ImageSub'

const Image = props => {
    const {date, explanation, title} = props;
    
    return(
        <div className = 'image-border'>
            <ImageHeader
                title = {props.title}
            />
            <div className = 'image-wrapper'>
                <img 
                    alt = "photo of the day"
                    className = 'image'
                    src = {props.hdurl}
                />
            </div>
            <ImageSub
                date = {props.date}
                explanation = {props.explanation}
            />
        </div>
    );
};

export default Image;