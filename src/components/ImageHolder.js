import React, { Component } from 'react';

function ImageHolder(props){
  console.log('props',props)
  return (
    <div>
    {props.photos.map((photo) => {
      return(
        <img key={photo.id} src={photo.img_src} />
      )
    })}
    </div>
  )
  }
export default ImageHolder;

    //https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}
