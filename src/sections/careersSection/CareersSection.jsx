import Link from 'next/link'
import styles from './CareersSection.module.scss'


const CareersSection = () => {
    return (
        <section className={styles.section}>
            <div className="contentContainer">
                <h4 className={`title ${styles.careersTitle}`}>Careers</h4>
                <h5 className={`body ${styles.careersOffices}`}>Our Offices</h5>

                <div className={styles.contentWrapper}>
                    <ul className={styles.officesList}>
                        <li className='title'>Houston, TX (Headquarters)</li>
                        <li className='title'>Dallas, TX</li>
                        <li className='title'>Austin, TX</li>
                    </ul>

                    <div className={styles.careersPhotoWrapper} />

                    <div className={styles.awards}>
                        <svg className={styles.iconPlanet}>
                            <use href="/sprite.svg#icon-planet-dark"></use>
                        </svg>
                        <p className={`body ${styles.awardsText}`}>OTHON provides equal employment opportunities to all employees and applicants for employment and prohibits discrimination and harassment of any type without regard to race, color, religion, age, sex, national origin, disability status, genetics, protected veteran status, sexual orientation, gender identity or expression, or any other characteristic protected by federal, state or local laws.</p>
                    </div>

                    <div className={styles.linksWrapper}>
                        <Link href='/' className={styles.careersLink}>
                            <span className={`title ${styles.linkText}`}>List Job Openings</span>
                            <svg className={styles.arrow}>
                                <use href="/sprite.svg#icon-arrow-orange" />
                            </svg>
                        </Link>

                        <Link href='/' className={styles.careersLink}>
                            <span className={`title ${styles.linkText}`}>Apply Now</span>
                            <svg className={styles.arrow}>
                                <use href="/sprite.svg#icon-arrow-orange" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default CareersSection