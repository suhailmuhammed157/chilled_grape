import './index.scss'
import React from 'react'
import {Link} from 'react-router-dom'
import BgImage from '../../../public/assets/image-bg.png'
import Wase from '../../../public/assets/wase.png'

export default function Description(){
    return (
        <section className='description'>
            <div className='about'>
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Link to="/" className="flat-button">
                        Read More
                </Link>
            </div>
            <div className='image-section'>                
                <img className='background-image' src={BgImage} alt='bgImage'/>
                <img className='forground-image' src={Wase} alt='wase'/>
            </div>
        </section>
    )
}