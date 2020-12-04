import { Injectable } from '@angular/core';
import * as Routes from 'src/Routes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChauffeurService {

  constructor(private http: HttpClient) {}


  post(formData: FormData): Promise<any> {
    return this.http.post<any>(Routes.CHAUFFEUR, formData).toPromise();
  }

  update(formData: FormData, id): Promise<any> {
    return this.http.post<any>(`${Routes.CHAUFFEUR}/${id}`, formData).toPromise();
  }
  
  delete(id: number) {
    return this.http.delete(`${Routes.CHAUFFEUR}/${id}`).toPromise();

  }
  
  find(id: number): Promise<any> {
    return this.http.get<any>(`${Routes.CHAUFFEUR}/${id}`).toPromise();
  }
  public gets(page) {
    return this.http.get<any>(`${Routes.CHAUFFEUR}?page=${page}`)
      .toPromise();
  }

  public get(url) {
    return this.http.get<any>(`${url}`)
      .toPromise();
  }

  public getFormation() {
    return this.http.get<any>(`${Routes.FORMATION}`)
      .toPromise();
  }

  public getUser() {
    return this.http.get<any>(`${Routes.USER}`)
      .toPromise();
  }
}
