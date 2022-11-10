import { Link } from 'react-router-dom'
import './index.scss'
import TopLeft from '../../../public/assets/topleft.png'
import TopMiddle from '../../../public/assets/top-middle.png'
import MiddleRight from '../../../public/assets/middle-right.png'
import RightMiddle from '../../../public/assets/right-middle.png'
import LeftMost from '../../../public/assets/left-most.png'

export default function Header(){
    return (
        <section className='top'>
            <img  src={TopLeft} alt='img1' />
            <img className='top-middle' src={TopMiddle} alt='img1' />
            <img className='middle-right' src={MiddleRight} alt='img1' />
            <img className='right-middle' src={RightMiddle} alt='img1' />
            <img className='left-most' src={LeftMost} alt='img1' />
            <div className='header'>
                <h1 className='brand-name'>CHILLED GRAPE</h1>
                <div className='navbar'>
                    <ul>
                        <li><Link>Home</Link></li>
                        <li><Link>About</Link></li>
                        <li><Link>Blog</Link></li>
                        <li><Link>Pricing</Link></li>
                    </ul>
                    <Link to="/" className="flat-button">
                        Login
                    </Link>
                </div>
            </div>
            <div className='main-heading'>
                <h1>Lorem ipsum dolor sit amet.</h1>
                <Link to="/" className="flat-button">
                        Read More
                </Link>
            </div>
        </section>
    )
}