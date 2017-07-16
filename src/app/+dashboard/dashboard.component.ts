import { Component, OnInit, Input } from '@angular/core';
import {ApiService} from './services/api.service';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
//import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 // photos: Array<any>;
 photos: FirebaseListObservable<any[]>;

  constructor(private apiService: ApiService, db: AngularFireDatabase ) {

    // this.photos = this.apiService.getPhotos();
    this.photos = db.list('/photos',{
      query: {
        limitToLast: 15,
        orderByChild : 'id'
      }
    });
   }

  ngOnInit() {
   // console.log(moment());
  }

}
