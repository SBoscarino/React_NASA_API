import React, { Component } from 'react';


function GetImageButton(props) {
  return (
    <div>
      <button onClick={props.buttonClick}>Get Images!</button>
    </div>
  )
}
export default GetImageButton;
