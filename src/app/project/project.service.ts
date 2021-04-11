import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { LYRICS } from 'src/app/app.api';
import { Project } from './project.model';

@Injectable()
export class ProjectService {

  constructor(private http: HttpClient) { }

  projects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${LYRICS}/project`)
  }
}
