import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio-list',
  templateUrl: './radio-list.component.html',
  styleUrls: ['./radio-list.component.scss']
})
export class RadioListComponent {
  @Input() options: any[] = []
  @Input() controlName!: string
  @Input() parentForm!: FormGroup
  @Input() control!: FormControl
  @Input() enableValidation = true
  @Input() formTitle!: string


}
