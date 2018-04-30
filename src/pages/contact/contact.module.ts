import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactPage } from './contact';

import { EmailComposer } from '@ionic-native/email-composer';

@NgModule({
  declarations: [
    ContactPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactPage),
  ],
  providers: [
    EmailComposer
  ]
})
export class ContactPageModule {}
