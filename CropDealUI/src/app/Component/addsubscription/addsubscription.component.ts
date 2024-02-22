import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FarmerService } from 'src/app/Service/farmer.service';

@Component({
  selector: 'app-addsubscription',
  templateUrl: './addsubscription.component.html',
  styleUrls: ['./addsubscription.component.css']
})
export class AddsubscriptionComponent {

  data:any=[];
  user:any=[];
  Id = sessionStorage.getItem('id');

  constructor(private router: Router, private api: FarmerService){}

  OnSubmit(data1 : any){
    this.data.cropTypeID = data1.cropTypeId;
    this.data.dealerID = this.Id;

    console.log(this.data);
    this.api.AddSubscription(this.data.dealerID,this.data.cropTypeID).subscribe(
      (response) => {
        console.log(response);
        alert('Subscription is added');
        this.router.navigate(['/dealer']);
      },
      (error) => {
          console.error('add failed',error);
          alert('already subscription added');
      }
    );
  }
}
