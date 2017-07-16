import { Component, OnInit } from '@angular/core';
import {AuthGuard} from '../auth/auth-guard.service'
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  title = 'Moon pet detector';

  isAuth: any;
  user: any;

  constructor(private authGuard: AuthGuard,private afAuth : AngularFireAuth) {
      this.isAuth = authGuard.canActivate()
      this.user = afAuth.authState;
  }

  ngOnInit() {
  }

  getIsAuth(){
    return this.isAuth;
  }

  logout() {
    console.log('logout')
    this.afAuth.auth.signOut();
  }

}
