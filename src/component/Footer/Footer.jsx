import React from 'react';

// const styles = {
//     footer: {
//         fontFamily: "Caveat, cursive",
//         display: "flex",
//         maxHeight: "100px",
//     }
//     }

    var style = {
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "60px",
        width: "100%",
        backgroundColor: "rgb(102, 102, 102)",
        color: "rgb(179, 163, 105)",
        borderTop: "8px solid rgb(255, 255, 255)",
        flexShrink: "0",
      };
      var phantom = {
        display: "block",
        padding: "20px",
        height: "60px",
        width: "100%",
      };

const Footer = () => {
    return (
        




<div>
      <div style={phantom} />
      <div style={style}>
        <div>&copy; Copyright 2021</div>
      </div>
    </div>
     

    );
};

export default Footer;

// <div className="container">
// <div className="content has-text-centered">
//   <p>
//     <strong>@Copyright 2021</strong> by Estefania Lupo. 
//   </p>
//   <p>
//       678-793-3025
//   </p>
// </div>
// </div>