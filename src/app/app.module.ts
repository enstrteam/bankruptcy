import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { NavComponent } from './nav/nav.component';
import { BankruptcyComponent } from './bankruptcy/bankruptcy.component';
import { CalcComponent } from './calc/calc.component';
import { RadioListComponent } from './radio-list/radio-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './modal/modal.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';
import { BenefitsComponent } from './benefits/benefits.component';
import { StagesComponent } from './stages/stages.component';
import { AboutComponent } from './about/about.component';
import { FactsComponent } from './facts/facts.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NavComponent,
    BankruptcyComponent,
    CalcComponent,
    RadioListComponent,
    ModalComponent,
    ContactsComponent,
    FooterComponent,
    PrivacyComponent,
    BenefitsComponent,
    StagesComponent,
    AboutComponent,
    FactsComponent,
    FeedbacksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularYandexMapsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
