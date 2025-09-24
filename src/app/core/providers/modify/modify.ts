import { Injectable } from '@angular/core';
import { GlobalUid } from '../globalUid/global-uid';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Query } from '../query/query';
import { IUserModify } from 'src/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class Modify {
  constructor(private readonly querySrv: Query){}

  // async update(uid: string, user:IUserModify){
  //   await this.querySrv.modify("users", uid, {
  //     name: user.name,
  //     lastName: user.lastName
  //   })
  // }
}
