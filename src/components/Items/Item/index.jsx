import './index.scss'
import shoe from '../../../../public/assets/shoe.jpg'
import LeftMost from '../../../../public/assets/left-most.png'


export default function Item({image,name,price}){  
    return (
        <div className='item'>
            <img src={image} alt="item-img"/>
            <div className='details'>
                <h4>{name}</h4>
                <h5>{`$${price}`}</h5>
            </div>
        </div>
    )
}