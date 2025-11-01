import React, { useRef, useState } from 'react'
import { Link } from 'react-scroll'

const MenuHorizontal = ({items}) =>{

    const menuRef = useRef(null)
    const [activeItem, setActiveItem] = useState(items[0])

    const handleClick = (item) => {  
     
      setActiveItem(item)    
      const itemElement = document.getElementById(item)

      if(itemElement){
      
        const scrollLeft = itemElement.offsetLeft
        
        menuRef.current.scrollTo({
            left: scrollLeft,
            behavior: 'smooth',
          })
     
       
      }
    }
    return (
        <div className="scroll_menu" 
            ref={menuRef} 
            style={{ 
              
              display: 'flex',
               overflowX: 'auto', 
               overflowY: 'hidden',
               whiteSpace: 'nowrap',
               scrollbarWidth: 'none',               
               WebkitOverflowScrolling: 'touch',
          
                }}>

          {items.map((item,index) => (
             
            <button           
              key={index}
              data-qa={item}
              id={item}
              className={`menu_itens ${activeItem === item ? 'active' : ''}`}             
              
              style={{                
                cursor: 'pointer',
                              
           
              }}
              
            >
              <Link 
                
                to = {`section${index % 7}`} 
                onClick={() => handleClick(item)}
                offset={-105} 
                smooth={true} duration={1000}>{item}</Link>
            </button>
          ))}
        </div>
      )

  }

  export default MenuHorizontal