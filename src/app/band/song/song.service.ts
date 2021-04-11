import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { LYRICS } from 'src/app/app.api';
import { Song } from './song.model';

@Injectable()
export class SongService {

  constructor(private http: HttpClient) { }

  songs(search: string): Observable<Song[]> {
    return this.http.get<Song[]>(`${LYRICS}/songs`, {params: {q: search}})
  }
}
