import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SellItemsService {
  getItems() {
    return [
      {
        cardTitle: 'Півтораспальний комплект',
        imgUrl: 'photo/mimimi.jpg',
        price: '2 600 грн',
        description: [
          'простирадло 200х240(з урахуванням висоти матрацу)',
          'підковдра 160х220',
          'наволочка 50х70 або 70х70 (за бажанням) 2 шт',
        ],
      },
      {
        cardTitle: 'Двоспальний комплект',
        imgUrl: 'photo/canvas.jpg',
        price: '2 850 грн',
        description: [
          'простирадло 230х260(з урахуванням висоти матрацу)',
          'підковдра 180х220',
          'наволочка 50х70 або 70х70 (за бажанням) 2шт',
        ],
      },
      {
        cardTitle: 'Євро',
        imgUrl: 'photo/pack.jpg',
        price: '3 200 грн',
        description: [
          'простирадло 240х260(з урахуванням висоти матрацу)',
          'підковдра 200х220',
          'наволочка 50х70 або 70х70 (за бажанням) 2шт',
        ],
      },
    ];
  }

  constructor() {}
}
