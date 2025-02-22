import { Component } from '@angular/core';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.scss']
})
export class FactsComponent {

  facts = [
    {
      number: "2",
      caption: "миллиарда",
      text: "списанных долгов"
    },
    {
      number: "10",
      caption: "лет",
      text: "помогаем людям избавиться от долгов"
    },
    {
      number: "800",
      caption: "дел",
      text: "успешно доведено до полного списания долгов"
    },
  ]
}
