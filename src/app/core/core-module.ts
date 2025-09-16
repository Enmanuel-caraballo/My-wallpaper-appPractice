import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideFirestore, getFirestore} from '@angular/fire/firestore';

import { initializeApp, provideFirebaseApp} from '@angular/fire/app'
import { provideAuth, getAuth} from '@angular/fire/auth'
import { environment } from 'src/environments/environment';
import { Auth } from './providers/auth/auth';
import { Query } from './providers/query/query';
import { NativeToast } from './providers/nativeToast/native-toast';
import { File } from './providers/file/file';
import { Capacitor} from '@capacitor/core'
import { UpLoader } from './providers/upLoader/up-loader';


const providers = [Auth, Query, NativeToast, File, UpLoader];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    provideFirebaseApp(()=>initializeApp(environment.FIREBASE_CONFIG)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    ...providers,
  ]
})
export class CoreModule implements OnInit {
  constructor(private readonly fileSrv: File){
    if (Capacitor.isNativePlatform()) {
      this.ngOnInit();
    }
  }

  async ngOnInit() {

   await this.fileSrv.requestPermissions();
  }
}
