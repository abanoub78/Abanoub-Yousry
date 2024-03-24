import React, { useState } from 'react';
import '../App.css';

export default function Projects() {
  const [activeButton, setActiveButton] = useState('All Projects');

  const handleClick = (buttonText) => {
    setActiveButton(buttonText);
  };

  return (
    <>
      <div className="container" id='projects'>
        <h1 className="title">Projects</h1>
        <div className="projects">
          <div className="left">
            <button
              className={activeButton === 'All Projects' ? 'active' : ''}
              onClick={() => handleClick('All Projects')}
            >
              All Projects
            </button>
            <button
              className={activeButton === 'HTML&CSS' ? 'active' : ''}
              onClick={() => handleClick('HTML&CSS')}
            >
              HTML&CSS
            </button>
            <button
              className={activeButton === 'JavaScript' ? 'active' : ''}
              onClick={() => handleClick('JavaScript')}
            >
              JavaScript
            </button>
            <button
              className={activeButton === 'React.js' ? 'active' : ''}
              onClick={() => handleClick('React.js')}
            >
              React.js
            </button>
          </div>
          <div className="right">
            {projects.map((project, index) => {
              if (activeButton === 'All Projects' || project.type === activeButton) {
                return (
                  <div className={`card ${project.type}`} key={index}>
                    <img src={project.image} alt="project"></img>
                    <div className="box">
                      <h3 className="proname">{project.name}</h3>
                      <p>{project.description}</p>
                      <a className="pro" href={project.link}>
                        <i className="fab fa-github"></i>See Project
                      </a>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

const projects = [
  {
    name: 'ELOMDA Pharmacy',
    description:
      'Pharmacies website to display medicines and cosmetics and help customers submit their orders online. React.js (frontend) and Firebase(backend).',
    link: 'https://abanoub78.github.io/ELOMDAPharmacy/',
    type: 'React.js',
    image: 'p1.png',
  },
  {
    name: 'Movies Night',
    description:
      'A site that displays movies, series, and programs',
    link: 'https://abanoub78.github.io/MovieTime/',
    type: 'JavaScript',
    image: 'p3.png',
  },  {
    name: 'FaceBook Demo',
    description:
      'It is a site that emulates the front-end of Facebook',
    link: 'https://abanoub78.github.io/Facebook_Front/',
    type: 'HTML&CSS',
    image: 'p6.png',
  },  {
    name: 'Alzheimer Scanner',
    description:
      'A site that helps Alzheimers patients easily determine the extent of the disease, where you upload MRI images of the brain and the results will appear',
    link: 'https://abanoub78.github.io/ELOMDAPharmacy/',
    type: 'JavaScript',
    image: 'p4.png',
  },
{
    name: 'Resto Restaurant',
    description:
      'A website for a restaurant that displays products and facilitates the buying and selling process for customers',
    link: 'https://abanoub78.github.io/Resto_Restaurant',
    type: 'JavaScript',
    image: 'p2.png',
  },
{
    name: 'Monastery Sweets',
    description:
      'A simple website to display the products of the Monastery of the Virgin Mary in Mount Assiut Drunka and facilitate buying and selling operations',
    link: 'https://abanoub78.github.io/Monastery_Sweets/',
    type: 'JavaScript',
    image: 'p5.png',
  },
{
    name: 'DashBord',
    description:
      'One of my first projects to learn Front End was an application from the Zero Web School course , note : ( not responsive for phone yet )',
    link: 'https://abanoub78.github.io/Dashbord-Frontend/',
    type: 'HTML&CSS',
    image: 'p7.png',
  },
{
    name: 'Image Slider',
    description:
      'It is a website that displays images through pagination ',
    link: 'https://abanoub78.github.io/Image-Slider/',
    type: 'JavaScript',
    image: 'p8.png',
  },
{
    name: 'IPhone Design',
    description:
      'It is a website that displays various designs and colors for iPhone shapes',
    link: 'https://abanoub78.github.io/iPhone-Design/',
    type: 'JavaScript',
    image: 'p9.png',
  },
{
    name: 'Product System',
    description:
      'Cruds is a project where you can add products and manage them easily',
    link: 'https://abanoub78.github.io/Product-Management-System/',
    type: 'JavaScript',
    image: 'p10.png',
  },
{
    name: 'Memory Game',
    description:
      'It is a site that offers a memory game, where it displays cards and you have to match them with the fewest number of errors',
    link: 'https://abanoub78.github.io/Memory-Game/',
    type: 'JavaScript',
    image: 'p11.png',
  },
  {
    name: 'Portfolio',
    description:
      'Personal website to view personal information and projects for a job',
    link: 'https://abanoub78.github.io/Abanoub-Yousry/',
    type: 'React.js',
    image: 'porfolio.png',
  },
];
