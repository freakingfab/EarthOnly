import react from 'react';
import { VscAccount } from 'react-icons/vsc';
import { TbSettings2 } from 'react-icons/tb';
import { IoPushOutline } from 'react-icons/io5';
import './sideform.css';
import Mainform from '../mainform/Mainform';
function Sideform() {
    return (
        <div className='head-container'>
            <div className='head-text-container'>
                <div className='head-text'>
                    <div className='imgplushead'>
                        <div id="imgaccount" >
                            <VscAccount size={30} />
                            </div>
                        <h2>  Heroku Account</h2>
                    </div>
                    <p>Create apps, connect databases and add-on services, and collaborate on your apps.</p>
                </div>
                <div className='head-text'>
                    <div className='imgplushead'>
                        <div id="imgsetting">
                            <TbSettings2 size={30}  />
                            </div>
                        <h2>  Your App platform</h2>
                    </div>
                    <p>A platform for apps, with app management & instant scaling, for development and production.</p>
                </div>
                <div className='head-text'>
                    <div className='imgplushead'>
                        <div id="imgpushout">
                            <IoPushOutline size={30}  />
                            </div>
                        <h2>Deploy Now</h2>
                    </div>
                    <p>Go from code to running app in minutes. Deploy, scale, and deliver your app to the world.</p>
                </div>
            </div>
            <Mainform/>
        </div>
    );
}

export default Sideform;