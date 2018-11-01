import { Injectable } from '@angular/core';
import { Slike } from 'src/app/model/slike';
import { HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { HttpResponse } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SlikeService {

    public slike: Subject<Slike[]> = new Subject();
    private path = '/api/slike';
    private header = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }

    getSlika(page: number, size ): Observable<HttpResponse<Slike[]>> {

      let params = new HttpParams();
      params = params.append('page', page.toString());
      params = params.append('size', size.toString());

      return this.http.get(this.path,  {params: params, observe: 'response' }) as Observable<HttpResponse<Slike[]>>;
    }

    // getSlike(): Observable<Slike[]> {
    //   return this.http.get(this.path) as Observable<Slike[]>;
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


