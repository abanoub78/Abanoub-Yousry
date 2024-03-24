import React from 'react'
import '../App.css';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
    const [state, handleSubmit] = useForm("mayrdzka");
    if (state.succeeded) {
        return <p className='contactMsg'>Thanks for joining! Message sent successfully</p>;
    }
    
  return (
<>
    <div className="container" id='contact'>
        <h1 className='title'>Contact Me</h1>
<div className="contact">
<div className="left">
            <form action="" onSubmit={handleSubmit}>
                <div className="mail">
                <label htmlFor='email'>Email Address:</label>
                <input required type='email' id='email' name='email'></input>
                </div>
                <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
                <div className="txtarea">
                <label htmlFor='msg'>Your Message:</label>
                <textarea required type='text' id='message' name='message'></textarea>
                </div>
                <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
                <button className='submit' disabled={state.submitting}>Submit</button>
            </form>

        </div>
        <div className="right">
            <img src='mail.gif' alt='mail'></img>

        </div>
</div>
    </div>
</>
  )
}
