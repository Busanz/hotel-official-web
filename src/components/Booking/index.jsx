import PageHeader from '../PageHeader';
import styles from './booking.module.css';
import { pageHeaderDetails } from '../../data/data';

const Booking = () => {
  const handleSubmit = () => {
    alert('Submit button is pressed');
  };
  return (
    <div className={styles.booking}>
      <PageHeader {...pageHeaderDetails[3]} />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.name_email}>
          <label>
            Full Name:
            <input type="text" />
          </label>
          <label>
            Email:
            <input type="text" />
          </label>
        </div>
        <div>
          <label>
            Check-in:
            <input type="date" />
          </label>
          <label>
            Check-out:
            <input type="date" />
          </label>
        </div>
        <div>
          <label>
            Room Type:
            <input type="option" />
          </label>
          <label>
            Guests:
            <input type="option" />
          </label>
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};

export default Booking;
