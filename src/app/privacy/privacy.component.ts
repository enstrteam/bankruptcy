import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss'],
})
export class PrivacyComponent {

  constructor(private dataService: DataService) {}

  owner = this.dataService?.owner
  ownerSite: string = "https://mysite.com"
  ownerEmail: string = "privacy@mysite.com"


  purpose: string =
    'предоставление доступа Пользователю ксервисам, информации и/или материалам, содержащимся на веб-сайте';
  data: string[] = ['фамилия, имя, отчество', 'номера телефонов'];
  legal: string[] = ['договоры, заключаемые между оператором и субъектом персональных данных'];
  types: string[] = ['Сбор, запись, систематизация, накопление, хранение, уничтожение и обезличивание персональных данных'];


}
