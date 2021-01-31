import React from 'react';

const Card = (props) => {

    const styles= {
card: { 
    paddingTop: 50,
    paddingLeft: 80,
    paddingRight: 80,
   width: 500,
    fontFamily: "Grandstander, cursive",

},

link: {
  color: "#0000CD"
}
    }
    return (
<div className="columns is-multiline" >
    <div className= "column is-15" style={styles.card}>
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
              <p className="title is-3">{props.title}</p>
              <a className="subtitle is-9" style={styles.link} href={props.github}>GITHUB</a>
              <br/>
              <a className="subtitle is-9" style={styles.link} href={props.deploy}>DEPLOY</a>
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