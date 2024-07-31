import ContactUsBtn from '../ContactUsBtn/ContactUsBtn'
import { navLinksData } from '@/data/navLinksData'
import styles from './Header.module.scss'
import Link from 'next/link'
import Image from 'next/image'


const Header = () => {
    const burgerMenu = false;
    return (
        <header className={styles.header}>
            <div className={`contentContainer ${styles.container}`}>
                <Link
                    href={"/"}
                    className={styles.logoLink}
                // scroll={false}
                // onClick={scrollToTop}
                >
                    <Image
                        src={"/logo.webp"}
                        fill
                        alt="OTHON logo"
                        sizes="30vw"
                        priority={true}
                    />
                </Link>

                <ul className={styles.navLinksList}>
                    {navLinksData.map(item => <li key={item.id} className='buttonText'>{item.title}</li>)}
                </ul>

                <button
                    className={styles.burgerBtn}
                // className={`headerBtnsSmall`}
                // id={styles.btn}
                // onClick={() => {
                //     setBurgermenu(!burgerMenu);
                // }}
                >
                    {burgerMenu ? (
                        <svg className={`${styles.icon}`}>
                            <use href="/sprite.svg#icon-burger-close"></use>
                        </svg>
                    ) : (
                        <svg className={styles.icon}>
                            <use href="/sprite.svg#icon-burger-open"></use>
                        </svg>
                    )}
                </button>

                <ContactUsBtn />
            </div>
        </header>
    )
}


export default Header