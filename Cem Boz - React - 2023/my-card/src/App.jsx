import React, { useState } from "react";
import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Angular from "/images/angular.jpg";
import Bootstrap5 from "/images/bootstrap5.png";
import Ccsharp from "/images/ccsharp.png";
import Kompleweb from "/images/kompleweb.jpg";

function App() {
  const [count, setCount] = useState(0);

  const courses = [
    {
      image: Angular,
      title: "Angular",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      image: Bootstrap5,
      title: "Bootstrap 5",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      image: Ccsharp,
      title: "Komple Web",
      description: "When an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      image: Kompleweb,
      title: "Frontend",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  ];

  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            {courses.map((course) => (
              <div className="column" key={course.title}>
                
                <Course {...course} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
