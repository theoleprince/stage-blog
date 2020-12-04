import { HttpClient } from '@angular/common/http';
import * as Routes from '../../../Routes'; 
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) { }

  upload(formData: FormData): Promise<any> {
    return this.http.post<any>(Routes.DOCUMENT, formData).toPromise();
  }

  generate(formData: FormData): Promise<any> {
    return this.http.post<any>(`${Routes.DOCUMENT}/generate`, formData).toPromise();
  }

  list(page): Promise<any> {
    return this.http.get<any>(`${Routes.DOCUMENT}?page=${page}`).toPromise();
  }


  public get(url) {
    return this.http.get<any>(`${url}`)
      .toPromise();
  }

  delete(id:number){
    return this.http.delete(`${Routes.DOCUMENT}/${id}`).toPromise();
  }

  downloadFile(id:number){
    return this.http.get<any>(`${Routes.DOCUMENT}/download/${id}`).toPromise();
  }
}
