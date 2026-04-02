import styles from './roomtype.module.css';
import { roomsTypes, pageHeaderDetails } from '../../data/data';
import PageHeader from '../PageHeader';

const Roomtype = () => {
  return (
    <div className={styles.roomtype_wrapper}>
      <PageHeader {...pageHeaderDetails[2]} />
      <div className={styles.roomtype}>
        {roomsTypes.map((item, index) => {
          return (
            <div key={index} className={styles.roomtype_card}>
              <img src={item.image} />
              <div className={styles.roomtype_card_detail}>
                <div className={styles.roomtype_card_title}>
                  <h2>{item.name}</h2>
                  <p>
                    <span>{item.price}</span>/night
                  </p>
                </div>
                <p className={styles.roomtype_card_description}>
                  {item.description}
                </p>
                <div className={styles.roomtype_card_features}>
                  {item.features.map((feature, index) => (
                    <span key={index}>{feature}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Roomtype;
