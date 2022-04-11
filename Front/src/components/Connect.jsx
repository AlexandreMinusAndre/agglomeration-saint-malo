import '../Style/connect.css';

const Connect = () => {

    return(
        <form id='connection' className="connection" onSubmit={(e) => (e.preventDefault())}>
            <div className='email'>
                <label htmlFor="email">Adresse mail</label>
                <input type="email" name="email" id="email" />
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider"></span>
                </label>
            </div>
            <div className='password'>
                <label htmlFor="password">Mot de passe</label>
                <input type="password" name="password" id="password" />
            </div>
            <div className='inscription'>
                <p>Vous n'avez pas encore de compte ?</p>
                <p>Cliquez ici pour vous inscrire</p>
            </div>
        </form>
    )
}

export default Connect;