import { Injectable } from '@angular/core';


@Injectable()
export class ContactService {

  constructor(
  ) { }

  contacts: any[] = [
    {id: 6, name: 'Carlos', phone: '666-6666666'},
    {id: 13, name: 'Ariel', phone: '313-1313333'},
    {id: 18, name: 'Carol', phone: '887-9876533'},
    {id: 87, name: 'Terry', phone: '222-2345678'}
  ];

  addContact(contact: any) {
    const lastIndex = this.contacts.length - 1;
    const lastContact = this.contacts[lastIndex];

    contact.id = lastContact.id + 1;
    this.contacts.push(contact);
  }

  deleteContact(contact) {
    this.contacts =
    this.contacts.filter(c => JSON.stringify(c) !== JSON.stringify(contact));
  }

}
