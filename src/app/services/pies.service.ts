import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PiesService {

  constructor(private _http: HttpClient) { }

  addPies(data: any): Observable<any>{
    return this._http.post('http://localhost:3000/pies', data);
  }

  updatePies(id: number,data: any): Observable<any>{
    return this._http.put(`http://localhost:3000/pies/${id}`, data);
  }

  getPiesList(): Observable<any>{
    return this._http.get('http://localhost:3000/pies');
  }

  deletePies(id: number): Observable<any>{
    return this._http.delete(`http://localhost:3000/pies/${id}`);
  }
}
