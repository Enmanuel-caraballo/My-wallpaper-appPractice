import { Component, OnInit } from '@angular/core';
import myCustomPlugin from 'src/app/plugins/myCustomPlugin';
import { Preferences } from '@capacitor/preferences';
import { GlobalUrl } from '../../../core/providers/globalUrl/global-url';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: false,
})
export class ModalComponent  implements OnInit {

  constructor(
    private readonly urlSrv: GlobalUrl,
  ) { }

  ngOnInit() {}

    public async callPlugin(){
     const url = this.urlSrv.getUrl();
     console.log(url);
    console.log('Calling plugin...');
    await Preferences.set({
      key: 'url',
      value: url,
    })
    const resp = await myCustomPlugin.execute();
    console.log('LOG: RESPONSE FROM PLUGIN', JSON.stringify(resp));

  }

}
