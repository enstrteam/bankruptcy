import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  
  ngOnInit(): void {

    window.addEventListener("orientationchange", () => {
      if (this.isActive) {
        this.toggleMenu()
      }
    })
  }

  menu =[
    {
      link: "#bankruptcy",
      title: "О банкротстве",
    },  
    {
      link: "#about",
      title: "О нас",
    },  
    {
      link: "#feedback",
      title: "Отзывы",
    },  
    {
      link: "#calc",
      title: "Калькулятор",
    },  
    {
      link: "#contacts",
      title: "Контакты",
    },  
  ]

  isActive: boolean = false

  toggleMenu() {
    if (!this.isActive) {
      document.getElementById("menu")?.classList.add("nav__menu_active")
      document.getElementsByTagName("body")[0].classList.add("locked")
      this.isActive = true
    }
    else {
      document.getElementById("menu")?.classList.remove("nav__menu_active")
      document.getElementsByTagName("body")[0].classList.remove("locked")
      this.isActive = false
    }
  }

}
