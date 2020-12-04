import { Injectable } from '@angular/core';
import * as Routes from 'src/Routes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TypeContratService {

  constructor(private http: HttpClient) {}


  post(formData: FormData): Promise<any> {
    return this.http.post<any>(Routes.TYPE_CONTRAT, formData).toPromise();
  }

  update(formData: FormData, id): Promise<any> {
    return this.http.post<any>(`${Routes.TYPE_CONTRAT}/${id}`, formData).toPromise();
  }
  
  delete(id: number) {
    return this.http.delete(`${Routes.TYPE_CONTRAT}/${id}`).toPromise();

  }
  
  find(id: number): Promise<any> {
    return this.http.get<any>(`${Routes.TYPE_CONTRAT}/${id}`).toPromise();
  }
  public gets(page) {
    return this.http.get<any>(`${Routes.TYPE_CONTRAT}?page=${page}`)
      .toPromise();
  }

  public get(url) {
    return this.http.get<any>(`${url}`)
      .toPromise();
  }
}
