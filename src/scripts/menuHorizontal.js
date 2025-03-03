import React, { useRef, useState } from 'react'
import { Link } from 'react-scroll'

const MenuHorizontal = ({items}) =>{

    const menuRef = useRef(null)
    const [activeItem, setActiveItem] = useState(items[0])

    const handleClick = (item) => {
      
      setActiveItem(item)    
      const itemElement = document.getElementById(item)
      if(itemElement){
        //const itemRect = itemElement.getBoundingClientRect()
        //const menuRect = menuRef.current.getBoundingClientRect()//itemElement.offsetLeft - menuRef.current.offsetWidth / 2 + itemElement.offsetWidth / 2
        const scrollLeft = itemElement.offsetLeft//itemRect.left - menuRect.left
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
              onClick={() => handleClick(item)}
              style={{                
                cursor: 'pointer',
                              
           
              }}
              
            >
              <Link to = {`section${index}`} smooth={true} duration={500}>{item}</Link>
            </button>
          ))}
        </div>
      )

  }

  export default MenuHorizontal