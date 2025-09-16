import { Injectable } from '@angular/core';
import { FilePicker} from '@capawesome/capacitor-file-picker'
import { NativeToast } from '../nativeToast/native-toast';
import { Capacitor } from '@capacitor/core';
import { IImage } from 'src/interfaces/image.interface';

@Injectable({
  providedIn: 'root'
})
export class File {
  constructor(private readonly toast: NativeToast){}

  async requestPermissions(){
    try {
      await FilePicker.requestPermissions();
      await this.toast.show('Permissions granted');

    } catch (error) {
      await this.toast.show('You must turn on manually mmgv')
    }
  }

  async pickImage(): Promise<IImage>{
    // if (!Capacitor.isNativePlatform()) throw new Error()
    try {
     const image = await FilePicker.pickImages({
        limit:1,
        readData: true,
      });
      const img = image.files[0];
      return{
        data: img.data || "",
        mimeType: img.mimeType,
        name: img.name,
      }
    } catch (error) {
      await this.toast.show('Unable to pick an image');
      throw error;
    }
  }
}
