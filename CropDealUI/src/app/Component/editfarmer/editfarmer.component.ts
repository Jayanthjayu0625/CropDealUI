import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FarmerRegistration } from 'Model/FarmerRegistration';
import { FarmerService } from 'src/app/Service/farmer.service';

@Component({
  selector: 'app-editfarmer',
  templateUrl: './editfarmer.component.html',
  styleUrls: ['./editfarmer.component.css']
})

  export class EditfarmerComponent {
    constructor(private route:ActivatedRoute,private router:Router, private api : FarmerService) { }
  //  user = new FarmerRegistration();
  user:any|undefined;
   data = new FarmerRegistration();
   Id : any = sessionStorage.getItem('id');

   
   info: any={};
   ngOnInit(): void {
     
     this.fetchFarmer1(this.Id);
   }
   fetchFarmer1(id: number): void {
    this.api.getFarmerByFarmerId(id).subscribe(data => {
      this.user = data;
    });
  }
 
  //  fetchFarmer1(id: number): void {
  //    this.api. getfarmersbyId(id).subscribe(data => {
  //      this.info = data;
  //      console.log(this.info);

  //      this.user.Name=this.info.value.Name;
  //      this.user.Email=this.info.value.Email;
  //      this.user.Phone=this.info.value.Phone;
  //      this.user.Password=this.info.value.Password;
  //      this.user.Address=this.info.value.Address;
  //      this.user.AccNum=this.info.value.AccNum;
  //      this.user.Ifsc=this.info.value.Ifsc;
  //      this.user.BankName=this.info.value.BankName;

  //    });
  //  }
   
   onSubmit(input : any){
  
    // this.data.Name = input.Name;
    // this.data.Email = input.Email;
    // this.data.Phone = input.Phone;
    // this.data.Address = input.Address;
    // this.data.Password=input.Password;
    // this.data.AccNum = input.AccNum;
    // this.data.Ifsc = input.Ifsc;
    // this.data.BankName = input.BankName;
    console.log(input);
   
    this.api.EditFarmerById(this.Id,input).subscribe(
      (response) => {
        console.log( response);
        alert('updated');
        this.router.navigate(['farmer']);
      },
      (error) => {
        console.error('Update failed:', error);
        // Handle error (e.g., display an error message)
      }
    );
   }
  
    back(){
    this.router.navigate(['farmer']);
      console.log('back');
   }
  
}
