import react from 'react';
import './upperbar.css';

function UpperBar() {
    return (
        <>
            <p className='text-container'>
                       ☁️ 
                <a href="https://developer.salesforce.com/" className='link-conatiner'> Salesforce </a>
                / Heroku
            </p>
        </>
    );
}
export default UpperBar;