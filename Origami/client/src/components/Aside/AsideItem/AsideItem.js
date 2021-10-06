import style from '../Aside.module.css'

const AsideItem = ({id,
    onClick,
    isSelected,
    children
}) => {
    let classes = ['menu-item'];

    if (isSelected) {
        classes.push('menu-item-selected');
    }

    return (
        <li className={style.listItem}>
            <a href="#" onClick={() => onClick(id)}>
                {children}
            </a>
        </li>
    );
}
 
export default AsideItem ;