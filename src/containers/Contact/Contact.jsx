import React from 'react';

const styles={
form: {
    width: 800,
    paddingLeft: 100,
    fontFamily: "Caveat, cursive",
   fontColor: "white"
}
}

const Contact = () => {
    return (
        <>
        <div className="columns" style={styles.form}>
            <div className="column">
            <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="Text input"/>
        </div>
      </div>
      
      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-danger" type="email" placeholder="Email input" value="hello@"/>
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        <p className="help is-danger">This email is invalid</p>
      </div>
      
      
      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea className="textarea" placeholder="Textarea"></textarea>
        </div>
      </div>
      
      
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Submit</button>
        </div>
      </div>
            </div>
     
            </div>



         
      
      </>
    );
};

export default Contact;