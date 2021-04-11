import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lyrics-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  display = "listView"

  constructor() { }

  ngOnInit(): void {
  }

  showHide() {
    if (this.display == "none") {
      this.display = "block"
    } else {
      this.display = "none"
    }

    console.log("TESTE")
  }

}
