import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Connect from "./Connect";
import logo from '../images/log.png';
import '../Style/navbar.css';

function useOutsideAlerter(ref, form, setCheck, isActive) {
  useEffect(
    () => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target) && form.current && !form.current.contains(event.target)){
          setCheck(false);
          isActive('');
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      }
    }, [ref, form]
  )
}

const Navbar = (props) => {

  const [check, setCheck] = useState(false);
  const [active, isActive] = useState('');
  const btn = useRef(null);
  const form = useRef(null);
  useOutsideAlerter(btn, form, setCheck, isActive);

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
    <div className="navbar" >
      <div className="navbar-mobile">
        <img className="logo" src={logo} alt="logo" width='100' />
        <div className="btn-burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <div className="navbar-top">
        <Link to='/'><img className="logo" src={logo} alt="logo" width='200' /></Link>
        <button form="connection" type={active.length && check ? 'submit' : ''} ref={btn} className={"connect"+active} onClick={handleButton}>Se connecter</button>
        {
          check && <Connect form={form} isActive={isActive} setCheck={setCheck} check={check}/>
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