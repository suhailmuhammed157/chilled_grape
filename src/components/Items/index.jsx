import './index.scss'
import Item from './Item'

export default function Items({items}){
    let elements= items.map((item)=>{
        return <Item 
        key={item.id}
        image={item.image}
        name={item.product_name}
        price={item.price}
         />
        })
    return (
        <section className='items-section'>
        <div className='items'>
            {elements}         
        </div>
        <h5 className='load-more'>Load more</h5>
        </section>
    )
}