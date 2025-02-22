import { Component } from '@angular/core';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss']
})
export class FeedbacksComponent {


  feedbacks = [
    {
      id: 1,
      name: "Виктор",
      feedback: '“Профессиональная команда, помогли списать долги быстро и без лишних проблем.”',
      url: "../../assets/images/avatar1.jpg"
    },
    {
      id: 2,
      name: "Алина",
      feedback: '"Думала, что банкротство — это сложно, но специалисты все разъяснили и довели дело до конца."',
      url: "../../assets/images/avatar2.jpg"
    },
    {
      id: 3,
      name: "Айдар",
      feedback: '“Теперь живу без долгов! Спасибо за грамотное сопровождение.”',
      url: "../../assets/images/avatar3.jpg"
    },
    {
      id: 4,
      name: "Альбина",
      feedback: '“Ни одного звонка от коллекторов, никакого стресса. Очень довольна работой юристов.”',
      url: "../../assets/images/avatar4.jpg"
    },

  ]

}
