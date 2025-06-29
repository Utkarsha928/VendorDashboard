import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  private apiUrl = 'https://01.fy25ey01.64mb.io/';
  constructor( private http :HttpClient) { }
  getUsers() {
    return this.http.get<any>(this.apiUrl);
  }
}
