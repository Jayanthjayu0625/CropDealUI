import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FarmerService } from 'src/app/Service/farmer.service';

@Component({
  selector: 'app-edit-crop',
  templateUrl: './edit-crop.component.html',
  styleUrls: ['./edit-crop.component.css']
})
export class EditCropComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router,private api : FarmerService) { }
  user : any={};
  data: any={};
  info: any={};
  
  Id= sessionStorage.getItem('id');


 
  
 
  

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const cropId = idParam != null ? +idParam : 0;
    //this.loadCrop(cropId);
    this.fetchCrops1(cropId);
  }

  fetchCrops1(id: number): void {
    this.api.getCropsByCropId(id).subscribe(data => {
      this.user = data;
    });
  }
  // fetchCrops1(cropId:number):void{
  //   this.api.getCropsByCropId(cropId).subscribe((data)=>{
  //     this.info=data;
  //     console.log(this.info);

  //     this.user.CropId=this.info.cropId;
  //     this.user.CropName=this.info.cropName;
  //     this.user.Price = this.info.price;
  //     this.user.Quantity=this.info.quantity;
  //     this.user.CropTypeID = this.info.cropTypeID;
  //     this.user.Location = this.info.location;
  //   })
  // }

  onSubmit(input:any){
    this.data.CropId=input.cropId;
    this.data.CropTypeID=input.cropTypeID;
    this.data.CropName=input.cropName;
    this.data.Quantity=input.quantity;
    this.data.Price=input.price;
    this.data.Location=input.location;
    this.data.FarmerID = this.Id;
    
    console.log(this.data);
  

  
    this.api.EditCropById(this.data.CropId, this.data).subscribe((response) => {
      console.log(response);
      alert('crop is updated')
      this.router.navigate(['/farmer']);
     
    },
    (error)=>{
      console.error('update failed',error);
    }
    
    );
  }
}


// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { FarmerService } from 'src/app/Service/farmer.service';

// @Component({
//   selector: 'app-edit-crop',
//   templateUrl: './edit-crop.component.html',
//   styleUrls: ['./edit-crop.component.css']
// })
// export class EditCropComponent implements OnInit {
//   constructor(private route: ActivatedRoute, private router: Router, private api: FarmerService) {}

//   user: any = {};
//   data: any = {};
//   info: any = {};
//   Id = sessionStorage.getItem('id');

//   ngOnInit(): void {
//     const idParam = this.route.snapshot.paramMap.get('id');
//     const cropId = idParam !== null ? +idParam : 0;
//     this.fetchCrops(cropId);
//   }

//   fetchCrops(cropId: number): void {
//     this.api.getCropsByCropId(cropId).subscribe((data) => {
//       this.info = data;
//       this.user.CropId = this.info.cropId;
//       this.user.CropName = this.info.cropName;
//       this.user.Price = this.info.price;
//       this.user.Quantity = this.info.quantity;
//       this.user.CropTypeId = this.info.cropTypeId;
//       this.user.Location = this.info.location;
//     });
//   }

//   onSubmit(input: any) {
//     this.data.CropId = input.CropId;
//     this.data.CropTypeId = input.CropTypeId;
//     this.data.CropName = input.CropName;
//     this.data.Quantity = input.Quantity;
//     this.data.Price = input.Price;
//     this.data.Location = input.Location;
//     // Assuming you have the FarmerId already available in this.Id
//     this.data.FarmerId = this.Id;

//     this.api.EditCropById(this.data.CropId, this.data).subscribe(
//       (response) => {
//         console.log(response);
//         alert('Crop is updated');
//         this.router.navigate(['crops']);
//       },
//       (error) => {
//         console.error('Update failed', error);
//       }
//     );
//   }
// }
