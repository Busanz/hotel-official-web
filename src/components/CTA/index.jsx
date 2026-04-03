import styles from './cta.module.css';

const CTA = ({ setPageOnCTA }) => {
  return (
    <div>
      <button
        className={styles.hero_button}
        onClick={() => {
          setPageOnCTA('booking');
          window.scrollTo(0, 0);
        }}
      >
        Recerve your stay
      </button>
    </div>
  );
};

export default CTA;
