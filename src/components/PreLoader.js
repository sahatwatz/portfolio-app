import React, {useEffect} from 'react';
import { preLoaderAnimate } from '../animations';
import '../css/preloader.css';


const PreLoader = () => {

    useEffect(() => {
        preLoaderAnimate()
    },[]);

    return (
        <div className='preloader'>
            <div className='texts-container'>
                <span>Welcome</span>
                <span>to</span>
                <span>my  Space</span>
            </div>
        </div>
    )
}

export default PreLoader