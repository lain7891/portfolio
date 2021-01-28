import React from 'react';

const Card = (props) => {
    return (
<div className="columns is-mulitiline">
    <div className= "column is-3">
    <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{props.title}</p>
              <p className="subtitle is-6">@johnsmith</p>
            </div>
          </div>
      
          <div className="content">
     {props.description}
            <a href="/">#css</a> <a href="/">#responsive</a>
            <br/>
          </div>
        </div>
      </div>

    </div>
</div>


      
    );
};

export default Card;