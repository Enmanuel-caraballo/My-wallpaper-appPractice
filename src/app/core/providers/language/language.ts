import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
  providedIn: 'root'
})
export class Language {

  constructor(private readonly translateSrv: TranslateService){
    const currentLanguage = this.translateSrv.getBrowserLang();
    this.translateSrv.use(currentLanguage?.match(/en|es/) ? currentLanguage: 'en');
  }

  changeLang(language: string){
    this.translateSrv.use(language)
  }

}
