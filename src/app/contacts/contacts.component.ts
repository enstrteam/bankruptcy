import { Component } from '@angular/core';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  constructor(private dataService: DataService) {}

  map?: ymaps.Map

  state: ymaps.IMapState = {
    controls: [
      'zoomControl',
      'fullscreenControl'
    ]
  }

  properties: ymaps.IPlacemarkProperties = {
    iconCaption: "Банкротство тут",
    balloonContent: "Верхнеторговая площадь, 4"
  }

  addressList = this.dataService.addressList

  phoneFormatter(phone: string): string {
    return '8 ' +
    phone.slice(2, 5) +
    ' ' +
    phone.slice(5, 8) +
    '-' +
    phone.slice(8, 10) +
    '-' +
    phone.slice(10, 12)
  }

}
