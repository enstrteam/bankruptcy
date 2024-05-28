import { Component, Input, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent {

  @Input() id?: string
  isOpen: boolean = false


  constructor(public modalService: ModalService) {
    
  }

  ngOnInit() {
    this.modalService.add(this)

    

    window.addEventListener('click', (event: any) => {
      if ( event.target.className === 'modal modal_active') {
        this.close()
      }
    })

  }

  ngOnDestroy() {
    this.modalService.remove(this)
  }

  open() {
    document.body.classList.add("body__modal")
    this.isOpen = true
    console.log('Opening')
    console.log('isOpen:',this.isOpen)
  }

  close() {
    document.body.classList.remove("body__modal")
    this.isOpen = false
  }
  
}
