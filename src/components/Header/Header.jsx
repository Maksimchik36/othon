'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import ContactUsBtn from '../ContactUsBtn/ContactUsBtn'
import { navLinksData } from '@/data/navLinksData'
import styles from './Header.module.scss'



const Header = () => {
    const [burgerMenu, setBurgerMenu] = useState(false);
    const [navLinks, setNavLinks] = useState(false);

    const toggleBurgerMenu = () => {
        if (!burgerMenu) {
            setBurgerMenu(true);
            setTimeout(() => { setNavLinks(true) }, 100);
        } else {
            setNavLinks(false);
            setTimeout(() => {
                setBurgerMenu(false)
            }, 100);
        }
    };

    useEffect(() => {
        if (burgerMenu) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "auto";
        }
    }, [burgerMenu]);


    return (
        <header className={styles.header}>
            <div className={`contentContainer ${styles.container}`}>
                <Link
                    href={"/"}
                    className={styles.logoLink}
                >
                    <svg
                        className={
                            burgerMenu
                                ? `${styles.logoIcon} ${styles.burgerLogoIcon}`
                                : `${styles.logoIcon}`
                        }
                    >
                        <use href="/sprite.svg#icon-logo"></use>
                    </svg>
                </Link>

                {/* <ul className={styles.navLinksList}>
                    {navLinksData.map(item => <li key={item.id} className='buttonText'>
                        <Link href={item.href}>{item.title}</Link>
                    </li>)}
                </ul> */}

                <nav
                    // className={styles.navLinksList}
                    className={
                        navLinks
                            ? `${styles.navLinks} ${styles.navLinksOpen}`
                            : `${styles.navLinks}`
                    }
                >
                    {navLinksData.map(item =>
                        <Link
                            className='buttonText'
                            href={item.href}
                            key={item.id}
                            onClick={() => {
                                setNavLinks(false);
                                setTimeout(() => {
                                    setBurgerMenu(false);
                                }, 500);
                            }}
                        >
                            {item.title}
                        </Link>
                    )}
                </nav>

                <button
                    // className={styles.burgerBtn}
                    className={
                        burgerMenu
                            ? `${styles.burgerBtn} ${styles.burgerOpen}`
                            : `${styles.burgerBtn}`
                    }
                    onClick={toggleBurgerMenu}
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

                <ContactUsBtn burgerMenu={burgerMenu} setNavLinks={setNavLinks} setBurgerMenu={setBurgerMenu} />
            </div>
        </header>
    )
}


export default Header