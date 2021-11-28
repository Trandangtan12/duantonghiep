import React from 'react'

const SlideImageDescription = ({arrImage}) => {
    return (
        <div>
        {
            arrImage !== [] ? arrImage.map((elt) =>{
                <img src={elt} />
            }) :  null
        }
        </div>
    )
}

export default SlideImageDescription
