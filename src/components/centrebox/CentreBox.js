import react from 'react';
import './centrebox.css';
import HerokuLogo from '../../assets/images/heroku-logo-1.png';
import Sideform from '../sideform/Sideform';
function CentreBox() {
    return (
        <div className='main-container'>
            <div className='sub-container-1'>
                <div className='div-img-container'>
                    <img className='img-conatiner' src={HerokuLogo} alt='logo-heroku'></img>
                    </div>  
                <div className='button-container'>
                    <p>Already have an account?</p>
                    <button type='submit'>Login</button>
                </div>
            </div>
            <div className='sub-container-2'>
                <h1 className='heading1'>Get Started on Herkou Today</h1>
            </div>
            <>
                <Sideform />
                </>
        </div>
    );
}

export default CentreBox;