import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Osoba } from './../model/osoba';
import { HttpResponse } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OsobeService {
 
  public osobe: Subject<Osoba[]> = new Subject();
  private path = '/api/osoba';
  private header = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }


  getOsoba(page: number, size ): Observable<HttpResponse<Osoba[]>> {

    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('size', size.toString());

    return this.http.get(this.path,  {params: params, observe: 'response' }) as Observable<HttpResponse<Osoba[]>>;
  }

  getOsobeId(id: number): Observable<Osoba> {
    // console.log('JEDAN USER ID', id);
    return this.http.get(`${this.path}/${id}`) as Observable<Osoba>;
  }

  // getOsobe(): Observable<Osoba[]> {
  //   return this.http.get(this.path) as Observable<Osoba[]>;
  // }

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
