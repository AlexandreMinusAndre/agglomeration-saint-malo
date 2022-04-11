import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Connect from "./Connect";
import '../Style/navbar.css';

function useOutsideAlerter(ref, setCheck, isActive) {
  useEffect(
    () => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)){
          setCheck(false);
          isActive('');
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      }
    }, [ref]
  )
}

const Navbar = (props) => {

  const [check, setCheck] = useState(false);
  const [active, isActive] = useState('');
  const btn = useRef(null);
  useOutsideAlerter(btn, setCheck, isActive);

  const linkList = [
    ['/', 'Logements'],
    ['/', 'Transports'],
    ['/', 'Alimentaire'],
    ['/', 'Sorties'],
    ['/', 'Forum']
]
  const handleButton = () => {
    if (check) {
      
    } else {
      setCheck(true);
      isActive(' active');
    }
  }

  return (
    <div className="navbar">
      <div className="navbar-mobile">
        <div className="btn-burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <div className="navbar-top">
        <button form="connection" type={active.length && check ? 'submit' : ''} ref={btn} className={"connect"+active} onClick={handleButton}>Se connecter</button>
        {
          check && <Connect/>
        }
      </div>
      <div className="navbar-bottom">
        <nav>
          <ul>
            {
              linkList.map(([url, titre], index) => <li key={index}><Link to={url}>{titre}</Link></li> )
            }
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;