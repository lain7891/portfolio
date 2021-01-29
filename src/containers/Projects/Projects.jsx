import React from "react";
import Card from "../../component/Card/Card";
import Know from "../../assets/know-before-you-go.png";
import Employee from "../../assets/employeeTeam.png";
import Novel from "../../assets/a-novel-choice.png"

const Projects = () => {
  return (

    <>
      <div className="columns">
        <div className="column">
          <Card
            src={Know}
            title="Know Before You Go"
            github="https://github.com/lain7891/know-before-you-go"
            deploy="https://lain7891.github.io/know-before-you-go/"
            description="App that provides users the ability to search for jobs in cities
            that meet all their needs and wants. What is unique about our
            site is that you will find all this information in one place as
            opposed to having to search for it in various sites. Using our
            site users can make an educated decision of where they would
            move for a specific job they are interested in. For this project I used: HTML, JavaScript, CSS, AJAX calls, bootstrap and much more."
          />
        </div>
        <div className="column">
          <Card 
          src={Novel}
          title="A Novel Choice" 
          github="https://github.com/lain7891/A-Novel-Choice"
          deploy="https://infinite-spire-32178.herokuapp.com/"
          description="App provides users the ability to find their book club and from
          there they will see a list of books suggested by members for
          them to vote on. The book with the most votes will be the book
          the club will read next. The app also allows users to update,
          add, delete a book from the list for that specific book club. We
          can also create a new book club for new users. For this project I used: Express-Handlebars,Express, JavaScript, CSS, JQuery, Materialize, Sequelize, MySQL, "
          
          />
        </div>
        <div className="column">
          <Card 
          src={Employee}
          title="Employee Team" 
          github="https://github.com/lain7891/Employee-Info"
          description="As a manager I want to generate a website that display’s my
          team’s basic information so that I can have quick access to
          GitHub and emails. For this assignment I used DOM, functions, local storage, even listeners, for loops and Moment.js. "

          />
        </div>
      </div>
    </>
  );
};

export default Projects;
