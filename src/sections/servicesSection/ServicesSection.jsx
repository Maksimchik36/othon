'use client'
import { useState } from 'react'
import Link from 'next/link'
import HorizontalLine from '@/components/HorizontalLine/HorizontalLine'
import { servicesData } from '@/data/servicesData'
import styles from './ServicesSection.module.scss'


const ServicesSection = () => {
    const [id, setId] = useState(0);


    return (
        <section className={styles.section}>
            <div className={`contentContainer ${styles.container}`}>
                <h4 className={`title ${styles.sectionTitle}`}>Services</h4>

                <div className={styles.slider}>
                    <button
                        className={styles.arrowLeft}
                        onClick={() => {
                            // decrement img id
                            let count = id - 1;
                            //check if id is smaller than the number of available slides
                            if (count < 0) {
                                // change to last image
                                setId(servicesData.length - 1);
                            } else {
                                setId(count);
                            }
                        }}
                    >
                        <svg className={styles.iconLeft}>
                            <use href="/sprite.svg#icon-arrow-left-orange" />
                        </svg>
                    </button>

                    <button
                        className={styles.arrowRight}
                        onClick={() => {
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
                        }}>
                        <svg className={styles.iconRight}>
                            <use href="/sprite.svg#icon-arrow-right-orange" />
                        </svg>
                    </button>
                    <h1 className={`styleH2 ${styles.slideTitle}`}>{servicesData[id].title}</h1>

                    <HorizontalLine className={styles.horLine} />

                    <div className={styles.sliderCard}
                        style={{ backgroundImage: `linear-gradient(rgba(24, 48, 108, 0.8), rgba(24, 48, 108, 0.8)), url(${servicesData[id].img})` }}
                    >
                        <div className={`body ${styles.description}`}>{servicesData[id].text.map((textItem, index) => <p key={index}> {textItem}</p>)}</div>
                        <Link href='/' className={styles.aboutUsLink}>
                            <svg className={styles.aboutUsArrow}>
                                <use href="/sprite.svg#icon-arrow-in-circle" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section >
    )
}


export default ServicesSection