import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Routes from '../../../../Routes';

@Injectable({
  providedIn: 'root'
})
export class ParamService {


  constructor(private http: HttpClient,) { }


  addForm(formData: FormData): Promise<any> {
    return this.http.post<any>(Routes.FORM, formData).toPromise();
  }


  updateForm(formData: FormData, id: number): Promise<any> {
    return this.http.post<any>(`${Routes.FORM}/${id}`, formData).toPromise();
  }

  getForm(): Promise<any> {
    return this.http.get<any>(Routes.FORM).toPromise();
  }


  findForm(id: number): Promise<any> {
    return this.http.get<any>(`${Routes.FORM}/${id}`).toPromise();
  }

  deleteForm(id: number): Promise<any> {
    return this.http.delete<any>(`${Routes.FORM}/${id}`).toPromise();
  }

  selectForm(code: string): Promise<any> {
    return this.http.get<any>(`${Routes.FORM}/${code}/code`).toPromise();
  }

}


