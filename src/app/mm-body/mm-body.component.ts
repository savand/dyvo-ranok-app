import { Component } from '@angular/core';
import { SellItemComponent } from './sell-item/sell-item.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutUsSeoComponent } from "./about-us-seo/about-us-seo.component";

@Component({
  selector: 'app-mm-body',
  imports: [SellItemComponent, OrderFormComponent, AboutUsComponent, AboutUsSeoComponent],
  templateUrl: './mm-body.component.html',
  styleUrl: './mm-body.component.scss',
})
export class MmBodyComponent {
  title = 'Варіанти постільної білизни';
}
