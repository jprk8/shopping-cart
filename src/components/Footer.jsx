import styles from '../styles/Footer.module.css';
import instagram from '../assets/icons/instagram.svg';
import youtube from '../assets/icons/youtube.svg';
import twitter from '../assets/icons/twitter.svg';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.section}>
                    <div className={styles.sectionTitle}>
                        Fake Shop, Inc.
                    </div>
                    <div className={styles.address}>
                        1234 Nowhere Blvd. <br/>
                        Rancho Falso, CA 90123
                    </div>
                    <div className={styles.tel}>
                        +1 (800) 555-1234
                    </div>
                    <div className={styles.email}>
                        contact@fakeshop.com
                    </div>
                    <div className={styles.sectionTitle}>Social Media</div>
                    <div className={styles.socialIcons}>
                        <img src={instagram} alt='' width='24px'/>
                        <img src={youtube} alt='' width='24px'/>
                        <img src={twitter} alt='' width='20px' />
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.sectionTitle}>Company</div>
                    <div className={styles.sectionText}>About Us</div>
                    <div className={styles.sectionText}>Press Release</div>
                    <div className={styles.sectionText}>Services</div>
                    <div className={styles.sectionText}>Career</div>
                </div>
                <div className={styles.section}>
                    <div className={styles.sectionTitle}>Support</div>
                    <div className={styles.sectionText}>FAQ</div>
                    <div className={styles.sectionText}>Help Center</div>
                    <div className={styles.sectionText}>Terms of Service</div>
                    <div className={styles.sectionText}>Privacy Policy</div>
                </div>
            </div>

            <div className={styles.copyright}>
                COPYRIGHT © 2025 FAKE SHOP, INC. ALL RIGHTS RESERVED 
            </div>
        </div>
    )
}