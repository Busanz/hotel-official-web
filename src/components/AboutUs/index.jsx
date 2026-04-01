import styles from './about_us.module.css';
import aboutUsImage from '../../assets/images/about_us.png';
import { aboutUsSummery } from '../../data/data';

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
        <p className={styles.aboutUs_subtitle}>About us</p>
        <h1 className={styles.aboutUs_title}>
          A Legacy of Exceptional Hospitality
        </h1>
        <p className={styles.aboutUs_description}>
          Founded in 1987, Beach Haven Hotel has been a landmark of refined
          luxury for over three decades. Nestled along the coast, our property
          blends classic architecture with contemporary elegance.
        </p>
        <p className={styles.aboutUs_description}>
          Every detail from the hand selected linens to our award winning
          culinary team is curated to ensure your stay is nothing short of
          extraordinary. We don't just host guests; we create lasting memories.
        </p>
        <div className={styles.aboutUs_summery}>
          {aboutUsSummery.map((item, index) => {
            return (
              <div key={index} className={styles.aboutUs_summery_inner}>
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
