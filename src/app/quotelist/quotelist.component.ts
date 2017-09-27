import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotelist',
  templateUrl: './quotelist.component.html',
  styleUrls: ['./quotelist.component.css']
})
export class QuotelistComponent implements OnInit {

  quotes: any[] = [
    {
      id: 11,
      text: 'Most trees are blue',
      author: 'Jaydes Smith'
    },
    {
      id: 24,
      text: `If a bookstore never runs out of a certain book, dose that mean that
      nobody reads it or everybody reads it?`,
      author: 'Jaydes Smith'
    },
    {
      id: 37,
      text: `How can mirrors be real if our eyes aren't real?`,
      author: 'Jaydes Smith'
    },
    {
      id: 48,
      text: `If You Can’t Handle Me at My X, You Don’t Deserve Me at My Y`,
      author: 'Marilyn Monroe (?)'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  deleteQuote(quote) {
    this.quotes.forEach((q,i) => {
      if (JSON.stringify(quote) === JSON.stringify(q)) {
        this.quotes.splice(i,1);
      }
    });
  }

}
