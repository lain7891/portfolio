import React from 'react';

const Card = (props) => {

    const images= {
project: { 

}
    }
    return (
<div className="columns is-multiline">
    <div className= "column is-3">
    <div className="card">
        <div className="card-image" >
          <figure className="image is-4by3" >
            <img   src={props.src} alt="Placeholder image"/>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
            
            </div>
            <div className="media-content">
              <p className="title is-4">{props.title}</p>
              <p className="subtitle is-6">GitHub:</p>
              <p className="subtitle is-6">Deploy:</p>
            </div>
          </div>
      
          <div className="content">
     {props.description}
            <br/>
          </div>
        </div>
      </div>

    </div>
</div>


      
    );
};

export default Card;