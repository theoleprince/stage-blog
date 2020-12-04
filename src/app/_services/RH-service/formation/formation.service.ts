import { Injectable } from '@angular/core';
import * as Routes from 'src/Routes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http: HttpClient) {}


  post(formData: FormData): Promise<any> {
    return this.http.post<any>(Routes.FORMATION, formData).toPromise();
  }

  update(formData: FormData, id): Promise<any> {
    return this.http.post<any>(`${Routes.FORMATION}/${id}`, formData).toPromise();
  }
  
  delete(id: number) {
    return this.http.delete(`${Routes.FORMATION}/${id}`).toPromise();

  }
  
  find(id: number): Promise<any> {
    return this.http.get<any>(`${Routes.FORMATION}/${id}`).toPromise();
  }
  public gets(page) {
    return this.http.get<any>(`${Routes.FORMATION}?page=${page}`)
      .toPromise();
  }

  public get(url) {
    return this.http.get<any>(`${url}`)
      .toPromise();
  }

  public getUser() {
    return this.http.get<any>(`${Routes.USER}`)
      .toPromise();
  }

  public getDriver() {
    return this.http.get<any>(`${Routes.DRIVERALL}`)
      .toPromise();
  }
}
