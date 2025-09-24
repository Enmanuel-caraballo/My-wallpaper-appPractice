import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection, Firestore, addDoc} from '@angular/fire/firestore'
import { doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { IUser, IUserCreate } from 'src/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class Query {
 constructor(private readonly fireSt: Firestore, private readonly firestore: AngularFirestore){}

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

//  public async modify(collectionName: string, uid: string, data: any){
//     try {
//       const ref = doc(this.fireSt, collectionName, uid);
//       await updateDoc(ref, data);
//      // this.firestore.collection(collectionName).doc(uid).set(data);
//     } catch (error) {
//       console.log("Error al modificar", error);

//     }
//   }

  async getById(collectionName: string, id: string){
    try {
      const ref = collection(this.fireSt, collectionName);
      const q = query(ref, where("uid", "==", id));
      const snapshot = await getDocs(q);

    if (snapshot.empty) {
      console.warn("No existe documento con ese uid");
      return null;
    }

     return snapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as IUserCreate)
    }));

    } catch (error) {
      console.log("Error en getById",error);
      return;
    }
  }


}
