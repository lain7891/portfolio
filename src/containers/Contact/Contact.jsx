import React from "react";

const styles = {
  form: {
    width: 800,
    paddingLeft: 100,
    fontFamily: "Caveat, cursive",
    color: "#ffffff",
    paddingTop: 50,
  },
  input: {
    fontFamily: "Caveat, cursive",

  },
};

const Contact = () => {
  return (
    <>
   
      <form className="columns" style={styles.form} action="https://formspree.io/f/xrgojnbk" method="post">

        <div className="column">
          <div className="field">
            <label className="label subtitle is-3" style={styles.input}>
              Name
            </label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="Name"
                id="name"
                placeholder="Text input"
                style={styles.input}
              />
            </div>
          </div>

          <div className="field">
            <label
              className="label subtitle is-3 has-icon-left"
              style={styles.input}
            >
              Email
            </label>

            <input
              className="input is-danger"
              type="email"
              name="Email"
              id="email"
              placeholder="Email input"
              style={styles.input}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          </div>

          <div className="field">
            <label className="label subtitle is-3" style={styles.input}>
              Message
            </label>
            <div className="control">
              <textarea
                className="textarea"
                name="Message"
                id="message"
                style={styles.input}
                placeholder="Textarea"
              ></textarea>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button
              type="submit"
                className="button is-info subtitle is-4"
                style={styles.input}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
