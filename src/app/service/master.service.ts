import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import locations from '../mockdata/locations.json'; // Adjust the path as needed

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  apiUrl=''
  constructor(private http:HttpClient) { 
  }
  getLocations(){
    return locations
  }
  searchBus(from:number, to:number, travelDate: string):Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}searchBus?fromLocation=${from}&toLocation=${to}&travelDate=${travelDate}`)
  }
}
