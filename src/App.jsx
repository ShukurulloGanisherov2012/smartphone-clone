import { useEffect, useState } from 'react';
import './App.css';
import { RiCameraLensFill } from 'react-icons/ri';
import { AiFillOpenAI } from "react-icons/ai";
import { FaCircle, FaAngleDoubleUp, FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { SiReact } from "react-icons/si";
import { FaUnsplash } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { IoLockClosedOutline } from "react-icons/io5";

function App() {
  const [time, setTime] = useState(new Date());
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date());
    };

    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const closeDiv = () => {
    document.querySelector('.OpenDiv').style.display = 'none';
    document.querySelector('.Main').style.filter = 'blur(0px)';
  };

  const up = () => {
    document.querySelector('.OpenDiv').style.display = 'flex';
    document.querySelector('.Main').style.filter = 'blur(7px)';
  };

  const check = () => {
    const password = document.querySelector('.Password').value;
    const name = document.querySelector('.Name').value;
    if (password === "2012" && name === "shukurullo") {
      setIsUnlocked(true);
      document.querySelector('.OpenDiv').style.display = 'none';
      document.querySelector('.Main').style.filter = 'blur(0px)';
      confirm("Telefon blokdan ochildi");
    }
  };

  const handleMenuToggle = () => {
    setIsUnlocked(false);
    alert("Telefon bloklandi");
  };

  return (
    <>
      <div className="Container">
        <div className="Camera">
          <RiCameraLensFill />
        </div>
        <div className="Main">
          {isUnlocked ? (
            <div className="hrefs">
              <a href="https://www.youtube.com/">
                <button className="youtube">
                  <FaYoutube />
                </button>
              </a>
              <a href="https://chatgpt.com/">
                <button className="chat">
                  <AiFillOpenAI />
                </button>
              </a>
              <a href="https://www.instagram.com/">
                <button className="instagram">
                  <AiFillInstagram />
                </button>
              </a>
              <a href="https://www.facebook.com/">
                <button className="facebook">
                  <FaFacebookSquare />
                </button>
              </a>
              <a href="https://www.netlify.com/">
                <button className="netlify">
                  <SiNetlify />
                </button>
              </a>
              <a href="https://github.com/">
                <button className="git">
                  <FaGithub />
                </button>
              </a>
              <a href="https://react-icons.github.io/react-icons/">
                <button className="icon">
                  <SiReact />
                </button>
              </a>
              <a href="https://www.google.com/">
                <button className="google">
                  <FaGoogle />
                </button>
              </a>
              <a href="https://unsplash.com/">
                <button className="unsplash">
                  <FaUnsplash />
                </button>
              </a>
              <a href="https://mail.google.com/">
                <button className="gmail">
                  <SiGmail />
                </button>
              </a>
              <a href="https://react-bootstrap.netlify.app/docs/getting-started/introduction/">
                <button className="boots">
                  <FaBootstrap />
                </button>
              </a>
              <a href="https://yandex.uz/games/">
                <button className="game">
                  <IoGameController />
                </button>
              </a>
              <a href="https://fontawesome.com/">
                <button className="font">
                  <FaFlag />
                </button>
              </a>
            </div>
          ) : (
            <>
              <IoLockClosedOutline className='qulf' />
              <div className="Time">
                <div className="div">
                  <h1 id="time">{time.toLocaleTimeString()}</h1>
                  <h5 id="date">{time.toLocaleDateString()}</h5>
                </div>
              </div>
              <button className='up' onClick={up}><FaAngleDoubleUp /></button>
            </>
          )}
        </div>
        <div className="Controls">
          <button className="menu" onClick={handleMenuToggle}><FaCircle /></button>
        </div>
        <div className="OpenDiv">
          <input className='Password' type="password" placeholder='Password' />
          <input className='Name' type="text" placeholder='Name' />
          <button className='result' onClick={check}>Ochish</button>
          <button className='otmena' onClick={closeDiv}>Bekor qilish</button>
        </div>
      </div>
    </>
  );
}

export default App;
