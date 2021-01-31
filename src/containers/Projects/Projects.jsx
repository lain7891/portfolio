import React from "react";
import Card from "../../component/Card/Card";
import Know from "../../assets/know-before-you-go.png";
import Employee from "../../assets/employeeTeam.png";
import Novel from "../../assets/a-novel-choice.png";
import Burger from "../../assets/burgerPage.png";
import Workout from "../../assets/workout.png";
import Directory from "../../assets/employeeDir.png"

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

      <div className="columns">
        <div className="column">
          <Card
            src={Burger}
            title="Burger"
            github="https://github.com/lain7891/burger"
            deploy="https://lit-mesa-75042.herokuapp.com/"
            description="Fun app where you create a new burger and click that it has been
            devoured. Great use of handlebars, MySQL, MySQL Workbench, query
            connections and my own ORM. For this assignment I used Express, Express-Handlebars and MySQL. "
          />
        </div>
        <div className="column">
          <Card
            src={Workout}
            title="Workout-Tracker"
            github="https://github.com/lain7891/workout-tracker"
            deploy="https://obscure-hamlet-93524.herokuapp.com/?id=5ff8a2a349ef470017730caa"
            description="As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled."
          />
        </div>
        <div className="column">
          <Card
            src={Directory}
            title="Employee Directory"
            github="https://github.com/lain7891/react-ed"
            deploy="https://lain7891.github.io/react-ed/#/"
            description="As a user, I want to be able to view my entire employee directory at once so that I have quick access to their information. For this app I used node, react, bootstrap and inline styling."
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
