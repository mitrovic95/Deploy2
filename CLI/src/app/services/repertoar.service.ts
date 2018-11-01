import { Injectable } from '@angular/core';
import { Repertoar } from 'src/app/model/repertoar';
import { Subject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { HttpResponse } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepertoarService {

  public repertoar: Subject<Repertoar[]> = new Subject();
  private path = '/api/repertoar';
  private header = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getRepertoar(page: number, size ): Observable<HttpResponse<Repertoar[]>> {

    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('size', size.toString());

    return this.http.get(this.path,  {params: params, observe: 'response' }) as Observable<HttpResponse<Repertoar[]>>;
  }

//   getProjects(page: number, size ): Observable<HttpResponse<Projekat[]>>{

//     let params = new HttpParams();
//     params = params.append('page', page.toString());
//     params = params.append('size', size.toString());

//     return this.http.get(this.path, {params:params, observe: 'response' }) as Observable<HttpResponse<Projekat[]>>;
//  }

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
