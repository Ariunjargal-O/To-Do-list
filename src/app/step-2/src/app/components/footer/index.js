import styles from "../footer/footer.module.css"

const Footer = () => {
  return (
    <div>
      <div className={styles.footerContainer}>
        <span className={styles.footerText}>Powered by </span>
        <span className={styles.madebyCompany}>Pinecone Ari</span>
      </div>
    </div>
  );
};

export default Footer;
