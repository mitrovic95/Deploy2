import { Injectable } from '@angular/core';
import { Predstava } from 'src/app/model/predstava';
import { Subject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { HttpResponse } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PredstaveService {

  public repertoar: Subject<Predstava[]> = new Subject();
  private path = '/api/predstava';
  private header = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getPredstave(page: number, size ): Observable<HttpResponse<Predstava[]>> {

    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('size', size.toString());

    return this.http.get(this.path,  {params: params, observe: 'response' }) as Observable<HttpResponse<Predstava[]>>;
  }

  getPredstavaOsobeId(id: number): Observable<Predstava> {
    // console.log('JEDAN USER ID', id);
    return this.http.get(`${this.path}/${id}`) as Observable<Predstava>;
  }
}
