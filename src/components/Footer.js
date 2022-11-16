import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.myFooter}>
      <h3>Un brain de pédagogie</h3>
      <p>by Virginie Domalain</p>
      <ul>
        <li></li>
        <li>
          <a href="mailto:braindepedagogie@gmail.com">
            braindepedagogie@gmail.com
          </a>
        </li>
        <li>06.62.62.59.98</li>
        <li>
          <a
            href="https://hoodspot.fr/autres-services/un-brain-de-pedagogie-91912789400013/"
            target="_blank"
            rel="noreferrer"
          >
            Je suis sur Hoodspot.fr
          </a>
        </li>
      </ul>
      <div className="d-flex flex-column justify-content-evenly">
        <span>Copyright &copy; 2022-2023</span>
        <span>par Un brain de pédagogie</span>
        <span>Créé par Alain Guillon</span>
      </div>
    </footer>
  );
}

export default Footer;
