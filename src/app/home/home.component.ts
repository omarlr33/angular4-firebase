import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

import * as firebase from 'firebase/app'

@Component({selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.scss']})
export class HomeComponent implements OnInit {

  title: String = 'Home';
  user: Observable <firebase.User>;


  constructor(private afAuth: AngularFireAuth, private router : Router) {
    this.user = afAuth.authState;

  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(result => {
        // tslint:disable-next-line:curly
        if (result.user)
          this.router.navigate(['/dashboard']);
        }
      )
      .catch(error => {
        console.log(`Error firebase: ${error}`);
      });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  ngOnInit() {}

}
