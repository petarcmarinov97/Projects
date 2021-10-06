import style from '../Footer.module.css'

const FooterItem = (props) => {
    return (
        <li className={style.listItem}>
            <a href="#">{props.children}</a>
        </li>
    );
}
 
export default FooterItem ;