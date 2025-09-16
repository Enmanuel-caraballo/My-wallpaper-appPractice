import { Injectable } from '@angular/core';
import { Toast } from '@capacitor/toast'

@Injectable({
  providedIn: 'root'
})
export class NativeToast {
  async show(message: string){
    await Toast.show({
      text: message,
      duration: 'long',
      position: 'bottom',
    })
  }
}
