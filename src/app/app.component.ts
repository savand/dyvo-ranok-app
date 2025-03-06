import { Component } from '@angular/core';
import { MmHeadComponent } from "./mm-head/mm-head.component";
import { MmFooterComponent } from "./mm-footer/mm-footer.component";
import { MmBodyComponent } from "./mm-body/mm-body.component";

@Component({
  selector: 'app-root',
  imports: [ MmHeadComponent, MmBodyComponent, MmFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dyvo-ranok-app';
}
