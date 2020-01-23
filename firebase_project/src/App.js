import React, { Component } from 'react';
import firebase from 'firebase';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      token: 'Carregando...',
      nome: ''
    };

    // Your web app's Firebase configuration
    let firebaseConfig = {
      apiKey: "AIzaSyDfRlQ58cXsNifjP3W2cAR7fo_xLt1ITbE",
      authDomain: "reactapp-a6b36.firebaseapp.com",
      databaseURL: "https://reactapp-a6b36.firebaseio.com",
      projectId: "reactapp-a6b36",
      storageBucket: "reactapp-a6b36.appspot.com",
      messagingSenderId: "778172982592",
      appId: "1:778172982592:web:3c0f090bfd55cf3ebdc6a5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    /* when we put ".on" we are looking at "ref" = token in this case */
    /*
      firebase.database().ref('token').on('value', (snapshot) => {
      let state = this.state;
      state.token = snapshot.val();
      this.setState(state);
    });
    */

    /* when we put ".once" it is loaded only once */
    firebase.database().ref('token').once('value').then((snapshot) => {
      let state = this.state;
      state.token = snapshot.val();
      this.setState(state);
    });

  }

  render() {
    const { token } = this.state;

    return (
      <div>
        <h1> Token: {token} </h1>
      </div>
    )
  }

}