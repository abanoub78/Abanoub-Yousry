import React,{useState} from 'react'
import '../App.css';
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };
      const toggleDarkMode = () => {
        document.body.classList.toggle('light');
      };

  return (
    <>
      <nav className="mynav navbar navbar-expand-lg ">
      {/* <img src='logo.png' alt='bob' className='logo'></img> */}
  <a className="navbar-brand abanoub" href="#home"><img src='ay.png' alt='bob' className='logo'></img> </a>
  <button className="navbar-toggler" type="button" onClick={toggleDropdown}  data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className={`collapse navbar-collapse justify-content-center ${isOpen ? 'show' : ''}`} id="navbarNav">
    <ul className="navbar-nav align-items-center">
      <li className="nav-item active">
        <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#projects">Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact">Contact</a>
      </li>
    </ul>
  </div>
  <div className="darkmode" onClick={toggleDarkMode}>
  <i className="fas fa-adjust p-3"></i>
  </div>
</nav>
    </>
  )
}
