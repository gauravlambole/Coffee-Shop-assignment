import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user = new Subject<string>();

  constructor() { }


  setUser(data : any) {
    localStorage.setItem("user", data);
  }

  getUser() {
    return localStorage.getItem("user");
  }

}
