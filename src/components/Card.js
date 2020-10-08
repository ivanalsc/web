import React from 'react'


export const Card = ({name, price, features}) => {




    return (
        <div className='card'>
            <h4>{name}</h4>
            <p className='price'>{price}</p>
            <ul>
                {features.map( f=>(
                    <li>{f}</li>
                ))}
                 

            </ul>
         
            
        </div>
    )
}
