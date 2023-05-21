import React from "react";
import ReactPlayer from "react-player";


const Information = () => {
  return (
    <div className="container">
      <div className="row">
        <h1>Information</h1>
        <div className="col-md-6">
          
          <ReactPlayer
            url="https://youtu.be/eKqbV7ub4skI"
            width="100%"
          />
          
        </div>
        <div className="col-md-6">
          
          <ReactPlayer
            url="https://youtu.be/dy2H0UAqx-I"
            width="100%"
          />
          
        </div>
      </div>
    </div>
  );
};

export default Information;
