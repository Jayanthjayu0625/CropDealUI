import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FarmerService } from 'src/app/Service/farmer.service';
import { MatDialog } from '@angular/material/dialog';
import { PlaceorderComponent } from './placeorder/placeorder.component';
@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.css']
})
export class DealerComponent {
  activeSection: string = 'profile';
  crops: any|null;
  invoices: any|null;
  Id:any =sessionStorage.getItem('id');
  dealer: any|null;
  //quantity:any[]=[];
  subscriptions:any|null;
  info: any|null;
  did : any|null;

  constructor(private router: Router, private api:FarmerService,public dialog:MatDialog) {}

  showSection(section: string) {
    this.activeSection =section;
}

logout() {
  // Implement the logout logic here (e.g., clear user session, redirect to login page, etc.)
  console.log('Logging out...');
  this.router.navigate(['']);
}

ngOnInit() {
  // Fetch the list of crops when the component initializes
  this.activeSection = 'home';
  this.fetchCrops(this.Id);
  this.fetchInvoice(this.Id);
  this.fetchDealer(this.Id);
  this.fetchSubscription(this.Id);
  
}

  

  fetchCrops(dealerId : any) {
    this.api.getAllCrops().subscribe((response) => {
      this.crops = response;
      
      console.log(this.crops);
      
  });

  }

  Logout() {
    this.router.navigate(['/']);

  }

  fetchInvoice(dealerId : any){
    this.api.getDealerInvoiceById(dealerId).subscribe((data : any) => {
      this.invoices = data;
      console.log(this.invoices);
    });
  }



  fetchDealer(dealerId : any){
    this.api.getDealersById(dealerId).subscribe((data : any) => {
      this.dealer = data;
      console.log(this.dealer);
    });
  }
  navigateToHome() {
    this.router.navigate(['dealer']);
  }

  editDealerDetails(){
    this.router.navigate(['editdealer']);
  }

  // buyCrop(input: any, information: any){
  //   this.info.dealerId = this.id;
  //   this.info.cropId = input.cropId;
  //   this.info.farmerId = input.farmerId;
  //   this.info.quantity = information;
  //   console.log(this.info);
  //   this.api.AddInvoice(this.info).subscribe(
  //     (response)=>{
  //       console.log(response);alert('purchase success')
  //     },
  //     (error)=>{
  //       console.error('purchase failed',error)
  //     }
  //   )
  // }
  openQuantityDialog(cropId: number,farmerId:number): void {
    const dialogRef = this.dialog.open(PlaceorderComponent, {
      width: '250px',
      data: { quantity: 1 }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result===0)
      {
        alert('quantity should be greater than zero');
      }
      if (result) {
        this.buyCrop(cropId,farmerId, result);
      }
    });
  }


  

  // getSubscriptions(dealerId : any){
  //   this.api.getSubscriptionsById(dealerId).subscribe((response) => {
  //     this.subscriptions = response;
  //     console.log(this.subscriptions);
  //   });
  // }
  downloadPdf(invoiceId: number) {
    this.api.downloadPdf(invoiceId).subscribe(
      (response) => {
        const blob = new Blob([response], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      },
      (error) => {
        console.error(error);
      }
    );    
  }
  fetchSubscription(dealerID:any) {
    this.api.getSubscription(dealerID).subscribe((data:any) => {
    this.subscriptions = data;
    console.log(this.subscriptions);
    });
  }

  addSubscription(){
    this.router.navigate(['addsubscription']);
    console.log('Subscribed successfully ');
    
  }
  deleteSubscription(sid:any){
    this.did = sid;
    console.log(this.did);
    if (confirm('Are you sure you want to Unsubscribe this crop')) {
    this.api.deleteSubscriptions(this.did).subscribe(
      (response) => {
        console.log(response);
        alert('UnSubscribed');
        this.fetchSubscription(this.Id);
      },
      error => {
        console.error('delete failed:',error);
        alert('Failed');
      }
    );
  }
}
// buyCrop(cropId: number,farmerId:number, quantity: number) {
//   const order = {
//     CropID: cropId,
//     FarmerID:farmerId,
//     Quantity: quantity
//   };
  

//   this.api.buyCrop(order).subscribe((response) => {
    
//     console.log(response);
//     alert('crop purchased successfully');
//     this.fetchCrops(this.Id);

//   }, error => {
//     console.error(error);
//     console.log('Please enter the valid input');
//     alert('Please enter the valid input');
//     });
//   }
buyCrop(cropId: number, farmerName: any, quantity: number) {
  const order = {
    CropID: cropId,
    FarmerName: farmerName,
    Quantity: quantity
  };

  // Check if the quantity is valid
  if (quantity <= 0) {
    alert('Quantity must be greater than 0.');
    return;
  }
  
  

  // Check if the quantity is more than the available quantity
  const selectedcrop = this.crops.find((c: {cropId:number;}) => c.cropId === cropId);
  if (quantity > selectedcrop.quantity) {
    alert('Quantity cannot exceed available quantity should be less than or equal to available quantity.');
    return;
  }

  // If the quantity is valid, proceed with the purchase
  this.api.buyCrop(order).subscribe((response) => {
    console.log(response);
    alert('Crop purchased successfully');
    this.fetchCrops(this.Id);
  }, (error) => {
    console.error(error);
    console.log('Please enter a valid input');
    alert('Please enter a valid input');
  });
}
isQuantityValid(crop: any): boolean {
  return crop.quantity > 0 && crop.quantity >= 1;
}
}
