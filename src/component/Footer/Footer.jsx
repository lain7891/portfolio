import React from 'react';

const styles = {
    footer: {
        fontFamily: "Caveat, cursive",
        display: "flex",
        minHeight: 50,
        flexDirection: "column"
    }
    }

const Footer = () => {
    return (
        <footer className="footer" style={styles.footer}>
        <div className="container">
          <div className="content has-text-centered">
            <p>
              <strong>@Copyright 2021</strong> by Estefania Lupo. 
            </p>
            <p>
                678-793-3025
            </p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;