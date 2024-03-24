import React from 'react'
import '../App.css';

export default function About() {
  return (
    <>
    <div className="container" id='about'>
      <h1 className='title'>About</h1>
      <div className="about">
        <div className="left">
          <img src='g.jpeg' alt='bob'></img>
        </div>
        <div className="right">
          <p>I graduated from Assiut University in 2023 with a bachelor’s degree in bioinformation with a grade of very good with honors. I am an ambitious person who would love to learn many programming languages and skills to develop myself more and more, to achieve my dream of becoming one of the greatest programmers in the Arab world.</p>
          <h3>My Skills :</h3>
 <div className="skill">
 <h5>Programming Languages :</h5>
          <div className="skills">
            <p><i className="fas fa-star" style={{color: "#FFD43B",}}></i> Python</p>
            <p><i className="fas fa-star" style={{color: "#FFD43B",}}></i> C++</p>
            <p><i className="fas fa-star" style={{color: "#FFD43B",}}></i> JavaScript</p>

          </div>
 </div>
 <div className="skill">
 <h5>Front End :</h5>
          <div className="skills">
            <p><i className="fas fa-star" style={{color: "#FFD43B",}}></i> HTML5</p>
            <p><i className="fas fa-star" style={{color: "#FFD43B",}}></i> CSS3</p>
            <p><i className="fas fa-star" style={{color: "#FFD43B",}}></i> Bootstrap</p>
            <p><i className="fas fa-star" style={{color: "#FFD43B",}}></i> React.js</p>
            <p><i className="fas fa-star" style={{color: "#FFD43B",}}></i> TypeScript</p>


          </div>
 </div>
 <div className="skill">
 <h5>Back End:</h5>
          <div className="skills">
            <p><i className="fas fa-star" style={{color: "#FFD43B",}}></i> Node.js</p>
            <p><i className="fas fa-star" style={{color: "#FFD43B",}}></i> Express.js</p>
            <p><i className="fas fa-star" style={{color: "#FFD43B",}}></i> Django</p>
            <p><i className="fas fa-star" style={{color: "#FFD43B",}}></i> Firebase</p>

          </div>
 </div>
 <div className="skill">
 <h5>Database :</h5>
          <div className="skills">
            <p><i className="fas fa-star" style={{color: "#FFD43B",}}></i> SQL Server</p>
            <p><i className="fas fa-star" style={{color: "#FFD43B",}}></i> MySql</p>
            <p><i className="fas fa-star" style={{color: "#FFD43B",}}></i> MongoDB</p>

          </div>
 </div>

        </div>



      </div>
    </div>
    </>
  )
}
