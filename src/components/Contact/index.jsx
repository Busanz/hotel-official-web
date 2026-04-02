import PageHeader from '../PageHeader';
import { pageHeaderDetails, contactInfo } from '../../data/data';
import styles from './contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <PageHeader {...pageHeaderDetails[4]} />
      <div className={styles.contact_wrapper}>
        {contactInfo.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className={styles.contact_card}>
              <div className={styles.icon}>
                <Icon size={24} strokeWidth={1} />
              </div>
              <div>
                <p>{item.title}</p>
                <p>{item.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
