// import Header from "../../components/Header";

import styles from "./HomePage.module.scss";

import imgArbre from "../../assets/images/arbre.webp";
import imgTomorrow from "../../assets/images/tomorrow.webp";

function HomePage() {
  return (
    <>
      <section className={styles.homepage}>
        <h1>Un brain de pédagogie</h1>
        <h2>
          PSYCHOPÉDAGOGUE <br /> & SOPHROLOGUE
        </h2>
        <p className="text-lead">
          Besoin d'accompagnement dans le parcours éducatif de votre enfant ou
          dans la gestion du stress et des émotions, je vous reçois ou me
          déplace sur Meyzieu et ses environs.
        </p>
        <img
          src={imgArbre}
          alt="Représentation d'un arbre qui pousse"
          className="debug-5"
        />
      </section>

      {/* <Header /> */}

      <section className={`${styles.who}`}>
        <div>
          <h3>Qui suis-je ?</h3>
          <div>
            <img
              src={imgTomorrow}
              alt="Représentation d'une flèche pour un jour meilleur"
            />
          </div>
          <blockquote>
            <p>
              Mais alors, dit Alice, si le monde n'a absolument aucun sens, qui
              nous empêche d'en inventer un ?
            </p>
            <cite>
              Alice au pays des merveilles de <strong>Lewis Carroll</strong>
            </cite>
          </blockquote>
        </div>
        <div>
          <p>
            Passionnée par l’être humain et son développement, j'ai exercé en
            tant qu'enseignante, formatrice et coach. J’ai toujours eu à cœur
            d’apprendre de nouvelles méthodes pour optimiser les
            accompagnements. C'est l'ensemble de mes compétences que je me
            propose de mettre à votre service.
          </p>
          <p>
            Titulaire d'un <strong>Master 2 en Sciences de l'éducation</strong>,
            je suis formée en Sophrologie (<strong>titre RNCP</strong>) et en
            Psychopédagogie (<strong>Formation certifiée Qualiopi</strong>).
            J'interviens ainsi auprès d’enfants, d’adolescents et d’adultes{" "}
            <strong>pour les aider à retrouver confiance</strong>, méthode et
            plaisir d’apprendre via la psychopédagogie! Je propose également de
            travailler sur la levée des freins au bien-être grâce à la
            sophrologie.
          </p>
        </div>
      </section>
    </>
  );
}

export default HomePage;
