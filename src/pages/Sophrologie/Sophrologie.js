import Header from "../../components/Header";
import Footer from "../../components/Footer";

import ImgSable1 from "../../assets/images/sable1.webp";
import ImgSable2 from "../../assets/images/sable2.webp";

function Sophrologie() {
  return (
    <>
      <Header />

      <section>
        <h1>Sophrologie</h1>
        <blockquote>
          La plus grande découverte de notre génération a été de s'apercevoir
          qu'un homme peut changer sa vie en modifiant sa façon de penser.
        </blockquote>
      </section>

      <article>
        <section>
          <h2>La sophrologie, quoi et pourquoi ?</h2>
          <p>
            La sophrologie emploie un ensemble de techniques qui vont à la fois
            agir sur le corps et sur le mental. Elle combine des exercices qui
            travaillent à la fois sur la respiration, la décontraction
            musculaire et la visualisation.
          </p>
          <p>
            La sophrologie est particulièrement recommandée en gestion du stress
            et pour la détente. Elle s'adresse à toute personne cherchant à
            améliorer son existence et développer mieux-être et détente. Des
            séances spécifiques peuvent être proposées aux jeunes enfants, aux
            adolescents.
          </p>
          <p>
            Le bien-être de mes clients est ma priorité, et je vous garantis un
            suivi personnalisé qui répond à vos besoins.
          </p>
          <dl>
            <dt>La sophologie permet de...</dt>
            <dd>- développer la confiance en soi, l'estime de soi.</dd>
            <dd>- mieux gérer le stress.</dd>
            <dd>- préparer ou accompagner des changements, des évènements.</dd>
            <dd>- prendre du recul</dd>
            <dd>- travailler sa concentration, sa mémoire</dd>
          </dl>
        </section>
        <img
          src={ImgSable1}
          alt="Représentation de quelques traces dans le sable fin"
        />
      </article>

      <article>
        <img
          src={ImgSable2}
          alt="Représentation de quelques cercles dans le sable"
        />
        <section>
          <h2>Informations pratiques</h2>
          <h3>Déroulé</h3>
          <p>
            Durant une première séance dite d'anamnèse, nous faisons
            connaissance. Je vous explique comment l’accompagnement se déroule,
            ce qu’il va se passer et quels sont les points clés de votre
            réussite.
          </p>
          <p>
            Nous faisons un tour d’horizon sur toute votre vie: votre histoire
            personnelle, votre histoire de vie, … Nous définissons ce vers quoi
            vous avez envie d’aller, vos envies, vos blocages, …
          </p>
          <p>
            Cet échange se fait dans la bienveillance, l’écoute et entre bien
            évidemment, comme tous nos rendez-vous, dans le cadre du secret
            professionnel.
          </p>
          <p>
            Les autres séances sont découpées en trois temps et débutent
            toujours par un temps d'accueil et d'échange. Cette étape permet
            d'exprimer vos besoins, vos envies, mais également d'échanger sur
            votre état général qu'il soit physique ou émotionnel.
          </p>
          <div>
            <h3>Tarifs</h3>
            <p>
              <i>Tarif unique 50€ la séance</i>
              <br />
              Renseignez-vous auprès de votre complémentaire santé, en effet,
              certaines mutuelles financent la totalité ou une partie des
              séances de sophrologie.
            </p>
            <ul>
              <li>Première séance: Durée 1h - 1h15</li>
              <li>Suivi: Durée 45min - 1h</li>
              <li>
                Sur rendez-vous à l'espace Chlorofeel à Meyzieu ou au domicile
              </li>
            </ul>
          </div>
        </section>
      </article>

      <Footer />
    </>
  );
}

export default Sophrologie;
