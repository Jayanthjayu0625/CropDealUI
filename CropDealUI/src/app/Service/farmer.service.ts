import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Crop } from 'Model/Crop';
import { DealerRegistration } from 'Model/DealerRegistration';
import { FarmerRegistration } from 'Model/FarmerRegistration';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {
 
  constructor(private http : HttpClient) {}

  getfarmersbyId(farmerId: any){
    let url = `https://localhost:44342/api/Farmer/${farmerId}`;     
    return this.http.get(url);
  }
getCropsByFarmerId(farmerID:any){
  let url = `https://localhost:44342/api/Crop/getCrops/${farmerID}`;
  let token = sessionStorage.getItem('token');
  let headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });
  return this.http.get(url, {headers});
}

EditFarmerById(farmerId: number,newUser : FarmerRegistration){
  let url = `https://localhost:44342/api/Farmer/${farmerId}`;
  let token = sessionStorage.getItem('token');
  let headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });
  return this.http.put(url, newUser,{headers});
}
// AddCrop(newUser: any) {
//   let url = 'https://localhost:44342/api/Crop/addCrop';
//       let token = sessionStorage.getItem('token');
//       let headers = new HttpHeaders({
//         Authorization: `Bearer ${token}`,
//       });
//       return this.http.post(url,newUser);
// }

getFarmerInvoiceById(fid : any){
  let url = `https://localhost:44342/api/Invoice/farmerInvoices/${fid}`;    
  let token = sessionStorage.getItem('token');
  let headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });
  return this.http.get(url,{headers});
}

getDealerInvoiceById(did : any){
  let url = `https://localhost:44342/api/Invoice/dealerInvoices/${did}`;    
  let token = sessionStorage.getItem('token');
  let headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });
  return this.http.get(url,{headers});
}

getAllCrops(){
  let url = `https://localhost:44342/api/Crop/getCrops`;
  let token = sessionStorage.getItem('token');
  let headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });
  return this.http.get(url, {headers});
}
EditDealerById(id: number,newUser : DealerRegistration){
  let url = `https://localhost:44342/api/Dealer/update/${id}`;
  let token = sessionStorage.getItem('token');
  let headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });
  return this.http.put(url, newUser,{headers});     
}
getDealersById(dealerId : any){
  let url = `https://localhost:44342/api/Dealer/${dealerId}`;     
  return this.http.get(url);
}
getAllFarmers(){
  let url = 'https://localhost:44342/api/Farmer';  
  let token = sessionStorage.getItem('token');
  let headers = new HttpHeaders({
  Authorization: `Bearer ${token}`,
  });
return this.http.get(url, {headers}); 
}

getAllDealers(){
  let url = 'https://localhost:44342/api/Dealer/GetDealer';
  let token = sessionStorage.getItem('token');
  let headers = new HttpHeaders({
  Authorization: `Bearer ${token}`,
  });
  return this.http.get(url, {headers});
}
getAllInvoices(){
  let url = 'https://localhost:44342/api/Invoice/GetAllInvoices';
  let token = sessionStorage.getItem('token');
  let headers = new HttpHeaders({
  Authorization: `Bearer ${token}`,
  });
  return this.http.get(url, {headers});
}
addCrop(crop: any): Observable<any> {
  let token = sessionStorage.getItem('token');
    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    crop.farmerID=sessionStorage.getItem('id');
  return this.http.post(`https://localhost:44342/api/Crop/addCrop`, crop, { headers, responseType : "text"});
}

buyCrop(order:any){
  let url = 'https://localhost:44342/api/Invoice/addInvoice'; 
  //let dealerId = sessionStorage.getItem('id');
  order.dealerId = sessionStorage.getItem('id');
  let token = sessionStorage.getItem('token');
  let headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
    });
    return this.http.post(url,order,{headers, responseType:"text"});
}
downloadPdf(Id: number){
  let token = sessionStorage.getItem('token');
  let headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });
  return this.http.get(`https://localhost:44342/api/Invoice/DownloadReport/${Id}`,{ headers, responseType: 'arraybuffer' });
  }

EditCropById(id: number,newUser : any){
  let url = `https://localhost:44342/api/Crop/UpdateCrop/${id}`;
  let token = sessionStorage.getItem('token');
  let headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });
  return this.http.put(url, newUser,{headers});

}
DeleteCropsById(id : number){
  let url = `https://localhost:44342/api/Crop/deleteCrop/${id}`;
  let token = sessionStorage.getItem('token');
  let headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });
  return this.http.delete(url, {headers});

}

getCropsByCropId(cropId:number){
  let url = `https://localhost:44342/api/Crop/getCropbyId/${cropId}`;
  let token = sessionStorage.getItem('token');
  let headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });
  return this.http.get(url, {headers});
}
AddSubscription(dealerID:any,cid:any) {
  let url = `https://localhost:44342/api/Subscription/addSubscription/${dealerID}?cid=${cid}`;
  return this.http.post(url,{responseType:"text"});
}
deleteSubscriptions(sid:number) {
  let url = `https://localhost:44342/api/Subscription/deleteSubscription/${sid}`;
  return this.http.delete(url);
}
getSubscription(dealerID : any) {
  let url = `https://localhost:44342/api/Subscription/getSubscription/${dealerID}`;
  let token = sessionStorage.getItem('token');
  let headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });
  return this.http.get(url, {headers});
}
updateFarmerStatus(farmerId: any) {
  let url = `https://localhost:44342/api/Farmer/FarmerStatus/${farmerId}`;
  let token = sessionStorage.getItem('token');
  let headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });
  return this.http.put(url, {headers,responseType:"text"});
}
updateDealerStatus(dealerId: any) {
  let url = `https://localhost:44342/api/Dealer/DealerStatus/${dealerId}`;
  let token = sessionStorage.getItem('token');
  let headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });
  return this.http.put(url, {headers, responseType:"text"});
}
getFarmerByFarmerId(farmerId:number){
  let url = `https://localhost:44342/api/Farmer/${farmerId}`;
  let token = sessionStorage.getItem('token');
  let headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });
  return this.http.get(url, {headers});
}
getDealerByDealerId(dealerId:number){
  let url = `https://localhost:44342/api/Dealer/${dealerId}`;
  let token = sessionStorage.getItem('token');
  let headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });
  return this.http.get(url, {headers});
}
}









