import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FarmerService } from 'src/app/Service/farmer.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  activeSection: string = 'home';
  crops: any|null;
  farmers: any|null;
  dealers: any|null;
  invoices: any|null;
  Id=sessionStorage.getItem('id');
  constructor(private router: Router, private api:FarmerService){}

 
  
  showSection(section: string) {
    this.activeSection =section;
  }

  ngOnInit() {
    // Fetch the list of crops when the component initializes
    this.activeSection = 'home';
    this.fetchCrops();
    this.fetchFarmers();
    this.fetchDealers();
    this.fetchInvoices();
    
  }

  fetchCrops() {
    this.api.getAllCrops().subscribe((response) => {
      this.crops = response;
      
      console.log(this.crops);
      
  });
}

  fetchFarmers(){    
     this.api.getAllFarmers().subscribe((response) => {
       this.farmers = response;
       console.log(this.farmers);
     });
    
   }

fetchDealers(){
  this.api.getAllDealers().subscribe((response) => {
    this.dealers = response;
    console.log(this.dealers);
  });
}


fetchInvoices(){
  this.api.getAllInvoices().subscribe((response)=> {
    this.invoices = response;
    console.log(this.invoices);

  });
}

  logout() {
    console.log('Logging out...');
    this.router.navigate(['']);
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
  updateFarmerStatus(farmerId:any){
    if(confirm('Are you sure you want to change status')){
    this.api.updateFarmerStatus(farmerId).subscribe((response) => {
      alert('status updated');
      console.log(response);
    },
    (error) => {
      console.error(error);
    });
  }
}
  updateDealerStatus(dealerId:any){
    if(confirm('Are you sure you want to change status')){
      this.api.updateDealerStatus(dealerId).subscribe((response) => {
        alert('status updated');
        console.log(response);
      },
      (error) => {
        console.error(error);
      });
    }

    }
    deleteCrop(id: number): void {
      if (confirm('Are you sure you want to delete this crop')) {
        this.api.DeleteCropsById(id).subscribe((response) => {
          alert(response);
          this.fetchCrop(this.Id);
        });
      }
    }
    fetchCrop(farmerID : any) {
      this.api.getCropsByFarmerId(farmerID).subscribe((response) => {
        this.crops = response;
        
        console.log(this.crops);
        
    });
  }

}

