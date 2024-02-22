import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DealerRegistration } from 'Model/DealerRegistration';
import { FarmerService } from 'src/app/Service/farmer.service';

@Component({
  selector: 'app-editdealer',
  templateUrl: './editdealer.component.html',
  styleUrls: ['./editdealer.component.css']
})
// export class EditdealerComponent {
//   constructor(private router:Router, private api : FarmerService) { }
//   user = new DealerRegistration();
//   data = new DealerRegistration();
//   Id : any = sessionStorage.getItem('id');
 
//   onSubmit(input : DealerRegistration){
 
//    this.data.Name = input.Name;
//    this.data.Email = input.Email;
//    this.data.Phone = input.Phone;
//    this.data.Password = input.Password;
//    this.data.Address = input.Address;
//    console.log(this.data);
  
//    this.api.EditDealerById(this.Id,this.data).subscribe(
//      (response) => {
//        console.log( response);
//        alert('updated');
//      },
//      (error) => {
//        console.error('Update  failed:', error);
       
//      }
//    );
//   }
 
//    back(){
//    this.router.navigate(['dealer']);
//      console.log('back');
//   }
// }


export class EditdealerComponent {
  constructor(private route:ActivatedRoute,private router:Router, private api : FarmerService) { }
//  user = new FarmerRegistration();
user:any|undefined;
 data = new DealerRegistration();
 Id : any = sessionStorage.getItem('id');

 
 info: any={};
 ngOnInit(): void {
   
   this.fetchDealer1(this.Id);
 }
 fetchDealer1(id: number): void {
  this.api.getDealerByDealerId(id).subscribe(data => {
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
 

  this.api.EditDealerById(this.Id,input).subscribe(
         (response) => {
           console.log( response);
           alert('updated');
           this.router.navigate(['dealer']);
         },
         (error) => {
           console.error('Update  failed:', error);
           
         }
       );
      }
     
       back(){
       this.router.navigate(['dealer']);
         console.log('back');
       }
      }
  