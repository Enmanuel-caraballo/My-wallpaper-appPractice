import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalUid {
   private uidUser: string = '';


  setUid(uid: string){
    this.uidUser = uid;
  }

  getUid(): string{
    return this.uidUser;
  }
}
