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

    // Добавляем другие мета-теги для соцсетей и SEO
    this.metaService.addTags([
      { property: 'og:title', content: 'Банкротство физических лиц в Уфе с рассрочкой | Отзывы, Цена и Услуги Юристов' },
      { property: 'og:description', content: 'Банкротство физических лиц в Уфе. Узнайте, как оформить банкротство с рассрочкой, стоимость услуги, отзывы клиентов и профессиональные услуги юристов по банкротству в Уфе.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://ufabankruptcy.ru' }, // Актуальный URL
      { property: 'og:image', content: 'https://ufabankruptcy.ru/preview-image.webp' }, // Путь к изображению для соцсетей
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:site_name', content: 'Банкротство Уфа' },
      { property: 'og:locale', content: 'ru_RU' }, 
    ]);

    this.metaService.addTags([
      { name: 'twitter:card', content: 'summary_large_image' }, // Используем карточку с большим изображением
      { name: 'twitter:title', content: 'Банкротство физических лиц в Уфе с рассрочкой | Отзывы, Цена и Услуги Юристов' },
      { name: 'twitter:description', content: 'Банкротство физических лиц в Уфе. Узнайте, как оформить банкротство с рассрочкой, стоимость услуги, отзывы клиентов и профессиональные услуги юристов по банкротству в Уфе.' },
      { name: 'twitter:image', content: 'https://ufabankruptcy.ru/preview-image.webp' }, // Укажи путь к изображению
      { name: 'twitter:image:alt', content: 'Банкротство физических лиц в Уфе – избавление от долгов с возможностью рассрочки' },
    ]);
  }
}
