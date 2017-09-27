import { Component, OnInit } from '@angular/core';

import { ContactService } from '../../services/contact-service.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contact: any = {};

  constructor(
    private contactThang: ContactService
  ) { }

  ngOnInit() {
  }

  addNewContact( ) {
      this.contactThang.addContact(this.contact);
      this.contact = {};
  }
}
