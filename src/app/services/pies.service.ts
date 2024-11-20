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

  getPiesList(): Observable<any>{
    return this._http.get('http://localhost:3000/pies');
  }
}
