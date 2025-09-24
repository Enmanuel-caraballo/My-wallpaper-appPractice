import { Component, OnInit } from '@angular/core';
import myCustomPlugin from 'src/app/plugins/myCustomPlugin';
import { Preferences } from '@capacitor/preferences';
import { GlobalUrl } from 'src/app/core/providers/globalUrl/global-url';

@Component({
  selector: 'app-sheet-modal',
  templateUrl: './sheet-modal.component.html',
  styleUrls: ['./sheet-modal.component.scss'],
  standalone: false
})
export class SheetModalComponent  implements OnInit {
   public actionSheetButtons = [
    {
      text: 'Change wallpaper',
      role: 'Llamar plugin',
      handler: () =>{
        this.callPlugin();
      }
    },
    {
      text: 'Change Lock Wallpaper',
      handler: () =>{
        this.callPluginLock();
      }
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

    public async callPlugin(){
     const url = this.urlSrv.getUrl();
     console.log(url);
    console.log('Calling plugin...');
    await Preferences.set({
      key: 'url',
      value: JSON.stringify({
        signedUrl: url,
        place: 'home'
      }),

    })
    const resp = await myCustomPlugin.execute();
    console.log('LOG: RESPONSE FROM PLUGIN', JSON.stringify(resp));

  }
      public async callPluginLock(){
     const url = this.urlSrv.getUrl();
     console.log(url);
    console.log('Calling plugin...');
    await Preferences.set({
      key: 'url',
      value: JSON.stringify({
        signedUrl: url,
        place: 'lock'
      }),

    })
    const resp = await myCustomPlugin.execute();
    console.log('LOG: RESPONSE FROM PLUGIN', JSON.stringify(resp));

  }
  constructor(private readonly urlSrv: GlobalUrl) { }

  ngOnInit() {}

}
