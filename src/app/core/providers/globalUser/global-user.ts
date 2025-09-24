import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalUser {
  private name: string = '';
  private lastName: string  = '';

  setName(name: string){
    this.name = name;
  }

  getName(): string{
    return this.name;
  }

  setLastName(lastName: string){
    this.lastName = lastName;
  }

  getLastName(): string{
    return this.lastName;
  }



}
