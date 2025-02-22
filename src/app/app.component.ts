import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // Заголовок страницы
  title = 'Банкротство физических лиц в Уфе - Помощь с долговыми обязательствами';

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.setSEO();
  }

  setSEO(): void {
    this.titleService.setTitle('Банкротство физических лиц в Уфе с рассрочкой | Отзывы, Цена и Услуги Юристов');
    
    this.metaService.updateTag({
      name: 'description',
      content: 'Банкротство физических лиц в Уфе. Узнайте, как оформить банкротство с рассрочкой, стоимость услуги, отзывы клиентов и профессиональные услуги юристов по банкротству в Уфе.'
    });

    this.metaService.updateTag({
      name: 'author',
      content: 'Юристы по банкротству физических лиц'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: 'банкротство уфа, банкротство физических лиц уфа, банкротство с рассрочкой, цена банкротства уфа, отзывы банкротство, юристы по банкротству, банкротство долгов, адвокат по банкротству физических лиц'
    });

    this.metaService.addTags([
      { property: 'og:title', content: 'Банкротство физических лиц в Уфе с рассрочкой | Отзывы, Цена и Услуги Юристов' },
      { property: 'og:description', content: 'Банкротство физических лиц в Уфе. Узнайте, как оформить банкротство с рассрочкой, стоимость услуги, отзывы клиентов и профессиональные услуги юристов по банкротству в Уфе.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://ufabankruptcy.ru' }, 
      { property: 'og:image', content: 'https://ufabankruptcy.ru/assets/images/preview-image.webp' }, 
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:site_name', content: 'Банкротство Уфа' },
      { property: 'og:locale', content: 'ru_RU' }, 
    ]);

    this.metaService.addTags([
      { name: 'twitter:card', content: 'summary_large_image' }, 
      { name: 'twitter:title', content: 'Банкротство физических лиц в Уфе с рассрочкой | Отзывы, Цена и Услуги Юристов' },
      { name: 'twitter:description', content: 'Банкротство физических лиц в Уфе. Узнайте, как оформить банкротство с рассрочкой, стоимость услуги, отзывы клиентов и профессиональные услуги юристов по банкротству в Уфе.' },
      { name: 'twitter:image', content: 'https://ufabankruptcy.ru/assets/images/preview-image.webp' }, 
      { name: 'twitter:image:alt', content: 'Банкротство физических лиц в Уфе – избавление от долгов с возможностью рассрочки' },
    ]);
  }
}
