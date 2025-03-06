import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  RECAPTCHA_V3_SITE_KEY,
  RecaptchaLoaderService,
  ReCaptchaV3Service,
} from 'ng-recaptcha-2';

@Component({
  selector: 'app-order-form',
  imports: [FormsModule],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.scss',
  providers: [
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: '6Lc5A-gqAAAAAEDGWWc13Q0Qb2i16SRtExPB4eor',
    },
    RecaptchaLoaderService,
    ReCaptchaV3Service,
  ],
})
export class OrderFormComponent {
  person = {
    userName: null,
    phoneNumber: null,
  };
  onClick() {
    this.recaptchaV3Service
      .execute('send_form')
      .subscribe((token) => this.handleToken(token));
  }

  handleToken(token: string) {
    //1) add logic of handling token on backend side and sending the form
    //2) response from the server should be false (with error reasons specidied) or true
    //3) finally show popup for user with form sending results
  }

  constructor(private recaptchaV3Service: ReCaptchaV3Service) {}
}
