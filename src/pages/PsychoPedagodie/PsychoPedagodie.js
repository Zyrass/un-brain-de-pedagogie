import Header from "../../components/Header";

import ImgBusiness from "../../assets/images/Business_Handshake.webp";
import ImgSchool from "../../assets/images/School_Application.webp";

function PsychoPedagogie() {
  return (
    <>
      <Header />
      <div>
        <h1>Psychopédagogie</h1>
        <p>
          En dépassant ensemble les difficultés de votre enfants en terme de
          concentration, de motivation et/ou de mémorisation, ou même en
          s'assurant que votre enfant se sente bien dans ses baskets d'écolier,
          nous ferons en sorte qu'il/elle prenne du plaisir dans les
          apprentissages grâce à différentes approches individualisées et
          bienveillantes.
        </p>
      </div>
      <div>
        <img src={ImgBusiness} alt="Deux personnes qui trouvent un accord" />
        <h2>Conseil Pédagogique</h2>
        <p>
          <strong>
            Des conseils, des méthodes pour favoriser l'autonomie dans les
            apprentissages, lever les blocages et se sentir bien dans ses
            apprentissages.
          </strong>{" "}
          Un parcours scolaire peut être émaillé de difficultés diverses et
          variées parce que les enfants connaissent des troubles de
          l’apprentissage tels que :
        </p>
        <ul>
          <li>Les angoisses de performances</li>
          <li>Les troubles DYS</li>
          <li>Les troubles de l'attention</li>
          <li>
            Ou encore parce que l'enfant n'est{" "}
            <strong>pas à l'aise, s'ennuie...</strong>
          </li>
        </ul>

        <p>
          Grâce à une approche prenant en compte{" "}
          <strong>l’enfant dans sa globalité</strong>, le psychopédagogue
          accompagne l’enfant en vue de :
        </p>
        <ul>
          <li>Lui permettre d’investir son statut d’élève</li>
          <li>
            Lui faire prendre conscience de ses force, ses faiblesses, ses
            stratégies d’apprentissage.
          </li>
          <li>
            Soutenir sa motivation, son désir d’apprendre et sa confiance en soi
          </li>
          <li>Permettre à l’enfant de se sentir bien en classe</li>
        </ul>

        <div>
          <h3>Tarifs et durée</h3>
          <p>Première séance d'1h30 puis séances d'1h</p>
          <ul>
            <li>Enfants, ados, étudiants: 50€ la séance</li>
            <li>Adultes: 70€ la séance</li>
            <li>règlement en espèce ou en chèque uniquement</li>
          </ul>
        </div>
      </div>
      Enfants, a
      <div>
        <img
          src={ImgSchool}
          alt="Représentatant quelqu'un qui réalise un devoir écrit"
        />
        <h3>Orientation scolaire</h3>
        <p>
          <strong>
            Le chemin vers la réussite par l'identification de ses talents
          </strong>
          Spécialiste de l'information sur les formations et les métiers, j'aide
          les élèves à choisir leur orientation en fonction de leurs résultats
          scolaires, de leurs goûts et de leurs aptitudes.
        </p>
        <p>
          En les accompagnant à lister leurs aptitudes, à dépasser leurs
          croyances limitantes, nous partons d'un état des lieux, à
          l'élaboration d'un projet et la mise en action de ce dernier.
        </p>
        <div>
          <h3>Tarifs</h3>
          <p>
            <i>Tarif réduits pour les étudiants et les demandeurs d'emploi</i>
          </p>
          <ul>
            <li>Ados: 70€ la séance</li>
            <li>Adulte: 80€ la séance</li>
            <li>règlement en espèce ou en chèque uniquement</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default PsychoPedagogie;
