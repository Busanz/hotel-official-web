import styles from './about_us.module.css';
import aboutUsImage from '../../assets/images/about_us.png';
import { aboutUsSummery, pageHeaderDetails } from '../../data/data';
import PageHeader from '../PageHeader';

const AboutUs = () => {
  return (
    <div className={styles.aboutUs_wrapper}>
      <div className={styles.aboutUs_left}>
        <img
          src={aboutUsImage}
          alt="Cozy beach image"
          className={styles.aboutUs_image}
        />
      </div>
      <div className={styles.aboutUs_right}>
        <PageHeader {...pageHeaderDetails[1]} />
        <div className={styles.aboutUs_summery}>
          {aboutUsSummery.map((item, index) => {
            return (
              <div key={index}>
                <p className={styles.aboutUs_summery_value}>{item.value}</p>
                <p className={styles.aboutUs_summery_text}>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
