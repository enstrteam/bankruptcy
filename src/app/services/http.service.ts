import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  formSubmit(data: any) {
    return this.http.post('https://43d710f8-465d-4b87-aa63-fdc070ac61a3-00-2j929ouqgf4ph.kirk.replit.dev/telegram', data)
      .pipe(
        catchError(error => {
          console.log(error)
          return throwError(() => new Error('Произошла ошибка при отправке данных'));
        })
      )
  }
}
