import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Routes from '../../../../Routes'; 

@Injectable({
  providedIn: 'root'
})
export class DocService {

  constructor(
    private http: HttpClient,
  ) { }

  addAssurance(formData: FormData): Promise<any> {
    return this.http.post<any>(`${Routes.ASSURANCE}`, formData).toPromise();
  }

  addOfficialPaper(formData: FormData): Promise<any> {
    return this.http.post<any>(`${Routes.OFFICIALPAPER}`, formData).toPromise();
  }

  addType(formData: FormData): Promise<any> {
    return this.http.post<any>(`${Routes.TYPEFICHE}`, formData).toPromise();
  }

  getElementIntervenant(): Promise<any> {
    return this.http.get<any>(`${Routes.ELEMENTINTERVENANT}`).toPromise();
  }

  getVehicule(): Promise<any> {
    return this.http.get<any>(`${Routes.VEHICULE}`).toPromise();
  }

  allType(): Promise<any> {
    return this.http.get<any>(`${Routes.TYPEFICHE}`).toPromise();
  }

  allAssurance(): Promise<any> {
    return this.http.get<any>(`${Routes.ASSURANCE}`).toPromise();
  }

  allOfficialPaper(): Promise<any> {
    return this.http.get<any>(`${Routes.OFFICIALPAPER}`).toPromise();
  }

  getPage(url){
    return this.http.get<any>(`${url}`).toPromise();
  }


  updateType(formData: FormData, id): Promise<any> {
    return this.http.post<any>(`${Routes.TYPEFICHE}/${id}`, formData).toPromise();
  }

  updateAssurance(formData: FormData, id): Promise<any> {
    return this.http.post<any>(`${Routes.ASSURANCE}/${id}`, formData).toPromise();
  }


  updateOfficialPaper(formData: FormData, id): Promise<any> {
    return this.http.post<any>(`${Routes.OFFICIALPAPER}/${id}`, formData).toPromise();
  }

  findType( id): Promise<any> {
    return this.http.get<any>(`${Routes.TYPEFICHE}/${id}`).toPromise();
  }

  findOfficialPapaer(id): Promise<any> {
    return this.http.get<any>(`${Routes.OFFICIALPAPER}/${id}`).toPromise();
  }

  findAssurance( id): Promise<any> {
    return this.http.get<any>(`${Routes.ASSURANCE}/${id}`).toPromise();
  }
  
  deleteType( id): Promise<any> {
    return this.http.delete<any>(`${Routes.TYPEFICHE}/${id}`).toPromise();
  }

  deleteOfficialPaper( id): Promise<any> {
    return this.http.delete<any>(`${Routes.OFFICIALPAPER}/${id}`).toPromise();
  }

  deleteAssurance( id): Promise<any> {
    return this.http.delete<any>(`${Routes.ASSURANCE}/${id}`).toPromise();
  }
}
