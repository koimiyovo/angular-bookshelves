import * as firebase from 'firebase';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyC_p24Dy4BhqfTF3jSKTYk54RmkGbdUczM',
      authDomain: 'bookshelves-e1257.firebaseapp.com',
      databaseURL: 'https://bookshelves-e1257.firebaseio.com',
      projectId: 'bookshelves-e1257',
      storageBucket: 'bookshelves-e1257.appspot.com',
      messagingSenderId: '1098291978455',
      appId: '1:1098291978455:web:47657754ca3d55d6039092'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
