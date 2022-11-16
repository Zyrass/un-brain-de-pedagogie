// import styles from "./Contact.module.scss";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Contact() {
  return (
    <>
      <Header />
      <section>
        <h1>Contactez-moi</h1>
        <address>
          Meyzieu
          <a href="mailto:braindepedagogie@gmail.com">
            braindepedagogie@gmail.com
          </a>
          0662625998
        </address>
      </section>

      <section>
        <form action="">
          <input type="text" placeholder="Nom" />
          <input type="email" placeholder="E-mail" />
          <input type="tel" placeholder="Téléphone" />
          <input type="text" placeholder="Objet" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Rédigez votre message ici..."
          ></textarea>
          <button>Envoyer</button>
        </form>
      </section>

      <div
        class="mapouter"
        style={{
          position: "relative",
          textAlign: "right",
          height: "500px",
          width: "755px",
        }}
      >
        <div
          class="gmap_canvas"
          style={{
            overflow: "hidden",
            background: "none !important",
            height: "500px",
            width: "755px",
          }}
        >
          <iframe
            title="google map"
            width="755"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=56%20rue%20jean%20collet&t=&z=17&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
          <a href="https://www.whatismyip-address.com/divi-discount/">
            divi discount
          </a>
          <br />
          <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
