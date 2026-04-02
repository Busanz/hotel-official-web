import styles from './page_header.module.css';

const PageHeader = ({
  subtitle,
  title,
  descriptionLineOne,
  descriptionLineTwo = '',
  aligment = true,
}) => {
  return (
    <div className={`${aligment ? styles.page_header : ''}`}>
      <p className={styles.page_header_subtitle}>{subtitle}</p>
      <h1 className={styles.page_header_title}>{title}</h1>
      <p className={styles.page_header_description}>{descriptionLineOne}</p>
      {descriptionLineTwo && (
        <p className={styles.page_header_description}>{descriptionLineTwo}</p>
      )}
    </div>
  );
};
export default PageHeader;
