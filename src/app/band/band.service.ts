import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';


import { LYRICS } from '../app.api';
import { Band } from './band.model';

@Injectable()
export class BandService {

  constructor(private http: HttpClient) { }

  bands(search?: string): Observable<Band[]> {
    return this.http.get<Band[]>(`${LYRICS}/bands`)
  }
}
