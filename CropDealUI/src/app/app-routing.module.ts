import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { AdminComponent } from './Component/admin/admin.component';
import { DealerComponent } from './Component/dealer/dealer.component';
import { DealerregistrationComponent } from './Component/dealerregistration/dealerregistration.component';
import { RegisterComponent } from './Component/register/register.component';
import { HomeComponent } from './Component/home/home.component';
import { InvoiceComponent } from './Component/invoice/invoice.component';
import { FarmerComponent } from './Component/farmer/farmer.component';
import { EditfarmerComponent } from './Component/editfarmer/editfarmer.component';
import { AddcropComponent } from './Component/addcrop/addcrop.component';
import { EditdealerComponent } from './Component/editdealer/editdealer.component';
import { EditCropComponent } from './Component/farmer/edit-crop/edit-crop.component';
import { AddsubscriptionComponent } from './Component/addsubscription/addsubscription.component';
import { AuthGuard } from './AuthGuard/authguard.guard';
import { UnauthorizedComponent } from './Component/unauthorized/unauthorized.component';
//import { EditcropComponent } from './Component/editcrop/editcrop.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
   {path:'login',component:LoginComponent},
   {path: 'admin', component: AdminComponent,canActivate:[AuthGuard],data:{roles:['Admin']}},
   {path: 'farmer',component:FarmerComponent,canActivate:[AuthGuard],data:{roles:['Farmer']}},
   {path:'dealer',component:DealerComponent,canActivate:[AuthGuard],data:{roles:['Dealer']}},
   { path: 'register', component: RegisterComponent },
   { path: 'dealerregister',component:DealerregistrationComponent},
   {
    path: 'admin',
    component: AdminComponent,
    //canActivate: [AuthGuard],
    data: { requiredRole: 'Admin' }, // Specify the required role
  },
  
  {path:'invoices',component:InvoiceComponent},
  {path:'editfarmer',component:EditfarmerComponent,canActivate:[AuthGuard],data:{roles:['Farmer']}},
  {path:'addcrop',component:AddcropComponent,canActivate:[AuthGuard],data:{roles:['Farmer']}},
  {path:'editdealer',component:EditdealerComponent,canActivate:[AuthGuard],data:{roles:['Dealer']}},
  {path:'edit-crop/:id',component:EditCropComponent,canActivate:[AuthGuard],data:{roles:['Farmer']}},
  {path:'addsubscription',component:AddsubscriptionComponent,canActivate:[AuthGuard],data:{roles:['Dealer']}},
  {path:'unauthorized',component:UnauthorizedComponent}
  //path:'farmer/editcrop',component:EditcropComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
