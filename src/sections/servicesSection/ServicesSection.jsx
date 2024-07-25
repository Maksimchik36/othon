import HorizontalLine from '@/components/HorizontalLine/HorizontalLine'
import styles from './ServicesSection.module.scss'
import { servicesData } from '@/data/servicesData'


const ServicesSection = () => {
    return (
        <section>
            <div className="contentContainer">
                <HorizontalLine className={styles.firstLine} />
                <h4 className={`title ${styles.sectionTitle}`}>Services</h4>

                <div className={styles.slider}>
                    <h2 className={`styleH2 ${styles.slideTitle}`}>{servicesData[0].title}</h2>
                    <HorizontalLine className={styles.slideLine} />
                    <div className={styles.textCard}>
                        {servicesData[0].text.map((item, index) => <p key={index} className={styles.cardText}>{item}</p>)}
                    </div>
                </div>
            </div>
        </section>
    )
}


export default ServicesSection