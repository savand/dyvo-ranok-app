import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private apiUrl = environment.backendUrl;

  sendOrderApplianceDromForm(
    token: string,
    orderFormComponent: any
  ): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      token: token,
    });

    return this.http.post<any>(
      this.apiUrl,
      JSON.stringify(orderFormComponent),
      { headers }
    );
  }

  constructor(private http: HttpClient) {}
}
