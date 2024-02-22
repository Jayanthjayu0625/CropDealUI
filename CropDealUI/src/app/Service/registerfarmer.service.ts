import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FarmerRegistration } from 'Model/FarmerRegistration';


@Injectable({
  providedIn: 'root'
})
export class RegisterfarmerService {

  constructor(private http: HttpClient) {}
  farmerRegistration(newUser:FarmerRegistration){
    return this.http.post('https://localhost:44342/api/Farmer/RegisterNewFarmer',newUser);
  } 


}

