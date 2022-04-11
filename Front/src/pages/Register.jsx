import React from 'react';

import "../Style/register.css";

const Register = () => {

  // Input partie top //

  const [lastname, setLastname] = React.useState("");
  const [day, setDay] = React.useState("");
  const [mouth, setMouth] = React.useState("");
  const [year, setYear] = React.useState("");
  const [firstname, setFirstname] = React.useState("");
  const [adress, setAdresse] = React.useState("");
  const [zipcode, setZipcode] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [city, setCity] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phone, setPhone] = React.useState("");

  // Input partie bottom //

  const [asso, setAsso] = React.useState("")
  const [cateAsso, setCateAsso] = React.useState("")
  const [adresseAgain, setAdresseAgain] = React.useState("")
  const [zipcodeAgain, setZipcodeAgain] = React.useState("")
  const [cityAgain, setCityAgain] = React.useState("")
  const [phoneAgain, setPhoneAgain] = React.useState("")
  const [typeAgain, setTypeAgain] = React.useState("")


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3467/createAccount", {
      method: "POST",
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({ lastname, day, mouth, year, firstname, adress, zipcode, email, city, password, phone, asso, cateAsso, adresseAgain, zipcodeAgain, cityAgain, phoneAgain, typeAgain }),
    }).then((res) => console.log(res));
  };


  return (
    
    <div className="main">
      <form className="box_form" id="Form" onSubmit={handleSubmit}>
        <h1 className="title_form">Inscription</h1>

        <div className="select_type">
          <div className="box_for_association">
            <input
              type="checkbox"
              id="Association"
              className="input_for_association"
            ></input>
            <label htmlFor="Association" className="label_for_association">
              Association
            </label>
          </div>

          <div className="box_for_etudiant">
            <input
              type="checkbox"
              id="Etudiant"
              className="input_for_etudiant"
            ></input>
            <label htmlFor="Etudiant" className="label_for_etudiant">
              Etudiant
            </label>
          </div>

          <div className="box_for_professionnel">
            <input
              type="checkbox"
              id="Professionnel"
              className="input_for_professionnel"
            ></input>
            <label htmlFor="Professionnel" className="label_for_professionnel">
              Professionnel
            </label>
          </div>
        </div>

        <div className="box_for_top_input">
          <div className="box_name_birthday">
            <div className="box_name">
              <label htmlFor="Name" className="label_for_association">
                Nom
              </label>
              <input type="text" id="Name" className="input_for_name" onChange={(e) => setLastname(e.target.value)}></input>
            </div>

            <div className="box_birthday">
              <label className="label_for_birthday">Date de naissance</label>
              <div className="box_for_input_date">
                <input type="number" id="Day" className="input_for_day" onChange={(e) => setDay(e.target.value)}></input>
                <input
                  type="number"
                  id="Month"
                  className="input_for_month"
                  onChange={(e) => setMouth(e.target.value)}
                ></input>
                <input
                  type="number"
                  id="Year"
                  className="input_for_year"
                  onChange={(e) => setYear(e.target.value)}
                ></input>
              </div>
            </div>
          </div>

          <div className="box_firstname">
            <label htmlFor="Firstame" className="label_for_firstname">
              Prénom
            </label>
            <input
              type="text"
              id="Firstame"
              className="input_for_firstname"
              onChange={(e) => setFirstname(e.target.value)}
            ></input>
          </div>

          <div className="box_addresse">
            <label htmlFor="Addresse" className="label_for_address">
              Adresse
            </label>
            <input
              type="text"
              id="Addresse"
              className="input_for_adresse"
              onChange={(e) => setAdresse(e.target.value)}
            ></input>
          </div>

          <div className="box_zipcode_email">
            <div className="box_zipcode">
              <label htmlFor="Zipcode" className="label_for_zipcode">
                Code postal
              </label>
              <input
                type="text"
                id="Zipcode"
                className="input_for_zipcode"
                onChange={(e) => setZipcode(e.target.value)}
              ></input>
            </div>

            <div className="box_for_email">
              <label htmlFor="Email" className="label_for_email">
                Adresse mail
              </label>
              <input type="text" id="Email" className="input_for_email" onChange={(e) => setEmail(e.target.value)}></input>
            </div>
          </div>

          <div className="box_city_password">
            <div className="box_for_cityname">
              <label htmlFor="City" className="label_for_city">
                Ville
              </label>
              <input type="text" id="City" className="input_for_city" onChange={(e) => setCity(e.target.value)}></input>
            </div>

            <div className="box_for_first_password">
              <label htmlFor="Password" className="label_for_password">
                Mot de passe
              </label>
              <input
                type="password"
                id="Password"
                className="input_for_password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
          </div>

          <div className="box_phone_password">
            <div className="box_phone_number">
              <label htmlFor="Phone" className="label_for_phone">
                Téléphone
              </label>
              <input type="text" id="Phone" className="input_for_phone" onChange={(e) => setPhone(e.target.value)}></input>
            </div>

            <div className="box_for_confirm_password">
              <label
                htmlFor="ConfirmPassword"
                className="label_for_confirm_password"
              >
                Confirmer le mot de passe
              </label>
              <input
                type="password"
                id="ConfirmPassword"
                className="input_for_corfirm_password"
              ></input>
            </div>
          </div>
        </div>

        <hr className="separate_input"></hr>

        <div className="box_for_input_bot">
          <div className="box_name_category">
            <div className="box_for_name_asso">
              <label htmlFor="NameAsso" className="label_for_name_asso">
                Nom de l'association
              </label>
              <input
                type="text"
                id="NameAsso"
                className="input_for_asso"
                onChange={(e) => setAsso(e.target.value)}
              ></input>
            </div>

            <div className="box_for_category">
              <label htmlFor="Category" className="label_for_category">
                Catégorie associée à votre association
              </label>
              <input
                type="text"
                id="Category"
                className="input_for_category"
                onChange={(e) => setCateAsso(e.target.value)}
              ></input>
            </div>
          </div>

          <div className="box_addresse_again">
            <label htmlFor="AddresseAgain" className="label_for_address_again">
              Adresse
            </label>
            <input
              type="text"
              id="AddresseAgain"
              className="input_for_adresse_again"
              onChange={(e) => setAdresseAgain(e.target.value)}
            ></input>
          </div>

          <div className="box_zipcode_again">
            <label htmlFor="ZipcodeAgain" className="label_for_zipcode_again">
              Code postal
            </label>
            <input
              type="text"
              id="ZipcodeAgain"
              className="input_for_zipcode_again"
              onChange={(e) => setZipcodeAgain(e.target.value)}
            ></input>
          </div>

          <div className="box_city_again">
            <label htmlFor="CityAgain" className="label_for_city_again">
              Ville
            </label>
            <input
              type="text"
              id="CityAgain"
              className="input_for_city_again"
              onChange={(e) => setCityAgain(e.target.value)}
            ></input>
          </div>

          <div className="box_phone_type_asso">
            <div className="box_for_phone_again">
              <label htmlFor="PhoneAgain" className="label_for_phone_again">
                Numéro de téléphone
              </label>
              <input
                type="text"
                id="PhoneAgain"
                className="input_for_phone_again"
                onChange={(e) => setPhoneAgain(e.target.value)}
              ></input>
            </div>

            <div className="box_for_type_asso">
              <label htmlFor="TypeAsso" className="label_for_type_asso">
                Type d'association
              </label>
              <input
                type="text"
                id="TypeAsso"
                className="input_for_type_asso"
                onChange={(e) => setTypeAgain(e.target.value)}
              ></input>
            </div>
          </div>
        </div>

        <div className="box_for_conditions">
          <input type="checkbox"></input>
          <p className="text_for_conditions">
            J’accepte les Conditions d’Utilisation et je comprends que la
            Politique relative à la protection des données personnelles et aux
            cookies s’applique à mon utilisation des services Plankton.
          </p>
        </div>
      </form>

      <button form="Form" className="btn_inscription" type="submit">S'inscrire</button>
    </div>
  );
};

export default Register;
