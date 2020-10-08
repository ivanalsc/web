import React from 'react'
import { Card } from './Card';

export const plans = [
    {
        name: 'Plan 1',
        price: 200,
        characteristics: ['Redes Sociales', 'Fotografía', 'Engagement']
    },
    {
        name: 'Plan 2',
        price: 400,
        characteristics: ['Redes Sociales', 'Fotografía', 'Engagement']
    },
    {
        name: 'Plan 3',
        price: 600,
        characteristics: ['Redes Sociales', 'Fotografía', 'Engagement']
    }

];

export const Cards = () => {
    


    return (
        <div className='cards'>
            
             {plans.map(plan => (
                <Card key= {plan.name} name={plan.name} price={plan.price} features={plan.characteristics}/>
            ))}
            
            
        </div>
    )
}
