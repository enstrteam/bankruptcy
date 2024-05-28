import { Injectable } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modals: ModalComponent[] = []

  constructor() { 
    
  }

  add(modal: ModalComponent) {
    if (!modal.id || this.modals.find(x => x.id === modal.id)) {
      throw new Error("ModalID is not unique")
    }
    this.modals.push(modal)
  }

  remove(modal: ModalComponent) {
    this.modals = this.modals.filter(x => x !== modal)
  }

  openModal(id: string): void {
    const modal = this.modals.find(x => x.id === id)
    modal?.open()
  }

  closeModal(): void {
    const modal = this.modals.find(x => x.isOpen)
    modal?.close()
  }
}
