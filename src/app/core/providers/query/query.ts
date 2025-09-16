import { Injectable } from '@angular/core';
import { collection, Firestore, addDoc} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class Query {
 constructor(private readonly fireSt: Firestore){}

 //CRUD
 async create(collectionName: string, data: any){
    try {
      const reference = collection(this.fireSt, collectionName);
    const res = await addDoc(reference, data);
    console.log(res.toJSON());

    } catch (error) {
      throw error;
    }
  }

}
