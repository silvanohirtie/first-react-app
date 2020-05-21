import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'


import NavigationMenu from './NavigationMenu'
export default function Navigation() {
    const [showMenu, setShowMenu] = useState(false)
    
    
    const transitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    return (
       <nav>
           <span className="text-xl">
           <a><FontAwesomeIcon 
           icon={faBars}
           onClick={() => setShowMenu(!showMenu)}
           />
           </a>
           </span>
           
           {
                transitions.map(({ item, key, props }) =>
                item && 
                <animated.div 
                    key={key} 
                    style={props}
                    className="bg-black-t-50 fixed top-0 right-0 w-full h-full z-50"
                    onClick={() => setShowMenu(false)}
                >
                </animated.div>
            )
            }
           {
                transitions.map(({ item, key, props }) =>
                item && 
                <animated.div 
                    key={key} 
                    style={props}
                    className="fixed bg-white top-0 left-0 w-3/5 h-full z-50 shadow p-3"
                >
                   
                <NavigationMenu
                    closeMenu={() => setShowMenu(false)}
                />
                
                </animated.div>
            )
            }
       </nav>
    )
}

