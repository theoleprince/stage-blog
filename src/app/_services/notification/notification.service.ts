import { Injectable } from '@angular/core';
import * as Routes from 'src/Routes';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private http: HttpClient) {}

  posttype(formData: FormData): Promise<any> {
    return this.http.post<any>(Routes.TYPENOTIFICATION, formData).toPromise();
  }

  updatetype(formData: FormData, id): Promise<any> {
    return this.http.post<any>(`${Routes.TYPENOTIFICATION}/${id}`, formData).toPromise();
  }
  
  deletetype(id: number) {
    return this.http.delete(`${Routes.TYPENOTIFICATION}/${id}`).toPromise();

  }
  
  findtype(id: number): Promise<any> {
    return this.http.get<any>(`${Routes.TYPENOTIFICATION}/${id}`).toPromise();
  }
  public getstype(page) {
    return this.http.get<any>(`${Routes.TYPENOTIFICATION}?page=${page}`)
      .toPromise();
  }

  public gettype(url) {
    return this.http.get<any>(`${url}`)
      .toPromise();
  }

  /* 
    services pour la creation d'une notification et listing
  */

  postnotif(formData: FormData): Promise<any> {
    return this.http.post<any>(Routes.NOTIFICATION, formData).toPromise();
  }
  deletenotif(id: number) {
    return this.http.delete(`${Routes.NOTIFICATION}/${id}`).toPromise();
  }
  public getsnotif(page) {
    return this.http.get<any>(`${Routes.NOTIFICATION}?page=${page}`)
      .toPromise();
  }

  public getnotif(url) {
    return this.http.get<any>(`${url}`)
      .toPromise();
  }

  public getnotification() {
    return this.http.get<any>(`${Routes.TYPENOTIFICATION}/all`)
      .toPromise();
  }

  /* 
    service de notification pour lister les notifs lu ou non
  */

    //compter les notifications non lu d'un utilisateur

    public getsCount(user_id: number) {
      return this.http.get<any>(`${Routes.NOTIFICATION}/${user_id}/nbrNotifNonLuUser`)
        .toPromise();
    }
    //lister les notifications non lu d'un utilisateur

    public getsNonLu(user_id: number, page) {
      return this.http.get<any>(`${Routes.NOTIFICATION}/${user_id}/notifNonLuUser?page=${page}`)
        .toPromise();
    }
  
    public getNonLu(url) {
      return this.http.get<any>(`${url}`)
        .toPromise();
    }
    //lister les notifications lu par un utilisateur
    public getsLu(user_id: number, page) {
      return this.http.get<any>(`${Routes.NOTIFICATION}/${user_id}/notifLuUser?page=${page}`)
        .toPromise();
    }
  
    public getLu(url) {
      return this.http.get<any>(`${url}`)
        .toPromise();
    }

    //lister l'ensemble des notifications d'un utilisateur

    public getsNotifUser(user_id: number, page) {
      return this.http.get<any>(`${Routes.NOTIFICATION}/${user_id}/notifUser?page=${page}`)
        .toPromise();
    }
}
