import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Song } from './song.model';
import { SongService } from './song.service';

@Component({
  selector: 'lyrics-song',
  templateUrl: './song.component.html'
})
export class SongComponent implements OnInit {

  song: Song[]
  bandNameInput: string

  // covers: Song[] = [
  //   {name: "Linkin Park", nameImage: "linkin-park-living-things.png"},
  //   {name: "A7X", nameImage: "linkin-park-living-things.png"}
  // ]


  constructor(private route: ActivatedRoute,
              private SongService: SongService) {
    this.bandNameInput = this.titleFormatter(<string> this.route.snapshot.paramMap.get('id'))

    this.song = []
  }

  ngOnInit() {
    this.SongService.songs(this.bandNameInput).subscribe(songs => this.song = songs)
  }

  titleFormatter(name: string) {
    return name.replace("-", " ").toUpperCase()
  }

}
