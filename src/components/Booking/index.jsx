import PageHeader from '../PageHeader';
import styles from './booking.module.css';
import { pageHeaderDetails } from '../../data/data';
import { roomsTypes } from '../../data/data';

const Booking = () => {
  const handleSubmit = () => {
    alert('Submit button is pressed');
  };
  const roomTypeList = roomsTypes.map((room) => room.name);
  return (
    <div className={styles.booking}>
      <PageHeader {...pageHeaderDetails[3]} />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.name_email}>
          <label htmlFor="fullName">
            Full Name:
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Buddhi De Silva"
              required
            />
          </label>

          <label htmlFor="email">
            Email:
            <input
              id="email"
              name="email"
              type="text"
              placeholder="buddhi@gmail.com"
              required
            />
          </label>
        </div>
        <div className={styles.check_in_out}>
          <label htmlFor="checkIn">
            Check-in:
            <input id="checkIn" name="checkIn" type="date" required />
          </label>
          <label htmlFor="checkOut">
            Check-out:
            <input id="checkOut" name="checkOut" type="date" required />
          </label>
        </div>
        <div className={styles.room_guest}>
          <label htmlFor="roomtype">
            Room Type:
            <select id="roomtype" name="roomtype" required>
              <option value="">Select room type</option>
              {roomTypeList.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label htmlFor="numberOfGuest">
            Guests:
            <select id="numberOfGuest" name="numberOfGuest">
              {[1, 2, 3, 4].map((item) => (
                <option key={item}>
                  {item}
                  {item === 1 ? ' Guest' : ' Guests'}
                </option>
              ))}
            </select>
          </label>
        </div>
        <button type="submit" className={styles.submit_button}>
          Book now
        </button>
      </form>
    </div>
  );
};

export default Booking;
