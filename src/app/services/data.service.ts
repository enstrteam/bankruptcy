import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  title: string = 'Банкротство физических лиц';

  owner: string = 'ИП Хадисов Вадим Рамилевич';
  phone: string = '+79659408291';

  addressList = [
    {
      city: 'Уфа',
      addresses: [
        {
          address: 'Верхнеторговая площадь, 4',
          phone: '+79659408291',
        },
        {
          address: 'Софьи Перовской, 18',
          phone: '+79659408291',
        },
      ],
    },
    {
      city: 'Учалы',
      addresses: [
        {
          address: 'Ленина, 12',
          phone: '+79659408291',
        },
      ],
    },
  ];

  socialWhatsapp: string = 'https://wa.me/' + this.phone;
  socialTelegram: string = 'https://t.me/' + this.phone;
  socialVK: string = 'http://vk.com';
  
}
