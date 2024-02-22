import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DealerRegistration } from 'Model/DealerRegistration';
//import { FarmerRegistration } from 'Model/FarmerRegistration';

@Injectable({
  providedIn: 'root'
})
export class RegisterdealerService {

  constructor(private http: HttpClient) { }

  dealerRegistration(newUser:DealerRegistration){
    return this.http.post('https://localhost:44342/api/Dealer/RegisterNewDealer',newUser);
  } 
}


  
  


