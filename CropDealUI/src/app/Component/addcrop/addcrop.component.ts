import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Crop } from 'Model/Crop';
import { FarmerService } from 'src/app/Service/farmer.service';

@Component({
  selector: 'app-addcrop',
  templateUrl: './addcrop.component.html',
  styleUrls: ['./addcrop.component.css']
})
export class AddcropComponent {
  
    constructor(private router: Router, private api: FarmerService){}
    user = new Crop();
    data:any={};
    Id = sessionStorage.getItem('id');
  
    back(){
      this.router.navigate(['farmer']);
      console.log('back to Home page');
    }
  //     onSubmit(){
  //       // this.data.CropTypeID = input.CropTypeID;
  //       // this.data.CropName = input.CropName;
  //       // this.data.Quantity = input.Quantity;
  //       // this.data.Price = input.Price;
  //       // this.data.Location = input.Location;
  //       // this.data.FarmerID = this.Id;
  //       console.log(this.data);
  //       this.api.AddCrop(this.data).subscribe(
  //         (response) => {
  //           console.log( response);
  //           alert('Crop is Added Successfully');
  //         },
  //         (error) => {
  //           console.error('Add Crop failed:', error);
            
  //         }
  //       );
        
  //   
  
  //   }
  addCrop(): void {
    this.api.addCrop(this.data).subscribe(() => {
      alert('crop added successfully');
      this.router.navigate(['farmer']);
    },
    error => {
      console.error('Error adding crop:', error);
      alert('Please enter the valid details');
    });
  }
  
}
