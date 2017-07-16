import { Injectable } from '@angular/core';
import {listPhotos} from './mocks/photos-mock';

@Injectable()
export class ApiService {

  constructor() { }

  getPhotos()  {return listPhotos;  }

}
