import axios from 'axios';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {

        e.preventDefault();
        axios.post('http://localhost:3000/createAccount', {
            nom: document.getElementById('firstName').value,
            prenom: document.getElementById('lastName').value,
            mot_de_passe: document.getElementById('password').value,
            email: document.getElementById('email').value,
            groupe: document.querySelector('select').value,
            ecole: document.getElementById('ecole').value,
            numero_de_telephone: document.getElementById('phoneNumber').value,
            pays: document.getElementById('pays').value,
            ville: document.getElementById('ville').value,
            code_postal: document.getElementById('code_postal').value,
            rgpd: document.getElementById('rgpd').checked
        });
});