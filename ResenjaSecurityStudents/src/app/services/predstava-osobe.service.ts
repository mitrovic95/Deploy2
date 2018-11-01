import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PredstavaOsoba } from 'src/app/model/predstavaOsoba';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PredstavaOsobeService {

    public repertoar: Subject<PredstavaOsoba[]> = new Subject();
    private path = '/api/predstavaOsoba';
    private path2 = 'osobe'
    private header = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }

    getPredstavaOsobe(): Observable<PredstavaOsoba[]> {
      return this.http.get(this.path) as Observable<PredstavaOsoba[]>;
    }

    getPredstavaOsobeId(id: number): Observable<PredstavaOsoba> {
      // console.log('JEDAN USER ID', id);
      return this.http.get(`${this.path}/${id}/${this.path2}`) as Observable<PredstavaOsoba>;
    }
    

    // getPredstavaOsobeIdOsobe(id: number): Observable<PredstavaOsoba> {
    //   // console.log('JEDAN USER ID', id);
    //   return this.http.get(`${this.path}/${id}/${this.path2}`) as Observable<PredstavaOsoba>;
    // }
  //   deleteCompany(company: Company) {
  //     return this.http.delete(`${this.path}/${company.id}`);
  //   } jel ovo servis koji treba da se obrati tome?? moze i ovaj sad skontah

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
