import { Injectable } from '@angular/core';
import * as Routes from 'src/Routes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteCritiqueService {

  constructor(private http: HttpClient) {}


  post(formData: FormData): Promise<any> {
    return this.http.post<any>(Routes.NOTECRITIQUE, formData).toPromise();
  }

  update(formData: FormData, id): Promise<any> {
    return this.http.post<any>(`${Routes.NOTECRITIQUE}/${id}`, formData).toPromise();
  }
  
  delete(id: number) {
    return this.http.delete(`${Routes.NOTECRITIQUE}/${id}`).toPromise();

  }
  
  find(id: number): Promise<any> {
    return this.http.get<any>(`${Routes.NOTECRITIQUE}/${id}`).toPromise();
  }
  public gets(page) {
    return this.http.get<any>(`${Routes.NOTECRITIQUE}?page=${page}`)
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
}
