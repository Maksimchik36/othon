'use client'
import { useState } from 'react'
import Link from 'next/link'
import HorizontalLine from '@/components/HorizontalLine/HorizontalLine'
import { servicesData } from '@/data/servicesData'
import styles from './ServicesSection.module.scss'


const ServicesSection = () => {
    const [id, setId] = useState(0);

    let decrement = () => {
        // decrement img id
        let count = id - 1;
        //check if id is smaller than the number of available slides
        if (count < 0) {
            // change to last image
            setId(servicesData.length - 1);
        } else {
            setId(count);
        }
    }

    let increment = () => {
        // increment img id
        const count = id + 1;
        //check if id is greater than the number of available slides
        if (count > servicesData.length - 1) {
            // change to first image
            setId(0);
        }
        else {
            setId(count);
        }
    }

    const sliderCardStyles = (index) => {
        if (index === id) {
            return `${styles.desktopSliderCard} ${styles.activeSliderCard}`;
        } else if (index < id) {
            return `${styles.desktopSliderCard} ${styles.activeSliderCard} ${styles.opacityPreviousCard}`;
        }
        else { return styles.desktopSliderCard };
    }


    return (
        <section className={styles.section} id="services">
            <div className={`contentContainer ${styles.container}`}>
                <h4 className={`title ${styles.sectionTitle}`}>Services</h4>

                <div className={styles.slider}>
                    <button
                        className={styles.arrowLeft}
                        onClick={decrement}
                    >
                        <svg className={styles.iconLeft}>
                            <use href="/sprite.svg#icon-arrow-left-orange" />
                        </svg>
                    </button>

                    <button
                        className={styles.arrowRight}
                        onClick={increment}>
                        <svg className={styles.iconRight}>
                            <use href="/sprite.svg#icon-arrow-right-orange" />
                        </svg>
                    </button>

                    <h2 className={`styleH2 ${styles.slideTitle}`}>{servicesData[id].direction}</h2>

                    <HorizontalLine className={styles.horLine} />

                    <ul className={styles.directionsList}>
                        {servicesData.map((serviceItem, index) => <li
                            key={index}
                            className={index === id ? `styleH2 ${styles.directionTitle} ${styles.activeDirectionTitle}` : `styleH2 ${styles.directionTitle}`}
                            onClick={() => setId(index)}
                        >{serviceItem.direction}</li>)}
                    </ul>

                    {/* <div className={styles.mobileSliderCard}
                        style={{ backgroundImage: `linear-gradient(rgba(24, 48, 108, 0.8), rgba(24, 48, 108, 0.8)), url(${servicesData[id].img})` }}
                    >
                        <div className={`body ${styles.mobileDescription}`}>{servicesData[id].text.map((textItem, index) => <p key={index}> {textItem}</p>)}</div>

                        <Link href='/' className={styles.aboutUsLink}>
                            <svg className={styles.aboutUsArrow}>
                                <use href="/sprite.svg#icon-arrow-in-circle" />
                            </svg>
                        </Link>
                    </div> */}

                    <div className={styles.cardsWrapper}>
                        {servicesData.map((item, index) =>
                            // <div key={index} className={index <= id ? `${styles.desktopSliderCard} ${styles.activeSliderCard}` : styles.desktopSliderCard}
                            //     style={{
                            //         backgroundImage: `linear-gradient(rgba(24, 48, 108, 0.8), rgba(24, 48, 108, 0.8)), url(${item.img})`,
                            //         zIndex: index,
                            //     }}
                            // >
                            // </div>
                            <div key={index} className={sliderCardStyles(index)}
                                style={{
                                    backgroundImage: `linear-gradient(rgba(24, 48, 108, 0.8), rgba(24, 48, 108, 0.8)), url(${item.img})`,
                                }}
                            >
                            </div>
                        )
                        }

                        <Link href='/' className={styles.aboutUsLink}>
                            <svg className={styles.aboutUsArrow}>
                                <use href="/sprite.svg#icon-arrow-in-circle" />
                            </svg>
                        </Link>
                    </div>

                    <div className={`body ${styles.desktopDescription}`}>{servicesData[id].text.map((textItem, index) => <p key={index}> {textItem}</p>)}</div>
                </div>
            </div>
        </section >
    )
}


export default ServicesSection