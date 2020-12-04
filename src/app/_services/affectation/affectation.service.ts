import { Injectable } from '@angular/core';
import * as Routes from 'src/Routes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AffectationService {
  constructor(private http: HttpClient) {}

  postaff(formData: FormData): Promise<any> {
    return this.http.post<any>(Routes.AFFECTATION, formData).toPromise();
  }

  updateaff(formData: FormData, id): Promise<any> {
    return this.http.post<any>(`${Routes.AFFECTATION}/${id}`, formData).toPromise();
  }
  
  deleteaff(id: number) {
    return this.http.delete(`${Routes.AFFECTATION}/${id}`).toPromise();

  }
  
  findaff(id: number): Promise<any> {
    return this.http.get<any>(`${Routes.AFFECTATION}/${id}`).toPromise();
  }
  public gets(page) {
    return this.http.get<any>(`${Routes.AFFECTATION}?page=${page}`)
      .toPromise();
  }

  public get(url) {
    return this.http.get<any>(`${url}`)
      .toPromise();
  }
  public getbynamedriver(nameDriver: string) {
    return this.http.get<any>(`${Routes.AFFECTATION}/${nameDriver}/namedriver`)
      .toPromise();
  }

  public getdriver() {
    return this.http.get<any>(`${Routes.DRIVERALL}`)
      .toPromise();
  }
  public getvehicle() {
    return this.http.get<any>(`${Routes.VEHICULEALL}`)
      .toPromise();
  }
  public findvehicledriver(id: number) {
    return this.http.get<any>(`${Routes.AFFECTATION}/${id}/driver`)
      .toPromise();
  }
}
