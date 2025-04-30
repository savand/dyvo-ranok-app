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
          'photo/mimimi.jpg',
          'photo/canvas-min.png',
          'photo/pack-min.jpg',
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
          'photo/mimimi.jpg',
          'photo/canvas-min.png',
          'photo/pack-min.jpg',
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
          'photo/mimimi.jpg',
          'photo/canvas-min.png',
          'photo/pack-min.jpg',
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
          'photo/mimimi.jpg',
          'photo/canvas-min.png',
          'photo/pack-min.jpg',
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
