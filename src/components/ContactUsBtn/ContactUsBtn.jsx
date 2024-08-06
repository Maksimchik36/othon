import styles from './ContactUsBtn.module.scss'


const ContactUsBtn = ({ burgerMenu, setNavLinks, setBurgerMenu }) => {
    return (
        <button
            className={burgerMenu ? `${styles.btn} ${styles.openBurger}` : styles.btn}
            onClick={() => {
                setNavLinks(false);
                setTimeout(() => {
                    setBurgerMenu(false);
                }, 200);
            }}
        >
            Contact Us
        </button>
    )
}


export default ContactUsBtn