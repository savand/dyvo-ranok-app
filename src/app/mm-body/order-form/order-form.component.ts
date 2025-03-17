import { Component } from '@angular/core';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import {
  RECAPTCHA_V3_SITE_KEY,
  RecaptchaLoaderService,
  ReCaptchaV3Service,
} from 'ng-recaptcha-2';
import { BackendService } from '../../backend.service';
import { NgxMaskDirective } from 'ngx-mask';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-order-form',
  imports: [FormsModule, NgxMaskDirective],
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
    userName: '',
    phoneNumber: '',
  };
  sendButtonIsDisabled: boolean = false;
  onClick() {
    if (environment.production) {
      this.recaptchaV3Service
        .execute('send_form')
        .subscribe((token) => this.sendOrder(token));
    } else {
      console.log(
        `The following message would be sent ${JSON.stringify(this.person)}`
      );
    }

    this.sendButtonIsDisabled = true;
  }

  sendOrder(token: string) {
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
