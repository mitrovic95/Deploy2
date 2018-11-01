import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Vesti } from 'src/app/model/vesti';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class VestiService {

  public slike: Subject<Vesti[]> = new Subject();
  private path = '/api/vesti';
  private header = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getVesti(): Observable<Vesti[]> {
    return this.http.get(this.path) as Observable<Vesti[]>;
  }

//   getCompany(id: number): Observable<Company> {
//     // console.log('JEDAN USER ID', id);
//     return this.http.get(`${this.path}/${id}`) as Observable<Company>;
//   }

//   deleteCompany(company: Company) {
//     return this.http.delete(`${this.path}/${company.id}`);
//   }

//   saveCompany(company: Company): Observable<Company> {
//     if (company.id === undefined) {
//       return this.http.post(this.path, company, {headers: this.header}) as Observable<Company>;
//     }
//     else {
//       return this.http.put(`${this.path}/${company.id}`, company, {headers: this.header}) as Observable<Company>;
//     }
//   }

//   getCompanyByName(name: string): Observable<Company[]>  {
//    return this.http.get(this.path + '?name=' + name) as Observable<Company[]>;
//   }
// }
}
