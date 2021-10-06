import style from './Aside.module.css'
import { useState } from 'react';
import AsideItem from './AsideItem'
import { ASIDE_ITEMS } from './AsideConstants';

const Aside = ({
  onMenuItemClick
}) => {
  const [currentItem, setCurrentItem] = useState();

  const menuItemClickHandler = (id) => {
      setCurrentItem(id);
      onMenuItemClick(id);
  }
  
    return (
      <aside className={style.Aside}>
        {ASIDE_ITEMS.map(x =>
         <AsideItem 
         key={x.id}
         id={x.id}
         isSelected={x.id == currentItem}
         onClick={menuItemClickHandler}
         >{x.text}
        </AsideItem>
          )}
     </aside>
    );
}

export default Aside;