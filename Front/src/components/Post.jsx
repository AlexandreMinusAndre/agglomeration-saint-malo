import "../Style/post.css";

import test from "../images/test_profil.png";

const Post = () => {

    

  return (
    <>
      <div className="card_for_post">
        <div className="localisation">
          <svg
            width="56"
            height="40"
            viewBox="0 0 56 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 0.666016C12.52 0.666016 0 13.186 0 28.666C0 49.666 28 80.666 28 80.666C28 80.666 56 49.666 56 28.666C56 13.186 43.48 0.666016 28 0.666016ZM28 38.666C22.48 38.666 18 34.186 18 28.666C18 23.146 22.48 18.666 28 18.666C33.52 18.666 38 23.146 38 28.666C38 34.186 33.52 38.666 28 38.666Z"
              fill="#E4796B"
            />
          </svg>
          <h3 className="localisation_text">Saint-Malo</h3>
        </div>

        <div className="content_text_and_arrow">
          <div className="content_and_name">
            <p className="content_post">
              Un panier différent chaque semaine pour les étudiants contre une
              petite cotisation ! Faites-vous plaisir !
            </p>

            <h2 className="poster_name">Corsaire_Malin</h2>
          </div>

          <svg
            width="181"
            height="182"
            viewBox="0 0 181 182"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M64.7832 125.782L99.324 91.166L64.7832 56.5498L75.417 45.916L120.667 91.166L75.417 136.416L64.7832 125.782Z"
              fill="#E4796B"
            />
          </svg>
        </div>

        <div className="bottom_of_post_card">
          <div className="box_for_picture">
            <img className="avatar" alt="avatar" src={test}></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
