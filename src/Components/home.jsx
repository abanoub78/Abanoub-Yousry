import React from 'react'
import '../App.css';

export default function Home() {
  return (
    <>
    <section className="cont home" id='home'>
        <div className="left">
            <span className='hello'>Hello, </span>
            <span className='introtext'>I’M <span className='name'>Abanoub Yousry</span><br></br> Front End Developer</span>
            <p className='info'>I am a react developer and I strive to create a lot of projects<br></br> and learn a lot in this field</p>
            <div className="links">
                <button className='ws'><a href="https://wa.me/+201113981508"><i className="fab fa-whatsapp text-success"></i></a></button>
                <button className='face'><a href="https://www.facebook.com/abanob.yosry.5"><i className="fab fa-facebook-f" style={{color: "#0082e6"}}></i></a></button>
                <button className='insta'><a href="https://www.instagram.com/bebo_yosry"><i className="fab fa-instagram" style={{color: "#c73c7e"}}></i></a></button>
                <button className='linkdin'><a href="https://www.linkedin.com/in/abanoub-yousry-5a70252ba/"><i className="fab fa-linkedin" style={{color: "#078df2"}}></i></a></button>

            </div>
            <button className='cv'><a href="Abanoub yousry.pdf">Download CV</a></button>


        </div>
            <img src='abanoub.png' alt='bob' className='myimg'></img>
    </section>
    </>
  )
}
