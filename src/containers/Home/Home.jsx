import React from "react";
import Me from "../../assets/imageMe.jpeg";
// import Background from "../../component/Background/Background"

const styles = {
  home: {
    fontFamily: "Grandstander, cursive",
marginTop: 25,
backgroundBlendMode: "screen",
paddingLeft: 50,
color: "#ffffff"
  },
  image: {
      height: 220,
      width: 200,
      paddingBottom: 10,
      marginLeft: 73
  },
  content: {
      content: {
          paddingBottom: 20,
          marginRight: 7, 
          paddingTop: 400,
          color: "#ffffff",
          
      }
  }
};

const Home = (props) => {
  return (
    <>
<div className="columns" style={styles.home}>
    <div className="title is-2" style={styles.home}>About Me</div>
    </div>
<div className="column">

          <figure className="image">
              <img
                src={Me}
                alt="Girl in Jean shirt"
                style={styles.image}
              />
            </figure>

<div className="column is-6"  style={styles.content}>
<p className="font subtitle is-6"style={styles.home} > 
            I am a Front End Developer with a background in management. I have a
          bachelor's degree from Kennesaw State University and am a certified
          full stack web developer from Georgia Tech University. While in school
          for both programs I also worked full time maintaining a good work and
          school balance to succeed in both. My skills for web development
          include HTML, CSS, JavaScript/Jquery, Express.js, Node.js, Handlebars, React.js
          and adding more everyday to develop a user friendly and responsive
          website. I take great pride in understanding what the client is
          looking for and working with a team effectively to deliver their
          vision. I have been able to put these skills into action through
          various projects that showcase my strength as a web developer. 
            </p>

            <p style={styles.home}>
            I have
          been managing a successful company for the past ten years. Through all
          these years I have grown the clientele and reputation of the business.
          In addition, I have maintained a steady group of staff in an industry
          that sees a lot of turnover. All these skills and experiences will
          make me an even better web developer. Creating great websites is a
          team effort. As a developer not only do I bring the skills needed to
          create a website but the leadership skills to get a team through it.

            </p>
</div>

</div>


     
    </>
  );
};

export default Home;
