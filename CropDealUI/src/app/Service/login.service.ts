import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from 'Model/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly SESSION_STORAGE_KEY = 'user';
   //private baseUrl: string = 'https://localhost:44342'
  constructor(private http: HttpClient) {}
    
  login(user:User){
    return this.http.post('https://localhost:44342/api/Login',user).pipe(
      map((response:any)=>{
        const userData={
          role:response.role,
          jwtToken:response.token,
          userId:response.id
        };
        sessionStorage.setItem(this.SESSION_STORAGE_KEY,JSON.stringify(userData));
        return response;
      })
    );
  }
  isAuthenticated(): boolean {
    // Check your authentication logic here
    // For simplicity, always assume the user is authenticated in this example
    return true;
  }

  getUserRole(): string {
    const userData = this.getUserData();
    return userData ? userData.role : '';
  }

  getUserId(): string {
    const userData = this.getUserData();
    return userData ? userData.userId : '';
  }

  getUserEmail(): string {
    const userData = this.getUserData();
    return userData ? userData.email : '';
  }

  getJwtToken(): string {
    const userData = this.getUserData();
    return userData ? userData.jwtToken : '';
  }

  private getUserData(): any {
    const userDataString = sessionStorage.getItem(this.SESSION_STORAGE_KEY);
    return userDataString ? JSON.parse(userDataString) : null;
  }
  
 } 

