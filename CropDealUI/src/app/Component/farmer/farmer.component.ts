import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FarmerService } from 'src/app/Service/farmer.service';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})
export class FarmerComponent {
  activeSection: string = 'profile';
  crops: any|null;
  invoices: any|null;
  //cid:any;
  Id=sessionStorage.getItem('id');
  farmer: any|null;
  //bankDetails: any|null;
  isNavbarOpen: boolean = false; // Initialize isNavbarOpen as false

  // Define the toggleNavbar function to toggle the visibility of the navigation items
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

   constructor(private router:Router,private api:FarmerService){}
   user : any=[];

   showSection(section: string){
    this.activeSection=section;
  }


  fetchFarmer(farmerId : any){
    this.api.getfarmersbyId(farmerId).subscribe((data : any) => {
      this.farmer = data;
      console.log(this.farmer);
});

}
fetchCrops(farmerID : any) {
  this.api.getCropsByFarmerId(farmerID).subscribe((response) => {
    this.crops = response;
    
    console.log(this.crops);
    
});

}

logout(){
  console.log('Logging out...');
  this.router.navigate(['']);

}
addcrops(){
  this.router.navigate(['addcrop']);
}
editCrop(cropId:number){
  this.router.navigate(['/edit-crop', cropId]);
}

ngOnInit() {
  this.activeSection = 'home';
  this.fetchFarmer(this.Id);
  this.fetchCrops(this.Id);
  this.fetchInvoice(this.Id);


}
editFarmerDetails(){
  this.router.navigate(['editfarmer']);
}
fetchInvoice(fid : any){
  this.api.getFarmerInvoiceById(fid).subscribe((data : any) => {
    this.invoices = data;
    console.log(this.invoices);
  });
}

deleteCrop(id: number): void {
  if (confirm('Are you sure you want to delete this crop')) {
    this.api.DeleteCropsById(id).subscribe((response) => {
      alert(response);
      this.fetchCrops(this.Id);
    });
  }
}
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
}










    
