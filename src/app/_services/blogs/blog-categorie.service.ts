import { Injectable } from '@angular/core';
import * as Routes from 'src/Routes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogCategorieService {

  constructor(private http: HttpClient) {}

  add(formData: FormData): Promise<any> {
    return this.http.post<any>(Routes.BLOGCATEGORIE, formData).toPromise();
  }
}
