
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { User } from 'Model/User';
// import { LoginService } from 'src/app/Service/login.service';



// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
  


//   constructor(private loginService:LoginService,private router : Router){}

//   user = new User();
//   data = new User();

//   onSubmit(input : User) {
//     // Replace this with your login logic, e.g., send data to a service or perform authentication.
//     console.log(' login details:', this.user);
//     this.data.Email = input.Email;
//     this.data.Password = input.Password;
//     this.data.Role = input.Role;
//     this.data.Token=input.Token;
    
//     if(this.data.Role==='Admin')
//     {
//       this.loginService.adminLogin(this.data).subscribe(
//         (response:any) =>{
//           sessionStorage.setItem('email',response.Email);
//           sessionStorage.setItem('role',response.Role);
//           sessionStorage.setItem('token',response.jwtoken);
//           sessionStorage.setItem('id',response.userId);
//           console.log(response);
//           this.router.navigate(['admin']);
//         },
//         (error) => {
//           alert('Invalid Credentials');
//         }
//        );
//     }
//     else if(this.data.Role==='Dealer')
//     {
//       this.loginService.dealerLogin(this.data).subscribe(
//         (response:any) =>{
//           sessionStorage.setItem('email',response.Email);
//           sessionStorage.setItem('role',response.Role);
//           sessionStorage.setItem('token',response.jwtoken);
//           sessionStorage.setItem('id',response.userId);
//           console.log(response);
//           this.router.navigate(['dealer']);
//         },
//         (error) => {
//           alert('Invalid Credentials');
//         }
//        );
//     }
//     else {

//       this.loginService.login(this.data).subscribe(
//         (response:any) =>{
//           sessionStorage.setItem('email',response.Email);
//           sessionStorage.setItem('role',response.Role);
//           sessionStorage.setItem('token',response.jwtoken);
//           sessionStorage.setItem('id',response.userId);
//           console.log(response); 
//           this.router.navigate(['farmer']); 
//         },
//         (error) => {
//           alert('Invalid Credentials');
//         }
//        );

//       }
//   }
// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'Model/User';
import { LoginService } from 'src/app/Service/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})export class LoginComponent {
  
  constructor(private router:Router, private loginservice : LoginService){}

    user = new User();
    data = new User();

    onSubmit(input : User) {
      // Replace this with your login logic, e.g., send data to a service or perform authentication.
      console.log('User login details:', this.user);
      this.data.Email = input.Email;
      this.data.Password = input.Password;
      this.data.Role = input.Role;

      this.loginservice.login(this.data).subscribe(
              (response:any) =>{
                sessionStorage.setItem('id',response.id);
                sessionStorage.setItem('role',response.role);
                sessionStorage.setItem('token',response.token);
                console.log(response);
                if(response.role === 'Admin'){
                  alert('Login Successful');
                  this.router.navigate(['admin']);
                } else if(response.role === 'Farmer'){
                  alert('Login Successful');
                  this.router.navigate(['farmer']);
                } else{
                  alert('Login Successful');
                  this.router.navigate(['dealer']);
                }
              },
              (error) => {
                alert('Invalid Credentials or User may be Inactive');
              }
            );

    }

  }