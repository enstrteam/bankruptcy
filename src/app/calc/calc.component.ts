import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { SurveyInterface } from './calc.interface';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpService } from '../services/http.service';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss'],
})
export class CalcComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    private modalService: ModalService
  ) {
    this.form = this.fb.group({
      debt_type: ['Кредиты', Validators.required],
      debt_delay: ['Более 3-х месяцев', Validators.required],
      debt_property: ['Квартира (Дом)', Validators.required],
      debt_amount: ['300 - 500 тыс.', Validators.required],
      debt_mortgage_or_car_loan: ['Ипотека', Validators.required],
      name: ['', [Validators.required, Validators.minLength(2)]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^89[0-9]{9}$|^\+79[0-9]{9}$/),
        ],
      ],
      privacy: [false, Validators.requiredTrue],
    });
  }

  ngOnInit() {}

  survey: SurveyInterface[] = [
    {
      id: 1,
      name: 'debt_type',
      title: 'Какая у вас задолженность?',
      list: [
        'Кредиты',
        'ЖКХ',
        'Долги по расписке',
        'Микрозаймы',
        'Налоги',
        'Другое',
      ],
    },
    {
      id: 2,
      name: 'debt_delay',
      title: 'Есть ли просрочки по оплате?',
      list: ['Нет', 'Менее 3-х месяцев', 'Более 3-х месяцев'],
    },
    {
      id: 3,
      name: 'debt_property',
      title: 'Какое имущество есть в собственности?',
      list: [
        'Квартира (Дом)',
        'Дача',
        'Участок',
        'Автомобиль',
        'Нет имущества',
      ],
    },
    {
      id: 4,
      name: 'debt_amount',
      title: 'Размер вашей задолженности?',
      list: [
        'до 300 тыс.',
        '500 тыс. - 1 млн',
        'более 3 млн.',
        '300 - 500 тыс.',
        '1 - 3 млн.',
      ],
    },
    {
      id: 5,
      name: 'debt_mortgage_or_car_loan',
      title: 'Есть ли у вас ипотека или автокредит?',
      list: ['Нет', 'Ипотека', 'Автокредит'],
    },
  ];

  get debt_type_control(): FormControl {
    return this.form.get('debt_type') as FormControl;
  }
  get debt_delay_control(): FormControl {
    return this.form.get('debt_delay') as FormControl;
  }
  get debt_property_control(): FormControl {
    return this.form.get('debt_property') as FormControl;
  }
  get debt_amount_control(): FormControl {
    return this.form.get('debt_amount') as FormControl;
  }
  get debt_mortgage_or_car_loan_control(): FormControl {
    return this.form.get('debt_mortgage_or_car_loan') as FormControl;
  }
  get nameControl(): FormControl {
    return this.form.get('name') as FormControl;
  }
  get phoneControl(): FormControl {
    return this.form.get('phone') as FormControl;
  }
  get privacyControl(): FormControl {
    return this.form.get('privacy') as FormControl;
  }

  currentIndex: number = 0;

  isFirstForm(): boolean {
    return this.currentIndex === 0;
  }

  isLastForm(): boolean {
    return this.currentIndex === this.survey.length;
  }

  buttonVisibilityToggle() {
    if (this.isFirstForm()) {
      document
        .getElementById('button-prev')
        ?.classList.add('survey__button_hidden');
    } else {
      document
        .getElementById('button-prev')
        ?.classList.remove('survey__button_hidden');
    }
  }

  scrollToPrev() {
    const prevIndex = this.isFirstForm() ? 0 : this.currentIndex - 1;
    this.scrollToForm(prevIndex);
  }

  scrollToNext() {
    if (this.isLastForm()) {
      this.onSubmit();
    } else {
      const nextIndex = this.currentIndex + 1;
      this.scrollToForm(nextIndex);
    }
  }

  scrollToForm(index: number) {
    const form = document.getElementById((index + 1).toString());
    form?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    this.currentIndex = index;
    this.buttonVisibilityToggle();
  }

  onSubmit() {
    if (this.form.valid) {
      const debt: any[] = [
        'debt_type',
        'debt_delay',
        'debt_property',
        'debt_amount',
        'debt_mortgage_or_car_loan',
        'name',
        'phone',
      ];

      this.httpService.formSubmit(this.form.value).subscribe({
        next: (value) => {
          console.log(value);
          this.modalService.openModal(
            'modal-1',
            'Спасибо за заявку!<br>Мы свяжемся с вами в ближайшее время.',
            true
          );
        },
        error: (error) => {
          console.log('Ошибка при отправке формы:', error);
          this.modalService.openModal(
            'modal-1',
            'Произошла ошибка при отправке формы.',
            false
          );
        },
      });
    } else {
      console.log(this.form.status);
    }
  }
}
