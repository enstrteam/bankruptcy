import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private modalService: ModalService, private dataService: DataService) {

  }

  owner = this.dataService?.owner
  phone = this.dataService.phone
  whatsapp = this.dataService.socialWhatsapp
  telegram = this.dataService.socialTelegram
  vk = this.dataService.socialVK

  date = new Date()
  year = this.date.getFullYear()

  openPrivacy() {
    this.modalService.openModal('modal-2')
  }

}
