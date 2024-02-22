import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
//import { RegistrationComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminComponent } from './Component/admin/admin.component';
import { FarmerComponent } from './Component/farmer/farmer.component';
import { DealerComponent } from './Component/dealer/dealer.component';
//import { DealerRegistrationComponent } from './Component/dealer-registration/dealer-registration.component';
import { DealerregistrationComponent } from './Component/dealerregistration/dealerregistration.component';
//import { NavbarComponent } from './Component/navbar/navbar.component';
import { HomeComponent } from './Component/home/home.component';

import { InvoiceComponent } from './Component/invoice/invoice.component';
//import { FprofileComponent } from './Component/farmer/fprofile/fprofile.component';
import { InvoicesComponent } from './Component/invoices/invoices.component';
//import { EditFarmerComponent } from './Component/edit-farmer/edit-farmer.component';
import { EditfarmerComponent } from './Component/editfarmer/editfarmer.component';
import { AddcropComponent } from './Component/addcrop/addcrop.component';
//import { EditcropComponent } from './Component/editcrop/editcrop.component';
import { EditdealerComponent } from './Component/editdealer/editdealer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PlaceorderComponent } from './Component/dealer/placeorder/placeorder.component';
import { EditCropComponent } from './Component/farmer/edit-crop/edit-crop.component';
import { AddsubscriptionComponent } from './Component/addsubscription/addsubscription.component';
import { UnauthorizedComponent } from './Component/unauthorized/unauthorized.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    FarmerComponent,
    DealerComponent,
    DealerregistrationComponent,
    //NavbarComponent,
    HomeComponent,
    
    InvoiceComponent,
    //FprofileComponent,
    InvoicesComponent,
    //EditFarmerComponent,
    EditfarmerComponent,
    AddcropComponent,
    //EditcropComponent,
    EditdealerComponent,
    PlaceorderComponent,
    EditCropComponent,
    AddsubscriptionComponent,
    UnauthorizedComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




