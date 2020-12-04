import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Routes from '../../../../Routes'; 

@Injectable({
  providedIn: 'root'
})
export class InterveningElementService {

  constructor(private http: HttpClient) {}

  async post(formData): Promise<any> {
    return await this.http.post(Routes.ELEMENTINTERVENANT, formData).toPromise();
  }

  public async put(id: number, formData): Promise<any> {
    return await this.http
        .post(`${Routes.ELEMENTINTERVENANT}/${id}`, formData)
        .toPromise();
  }

  public gets(page) {
    return this.http.get<any>(`${Routes.ELEMENTINTERVENANT}?page=${page}`)
      .toPromise();
  }

  public get(url) {
    return this.http.get<any>(`${url}`)
      .toPromise();
  }

  public async delete(id) {
    return await this.http
        .delete(`${Routes.ELEMENTINTERVENANT}/${id}`)
        .toPromise();
  }


  public getTypes(limit = 1000) {
    return this.http.get<any>(`${Routes.TYPEINTERVENANT}?limit=${limit}`)
      .toPromise();
  }


  find(id:number): Promise<any>{
    return this.http.get<any>(`${Routes.ELEMENTINTERVENANT}/${id}`).toPromise();
  }
}
