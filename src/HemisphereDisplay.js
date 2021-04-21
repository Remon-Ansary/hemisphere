import React from 'react'
import northernPic from './image/northern.jpg'
import southernPic from './image/southern.jpg'
 
const hemisphereConfig ={
    Northern:{
        text :'It is northern hemisphere',
        picture:northernPic

    },
    Southern:{
        text: 'It is southern hemisphere',
        picture:southernPic

    }
}

const HemisphereDisplay = ({latitude}) => {
    //console.log(latitude)
    const hemisphere = latitude>0 ? 'Northern' : 'Southern';
    const {text,picture} = hemisphereConfig[hemisphere]
    return (
        <div className={hemisphere}>
            <img src={picture} alt="" />
           {text}
        </div>
    )
}

export default HemisphereDisplay
