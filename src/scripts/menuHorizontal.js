import React, { useRef, useState } from 'react'

const MenuHorizontal = ({items}) =>{

    const menuRef = useRef(null)
    const [activeItem, setActiveItem] = useState(items[0])

    const handleClick = (item) => {
      setActiveItem(item)
      //const menuScroll = document.getElementsByClassName("scroll_menu")
      const itemElement = document.getElementById(item)
      if(itemElement){
        const scrollLeft = itemElement.offsetLeft - menuRef.current.offsetWidth / 2 + itemElement.offsetWidth / 2
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
              {item}
            </button>
          ))}
        </div>
      )

  }

  export default MenuHorizontal