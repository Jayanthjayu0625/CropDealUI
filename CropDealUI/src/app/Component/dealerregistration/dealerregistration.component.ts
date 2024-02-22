import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DealerRegistration } from 'Model/DealerRegistration';
import { RegisterdealerService } from 'src/app/Service/registerdealer.service';
import { ThisReceiver } from '@angular/compiler';



@Component({
  selector: 'app-dealerregistration',
  templateUrl: './dealerregistration.component.html',
  styleUrls: ['./dealerregistration.component.css']
})
export class DealerregistrationComponent {
  user = new DealerRegistration();
  data = new DealerRegistration();

  constructor(private router:Router,private api:RegisterdealerService) {}



  onSubmit(input:DealerRegistration) {
    
    this.data.Name=input.Name;
    this.data.Email=input.Email;
    this.data.Phone=input.Phone;
    this.data.Password=input.Password;
    this.data.Address=input.Address;
    this.api.dealerRegistration(this.data).subscribe(
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
