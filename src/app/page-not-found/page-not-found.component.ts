import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
   <h3>page-not-found ..!</h3>
   <div id="sect1" class="container">

        <div class="imgdiv">
            <img src="./error.jpeg" alt="img not found">

        </div>
    </div>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
