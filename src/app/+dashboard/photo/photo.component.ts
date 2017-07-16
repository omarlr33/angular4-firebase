import { Component, OnInit, Input} from '@angular/core';
import {Photo} from '../models/photo';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dashboard-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  @Input() photo: Photo;
  constructor() { }

  ngOnInit() {
  }

}
