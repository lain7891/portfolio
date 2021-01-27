import React from 'react';

const styles = {
    hero: {
        position: "relative",
        overflow: "hidden-background",
        position: "absolute",
        objectFit: "cover",
        objectPosition: "center center",
        width: 100,
        height: 100,
        opacity: 0.3
    }
}
const Background = () => {
    return (
        <div className="hero is-fullheight is-primary has-background" >
  <img alt="Empty Road" className="hero-background is-transparent" src="https://wallpapercave.com/wp/ZEBuAbe.jpg/1920/1080" style={styles.hero}/>

  </div>
    );
};

export default Background;