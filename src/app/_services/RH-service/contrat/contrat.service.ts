import { Injectable } from '@angular/core';
import * as Routes from 'src/Routes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  constructor(private http: HttpClient) {}


  post(formData: FormData): Promise<any> {
    return this.http.post<any>(Routes.CONTRAT, formData).toPromise();
  }

  update(formData: FormData, id): Promise<any> {
    return this.http.post<any>(`${Routes.CONTRAT}/${id}`, formData).toPromise();
  }
  
  delete(id: number) {
    return this.http.delete(`${Routes.CONTRAT}/${id}`).toPromise();

  }
  
  find(id: number): Promise<any> {
    return this.http.get<any>(`${Routes.CONTRAT}/${id}`).toPromise();
  }
  public gets(page) {
    return this.http.get<any>(`${Routes.CONTRAT}?page=${page}`)
      .toPromise();
  }

  public get(url) {
    return this.http.get<any>(`${url}`)
      .toPromise();
  }

  public getTypeContrat() {
    return this.http.get<any>(`${Routes.TYPE_CONTRAT}/types`)
      .toPromise();
  }

  public getUser() {
    return this.http.get<any>(`${Routes.USER}`)
      .toPromise();
  }
}
