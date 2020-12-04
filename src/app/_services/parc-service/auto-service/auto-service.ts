import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Routes from '../../../../Routes'; 
//import { AutoAdd } from '../../../_models';

@Injectable({
  providedIn: 'root'
})
export class AutoService {
   
  constructor( private http: HttpClient) { }
    
  add(formData: FormData): Promise<any> {
    return this.http.post<any>(`${Routes.AUTO}`, formData).toPromise();
  }

  all(): Promise<any> {
    return this.http.get<any>(`${Routes.AUTO}`).toPromise();
  }


  update(formData: FormData, id): Promise<any> {
    return this.http.post<any>(`${Routes.AUTO}/${id}`, formData).toPromise();
  }

  find( id): Promise<any> {
    return this.http.get<any>(`${Routes.AUTO}/${id}`).toPromise();
  }
  
  delete(id): Promise<any> {
    return this.http.delete<any>(`${Routes.AUTO}/${id}`).toPromise();
  } 

  listMarque(): Promise<any> {
    return this.http.get<any>(`${Routes.MARQUEAUTO}`).toPromise();
  } 
   
  listModele(): Promise<any> {
    return this.http.get<any>(`${Routes.MODELEAUTO}`).toPromise();
  } 
   
  listType(): Promise<any> {
    return this.http.get<any>(`${Routes.TYPEAUTO}`).toPromise();
  } 
   
  listCarosserie(): Promise<any> {
    return this.http.get<any>(`${Routes.CAROSSERIEAUTO}`).toPromise();
  } 
   
  getFormes(id): Promise<any> {
    return this.http.get<any>(`${Routes.FORM}/${id}`).toPromise();
  }
   

}
