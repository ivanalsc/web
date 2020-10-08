import React from 'react';


export const Section = ({className, title,texto, img}) => {

    return (
        <section className={className} >
            
            <div className='text'>
                {title}
                <p>
                    {texto}
                </p>

            </div>
            <img src={img} alt={title}/>
            
        </section>
    )
}
