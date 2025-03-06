import { SellItemsService } from './../../sell-items.service';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sell-item',
  imports: [NgFor],
  templateUrl: './sell-item.component.html',
  styleUrl: './sell-item.component.scss',
  providers: [SellItemsService],
})
export class SellItemComponent {
  items: any[];

  constructor(private service: SellItemsService) {
    this.items = this.service.getItems();
  }
}
