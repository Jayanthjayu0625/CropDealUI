import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FarmerRegistration } from 'Model/FarmerRegistration';
import { RegisterfarmerService } from 'src/app/Service/registerfarmer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = new FarmerRegistration();
  data = new FarmerRegistration();

  constructor(private router:Router,private api:RegisterfarmerService) {}



  onSubmit(input:FarmerRegistration) {
    
    this.data.Name=input.Name;
    this.data.Email=input.Email;
    this.data.Phone=input.Phone;
    this.data.Password=input.Password;
    this.data.Address=input.Address;
    this.data.AccNum=input.AccNum;
    this.data.Ifsc=input.Ifsc;
    this.data.BankName=input.BankName;

    this.api.farmerRegistration(this.data).subscribe(
      (response) => {
        console.log('Registartion successfull');
        alert('Registartion successful');
        this.router.navigate(['login']);
      },
      (error) => {
        console.log('Registration failed')
        alert('Registartion Failed')
        this.router.navigate(['login']);
      }
    )
  }
}
