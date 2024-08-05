import styles from './ContactForm.module.scss'


const ContactForm = ({ className }) => {
    return (
        <form className={`${styles.container} ${className}`}>
            <h2 className={`styleH2 ${styles.title}`}>Contact Us</h2>
            <div className={styles.inputsWrapper}>
                <input type="text" className={styles.input} placeholder='Your Name' />
                <input type="text" className={styles.input} placeholder='Subject' />
                <input type="text" className={styles.input} placeholder='Your Email' />
                <input type="text" className={styles.input} placeholder='Your Message' />
            </div>
            <button type="submit" className={styles.btn}>
                <span className={styles.btnText}>Send Message</span>
                <svg className={styles.arrow}>
                    <use href="/sprite.svg#icon-arrow-right-orange" />
                </svg>
            </button>
        </form>
    )
}


export default ContactForm