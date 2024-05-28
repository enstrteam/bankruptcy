import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  benefitsList = [
    "задолженность замораживается и перестает расти",
    "больше не нужно ежемесячно оплачивать долги",
    "больше не нужно общаться с кредиторами",
    "исполнительные производства приостанавливаются или прекращаются",
    "все судебные дела останавливаются и объединяются с процедурой банкротства"
  ]

  benefitsList2 = [
    "пользоваться вашими деньгами в полном объеме и не нужно их скрывать",
    "совершать любые сделки",
    "взять кредит",
    "начать бизнес"
  ]

  advantages = [
    {
      title: "Опыт и профессионализм", 
      text: "Работаем в области банкротства физических лиц с 2008 года, сотрудничаем с классными юристами и финансовыми управляющими, которые помогут в непростой ситуации."
    },
    {
      title: "Доступность", 
      text: "Предлагаем услуги дешевле, и в рассрочку. Подберем удобный способ оплаты."
    },
    {
      title: "Быстрое решение проблем", 
      text: "Время важно для наших клиентов, поэтому стараемся быстро решать возникающие проблемы."
    },
    {
      title: "Конфиденциальность", 
      text: "Гарантируем, что не передаём информацию о процедуре банкротства другим без согласия клиента."
    },
    {
      title: "Индивидуальный подход", 
      text: "Готовы рассмотреть каждую ситуацию, учитывая особенности и потребности клиента."
    },
    {
      title: "Гарантия результата", 
      text: "Уверены в себе и гарантируем положительный результат процедуры банкротства. Если не получится, вернем деньги."
    },
  ]

  facts = [
    {
      number: "2",
      caption: "миллиарда",
      text: "списанных долгов"
    },
    {
      number: "10",
      caption: "лет",
      text: "опыта работы"
    },
    {
      number: "800",
      caption: "дел",
      text: "завершено"
    },
  ]

  feedbacks = [
    {
      id: 1,
      name: "Виктор",
      feedback: '“Я очень доволен работой вашей компании. Все было сделано быстро и профессионально”',
      url: "../../assets/images/avatar1.jpg"
    },
    {
      id: 2,
      name: "Алина",
      feedback: '"Ваша компания - настоящий профессионал в своем деле"',
      url: "../../assets/images/avatar2.jpg"
    },
    {
      id: 3,
      name: "Айдар",
      feedback: '“Спасибо вам! Вы спасли меня”',
      url: "../../assets/images/avatar3.jpg"
    },
    {
      id: 4,
      name: "Альбина",
      feedback: '“Вы сэкономили мне много времени и денег, спасибо!”',
      url: "../../assets/images/avatar4.jpg"
    },

  ]

}
