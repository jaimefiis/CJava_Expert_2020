import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  
  private baseUrl = 'http://3.12.44.207:8080/api/personas';

  constructor(private http: HttpClient) { }

  getPersonsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getPerson(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPerson(person: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, person);
  }

  updatePerson(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletePerson(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

}
