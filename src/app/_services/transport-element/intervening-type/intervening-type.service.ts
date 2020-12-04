import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Routes from '../../../../Routes'; 

@Injectable({
  providedIn: 'root'
})
export class InterveningTypeService {

  constructor(private http: HttpClient) {}

  async post(formData): Promise<any> {
    return await this.http.post(Routes.TYPEINTERVENANT, formData).toPromise();
  }

  public async put(id: number, formData): Promise<any> {
    return await this.http
        .post(`${Routes.TYPEINTERVENANT}/${id}`, formData)
        .toPromise();
  }

  public gets(page) {
    return this.http.get<any>(`${Routes.TYPEINTERVENANT}?page=${page}`)
      .toPromise();
  }

  public get(url) {
    return this.http.get<any>(`${url}`)
      .toPromise();
  }

  public async delete(id) {
    return await this.http
        .delete(`${Routes.TYPEINTERVENANT}/${id}`)
        .toPromise();
  }

  find(id:number): Promise<any>{
    return this.http.get<any>(`${Routes.TYPEINTERVENANT}/${id}`).toPromise();
  }
}
