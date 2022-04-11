import { Fragment } from 'react';
import '../Style/accueil.css';
import bg from '../images/bg1.png';
import plankton from '../images/plankton.svg';

const Accueil = () => {
    return (
        <Fragment>
            <div className="mainContent">
                <div className="homepage-top">
                    <img src={bg} alt="background image" />
                    <div className='top-content'>
                        <div className='text'>
                            <h1>La communauté des bons planktons</h1>
                            <p>Rejoins nous pour découvrir les bons plans  pour les étudiants sur l’agglomération de Saint-Malo !</p>
                        </div>
                        <div className='plankton'>
                            <img src={plankton} alt="Plankton" />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Accueil;