// Exercice 3
// Créez un dossier ReactJS qui s'appelle "exercice3".
// Supprimez tous les dossiers inutiles.
// Dans le fichier App.js, supprimez tous et créer une class App avec les extends et imports nécessaires.
// Créez une variable qui a comme valeur la date actuelle, et affichez-la dans votre page (Affichez la date, le mois, l'année et l'heure actuelles)

import React, {Component} from 'react';

let date = new Date()
let day = date.getDate()
let month = date.getMonth()
let year = date.getFullYear()
let hour = date.getHours()

class App extends Component {
  render(){
    return (
      <p>Today it's {day}/{month+1}/{year} and it's {hour} o'clock</p>
    );
  }
}

export default App;