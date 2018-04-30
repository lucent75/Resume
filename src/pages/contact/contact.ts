import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  contactForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private emailComposer: EmailComposer) {
  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.contactForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'company': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'telephone': new FormControl(null),
      'description': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    this.sendEmail();
  }

  sendEmail() {
    const value = this.contactForm.value;
    let telephone = 'Not Provided';
    if (value.telephone !== null) {
      telephone = value.telephone
    }
    const body = 'Name: ' + value.name + '<br/> Company: ' + value.company + '<br/> <br/> Email: ' + value.email + '<br/> <br/> Telephone: ' + telephone + '<br/> <br/>  Question/Comment: ' + value.description;
    let email = {
      to: 'cciepiela75@gmail.com',
      subject: 'Resume Question/Comment',
      body: body,
      isHtml: true
    };
    this.emailComposer.open(email);
  }

}
