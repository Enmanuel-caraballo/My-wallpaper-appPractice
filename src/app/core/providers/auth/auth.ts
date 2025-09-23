import { Injectable } from '@angular/core';
import { Auth as AuthFirebase, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { GlobalUid } from '../globalUid/global-uid';
import { getAuth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class Auth {
    constructor(private readonly authFirebase: AuthFirebase, private readonly router: Router,

  ){}

  async register(email: string, password: string){
   const resp = await createUserWithEmailAndPassword(this.authFirebase, email, password);
    console.log(resp);

    return resp.user.uid;
  }

   async login(email: string, password:string){
      try {
        const response = await signInWithEmailAndPassword(this.authFirebase, email, password);
        if (response) {
          this.router.navigate(['/home']);
        }
        console.log(response);

      } catch (error) {
        console.log((error as any).message);

      }
  }

      async logOut(){
      try {
        await signOut(this.authFirebase)
      } catch (error) {
        console.log((error as any).message);

      }
    }

   async getCurrentuser(){
      const auth =  getAuth();
      const user = auth.currentUser;

      if(user){

        const uid = user.uid;
        console.log(uid);



      }else{
        console.log("No hay usuario autenticado");

      }
    }

}
