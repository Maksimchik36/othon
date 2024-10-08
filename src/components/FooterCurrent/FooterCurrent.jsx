import Link from 'next/link'
import ContactForm from '../ContactForm/ContactForm'
import { socialMediaData } from '@/data/socialMediaData'
import { footerNavigationData } from '@/data/footerNavigationData'
import { footerCitiesData } from '@/data/footerCitiesData'
import { footerInternationalOfficesData } from '@/data/footerInternationalOfficesData'
import { footerCertificationsData } from '@/data/footerCertificationsData'
import styles from './FooterCurrent.module.scss'


const FooterCurrent = () => {
    return (
        <footer className={styles.footer}>
            {/* <div className={`contentContainer ${styles.container}`}> */}
            <div className='contentContainer' id={styles.container}>

                <div className={styles.socialMedia}>
                    <svg className={styles.logoIcon}>
                        <use href="/sprite.svg#icon-logo"></use>
                    </svg>

                    <ul className={styles.socialMediaList}>
                        {socialMediaData.map(item => <li key={item.id} className={styles.socialMediaItem}>
                            <svg className={`${styles.socialMediaIcon} ${styles[item.id]}`}>
                                <use href={`/sprite.svg#${item.iconSrc}`}></use>
                            </svg>
                        </li>)}
                    </ul>
                </div>

                <ContactForm className={styles.form} />

                <ul className={styles.navigationList}>
                    {footerNavigationData.map(item => <li key={item.title} className={`${styles.navigationBlock} ${styles[item.id]}`}>
                        <h3 className={`styleH3 ${styles.navigationTitle}`}>{item.title}</h3>
                        <ul className={styles.directionsList}>
                            {item.directions.map((direction, index) => <li key={index}>
                                <Link href='/' className='bodySmall'>{direction}</Link>
                            </li>)}
                        </ul>
                    </li>)}
                </ul>

                <ul className={styles.citiesList}>
                    {footerCitiesData.map((item) => <li key={item.city} className={styles.citiesBlock}>
                        <h4 className={`styleH3 ${styles.cityTitle} ${styles[item.city]}`}>{item.city}{' '}<span className={styles.type}>{item.type}</span>
                        </h4>
                        <address className={`bodySmall ${styles.cityAddress}`}>{item.address}</address>
                        <p>{item.post}</p>

                    </li>)}
                </ul>

                <div className={styles.internationalOfficesWrapper}>
                    <h3 className={`styleH3 ${styles.officesTitle}`}>International Offices</h3>
                    <ul>
                        {footerInternationalOfficesData.map(item => <li key={item.location} className={styles.officeItem}>
                            <p className={`bodySmall ${styles.company}`}>{item.company}</p>
                            <p className="bodySmall">{item.location}</p>

                        </li>)}
                    </ul>
                </div>

                <div className={styles.certificationsWrapper}>
                    <h3 className={`styleH3 ${styles.certificationsTitle}`}>Certifications</h3>
                    <ul className={styles.certificationsList}>
                        {footerCertificationsData.map(item => <li key={item.standart} className={styles.certificateItem}>
                            <p className={`bodySmall ${styles.certificationStandart}`}>{item.standart}</p>
                            <ul className={styles.certificationCities}>
                                {item.cities.map(city => <li key={city} className='bodySmall'>{city}</li>)}
                            </ul>

                        </li>)}
                    </ul>
                </div>

                <Link href='/' className={`bodySmall ${styles.terms}`}>Terms and Conditions</Link>
                <Link href='/' className={`bodySmall ${styles.policy}`}>Privacy Policy</Link>
                <p className={`bodySmall ${styles.copyright}`}>&copy;2024 OTHON, INC. All Rights Reserved.</p>
                <p className={styles.author}><span className={styles.creation}>Created with ♡ by</span> DD.NYC®</p>
            </div>
        </footer>
    )
}


export default FooterCurrent