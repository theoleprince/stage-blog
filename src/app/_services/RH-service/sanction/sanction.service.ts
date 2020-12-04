import { Injectable } from '@angular/core';
import * as Routes from 'src/Routes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SanctionService {

  constructor(private http: HttpClient) {}


  post(formData: FormData): Promise<any> {
    return this.http.post<any>(Routes.SANCTION, formData).toPromise();
  }

  update(formData: FormData, id): Promise<any> {
    return this.http.post<any>(`${Routes.SANCTION}/${id}`, formData).toPromise();
  }
  
  delete(id: number) {
    return this.http.delete(`${Routes.SANCTION}/${id}`).toPromise();

  }
  
  find(id: number): Promise<any> {
    return this.http.get<any>(`${Routes.SANCTION}/${id}`).toPromise();
  }
  public gets(page) {
    return this.http.get<any>(`${Routes.SANCTION}?page=${page}`)
      .toPromise();
  }

  public get(url) {
    return this.http.get<any>(`${url}`)
      .toPromise();
  }

  public getTypeSanction() {
    return this.http.get<any>(`${Routes.TYPE_SANCTION}/types`)
      .toPromise();
  }

  public getUser() {
    return this.http.get<any>(`${Routes.USER}`)
      .toPromise();
  }
}
