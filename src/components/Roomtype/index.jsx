import styles from './roomtype.module.css';
import { roomsTypes } from '../../data/data';

const Roomtype = () => {
  return (
    <div className={styles.roomtype_wrapper}>
      <div className={styles.roomtype_top}>
        <p className={styles.roomtype_subtitle}>Accommodations</p>
        <h1 className={styles.roomtype_title}>Our Rooms and Suites</h1>
        <p className={styles.roomtype_description}>
          From cozy retreats to grand suites find the perfect space for your
          stay.
        </p>
      </div>
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
                    <p key={index}>{feature}</p>
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
