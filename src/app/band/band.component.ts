import { Component, OnInit, ViewChild } from '@angular/core';

import { Band } from './band.model';
import { SongComponent } from './song/song.component';
import { BandService } from './band.service'

@Component({
  selector: 'lyrics-band',
  templateUrl: './band.component.html'
})
export class BandComponent implements OnInit {

  @ViewChild(SongComponent) songs?: SongComponent
  readjustBandName: string = ""

  // bands: Band[] = [
  //   {name: "Linkin Park"},
  //   {name: "Limp Bizkit"},
  //   {name: "The Crue"},
  //   {name: "A7X"}
  // ]

  bands: Band[] = []

  constructor(private bandService: BandService) {
  }

  ngOnInit() {

    this.bandService.bands().subscribe(bands => this.bands = bands)
  }

  bandNamePath(name: string) {
    this.readjustBandName = name.toLowerCase().replace(" ", "-")
    return this.readjustBandName
  }

}
