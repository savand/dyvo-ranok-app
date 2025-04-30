import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SellItemsService {
  getItems() {
    return [
      {
        cardTitle: 'Півтораспальний комплект',
        imgUrls: [
          'photo/pv/1.jpeg',
          'photo/pv/2.jpeg',
          'photo/pv/3.jpeg',
          'photo/pv/4.jpeg',
          'photo/pv/5.jpeg',
          'photo/pv/6.jpeg',
        ],
        price: '2 795 грн',
        description: [
          'простирадло 200×240см',
          'підковдра 160×220см',
          'наволочка 50×70см — 2 шт',
        ],
      },
      {
        cardTitle: 'Двоспальний комплект',
        imgUrls: [
          'photo/dv/1.jpeg',
          'photo/dv/2.jpeg',
          'photo/dv/3.jpeg',
          'photo/dv/4.jpeg',
          'photo/dv/5.jpeg',
          'photo/dv/6.jpeg',
          'photo/dv/7.jpeg',
        ],
        price: '3 120 грн',
        description: [
          'простирадло 230×260см',
          'підковдра 180×220см',
          'наволочка 50×70см — 2шт',
        ],
      },
      {
        cardTitle: 'Євро',
        imgUrls: [
          'photo/er/2.jpeg',
          'photo/er/3.jpeg',
          'photo/er/4.jpeg',
          'photo/er/5.jpeg',
          'photo/er/6.jpeg',
          'photo/er/7.jpeg',
        ],
        price: '3 445 грн',
        description: [
          'простирадло 240×260см',
          'підковдра 200×220см',
          'наволочка 50×70см — 2шт',
        ],
      },
      {
        cardTitle: 'Сімейний',
        imgUrls: [
          'photo/sm/1.jpeg',
          'photo/sm/2.jpeg',
          'photo/sm/3.jpeg',
          'photo/sm/4.jpeg',
          'photo/sm/5.jpeg',
          'photo/sm/6.jpeg',
        ],
        price: '4 310 грн',
        description: [
          'простирадло 240×260см',
          'підковдра 160×220см — 2шт',
          'наволочка 50×70см — 2шт',
        ],
      },
    ];
  }

  constructor() {}
}
