import { Link } from 'react-router-dom';
import '../Style/connect.css';

const Connect = (props) => {
    const form = props.form
    const isActive = props.isActive;
    const setCheck = props.setCheck;
    const check = props.check;

    const handleCreate = () => {
        if (check) {
            setCheck(false);
            isActive('');
        }
    }

    return(
        <form id='connection' className="connection" ref={form} onSubmit={(e) => (e.preventDefault())}>
            <div className="inputs">
                <div className="col">
                    <div className='email'>
                        <label htmlFor="email">Adresse mail</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className='password'>
                        <label htmlFor="password">Mot de passe</label>
                        <input type="password" name="password" id="password" />
                    </div>
                </div>
                <div className="switch-check">
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider"></span>
                    </label>
                    <p>Restez connecté ?</p>
                </div>
            </div>
            <div className='inscription' >
                <Link to='/inscription' onClick={handleCreate}>Vous n'avez pas encore de compte ? <br/> Cliquez ici pour vous inscrire.</Link>
            </div>
        </form>
    )
}

export default Connect;