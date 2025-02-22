import { Component, OnInit, OnDestroy, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit, OnDestroy {
  @ViewChild('menuElement', { static: true }) menuElementRef!: ElementRef;

  constructor(private renderer: Renderer2) {}

  menu = [
    { link: "#bankruptcy", title: "О банкротстве" },
    { link: "#about", title: "О нас" },
    { link: "#feedback", title: "Отзывы" },
    { link: "#calc", title: "Калькулятор" },
    { link: "#contacts", title: "Контакты" },
  ];

  isActive: boolean = false;
  private orientationChangeListener: (() => void) | undefined;

  ngOnInit(): void {
    this.orientationChangeListener = this.renderer.listen('window', 'orientationchange', () => {
      if (this.isActive) {
        this.toggleMenu();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.orientationChangeListener) {
      this.orientationChangeListener();
    }
  }

  toggleMenu(): void {
    const menuElement = this.menuElementRef.nativeElement;
    const bodyElement = document.body;

    if (!this.isActive) {
      this.renderer.addClass(menuElement, "nav__menu_active");
      this.renderer.addClass(bodyElement, "locked");
      this.isActive = true;
    } else {
      this.renderer.removeClass(menuElement, "nav__menu_active");
      this.renderer.removeClass(bodyElement, "locked");
      this.isActive = false;
    }
  }
}