import {  Component,
          OnInit,
          Input,
          Output,
          EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() myQuote: any;

  @Output() deleteNotifier = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  notifyForDeletion() {
      this.deleteNotifier.emit(this.myQuote);
  }

}
