import React, { useRef, useState } from 'react';

const MenuHorizontal = ({items}) =>{

    const menuRef = useRef(null)
    const [activeItem , setActiveItem] = useState(items[0])

    const handleClick = (item) => {
      setActiveItem(item)
      const itemElement = document.getElementById(item)
      if(itemElement){
        menuRef.current.scrollTo({
          left: itemElement.offsetLeft - menuRef.current.offsetWidth/2 + itemElement.offsetWidth / 2,
          behavior: 'smooth',
        })
      }
    }
    return (
        <div className="scroll_menu" ref={menuRef}>
          {items.map((item) => (
            <div
              key={item}
              id={item}
              className={`menu_itens ${activeItem === item ? 'active' : ''}`}
              onClick={() => handleClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      );

  }

  export default MenuHorizontal;