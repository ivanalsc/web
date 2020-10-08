import React, { useState } from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars, faRocket } from '@fortawesome/free-solid-svg-icons';
import {useTransition, animated} from 'react-spring';
import { Link } from 'react-router-dom';

export const Nav = () => {
 const [showMenu, setShowMenu] = useState(false);

 const listStyle = {
    color: '#6c63FF',
    textDecoration: 'none',
    fontWeight: 'bold'
};

 const transitions = useTransition(showMenu, null, {
    from: { position: 'fixed', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    });

const Menu = () => {
   

    return(
        <div className= 'menu-mobile'>
            <ul>
                <Link style= {listStyle} to='/'>
                <li>Home</li>
                </Link>
                <Link style= {listStyle} to='/about'>
                <li>About Us</li>
                </Link>
                <Link style= {listStyle} to='/contact'>
                <li>Contact</li>
                </Link>
            </ul>

        </div>

    )
}


   

 
    return (
        <>
        <nav>
            <div>
            <FontAwesomeIcon className='logo' size='3x' icon={faRocket} />
            </div>
            <nav className= 'nav-desktop'>
                
            <ul>
            <Link style= {listStyle} to='/'>
                <li>Home</li>
                </Link>
                <Link style= {listStyle} to='/about'>
                <li>About Us</li>
                </Link>
                <Link style= {listStyle} to='/contact'>
                <li>Contact</li>
                </Link>
            </ul>

            </nav>
            <span className='hamburguer-menu'>
                <FontAwesomeIcon
                    size="3x"
                    icon = {faBars }
                    onClick = {()=> setShowMenu(!showMenu)} />
        
            </span>
        </nav>
        {transitions.map(({ item, key, props }) =>
                item && <animated.div key={key} style={props}>
                    <Menu />
                </animated.div>
              )

              

            }
            
        </>
    )
}
