import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  RECAPTCHA_V3_SITE_KEY,
  RecaptchaLoaderService,
  ReCaptchaV3Service,
} from 'ng-recaptcha-2';
import { BackendService } from '../../backend.service';

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
    BackendService,
  ],
})
export class OrderFormComponent {
  person = {
    userName: null,
    phoneNumber: null,
  };
  sendButtonIsDisabled: boolean = false;
  onClick() {
    this.recaptchaV3Service
      .execute('send_form')
      .subscribe((token) => this.handleToken(token));
    this.sendButtonIsDisabled = true;
  }

  handleToken(token: string) {
    this.backendService
      .sendOrderApplianceDromForm(token, this.person)
      .subscribe({
        next: (response) => {
          alert(
            `Ваше замовлення прийнято, ${this.person.userName}. Ближчим часом з Вами зв'яжеться наш менеджер для уточнення деталей`
          );
        },
        error: (error) => console.error('Error:', error),
      });
  }

  constructor(
    private recaptchaV3Service: ReCaptchaV3Service,
    private backendService: BackendService
  ) {}
}
