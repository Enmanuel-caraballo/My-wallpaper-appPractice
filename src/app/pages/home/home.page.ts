import { Component, OnInit } from '@angular/core';
import { user } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Auth } from 'src/app/core/providers/auth/auth';
import { File } from 'src/app/core/providers/file/file';
import { GlobalUid } from 'src/app/core/providers/globalUid/global-uid';
import { GlobalUrl } from 'src/app/core/providers/globalUrl/global-url';
import { GlobalUser } from 'src/app/core/providers/globalUser/global-user';
import { Language } from 'src/app/core/providers/language/language';
import { Query } from 'src/app/core/providers/query/query';
import { UpLoader } from 'src/app/core/providers/upLoader/up-loader';
import { IImage } from 'src/interfaces/image.interface';
// import myCustomPlugin from 'src/app/plugins/myCustomPlugin';
// import { Preferences } from '@capacitor/preferences'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  name: string = '';
  lastName: string = '';
  public img!: IImage;
  // public imgUrl: string[] = [];
  public image: string = '';

  constructor(private readonly authSrv: Auth,
    private readonly router: Router,
    private readonly fileSrv: File,
    private readonly uploaderSrv: UpLoader,
    private readonly urlSrv: GlobalUrl,
    private readonly langSrv: Language,
    private readonly globalUidSrv: GlobalUid,
    private readonly querySrv: Query,
    private readonly userSrv: GlobalUser
  ) { }

  ngOnInit() {

  }

  public languageChanger(event: any){
    const el = event.currentTarget as HTMLElement;
    const lang = el.getAttribute('data-lang');
    this.langSrv.changeLang(lang ?? 'en');
  }

    public async logOut(){
   await this.authSrv.logOut();
    this.router.navigate(['/login']);
  }

  public async pickImage(){
    this.img = await this.fileSrv.pickImage();

   const path = await this.uploaderSrv.upload('images',
       `${Date.now()}-${this.img.name}`,
       this.img.mimeType,
       this.img.data);
       console.log(path);

      //  const hola = await this.uploaderSrv.getUrls('images', path as any);
      //  console.log(hola);

       this.image = await this.uploaderSrv.getUrl('images', path);

      //  this.imgUrl.push(this.image);

       this.urlSrv.setUrl(this.image); //Seteamos la url para hacerla global con el servicio

       this.urlSrv.addUrl(this.image);//Array glodal de imagenes

  }

  public async goToSettings(){
  this.authSrv.getCurrentuser();

   const uid = this.globalUidSrv.getUid();
   console.log(uid);
  const users =  await this.querySrv.getById('users', uid);

    if (users) {
      const user = users[0];

      this.name = user.name;
      console.log(this.name);

      this.userSrv.setName(this.name);
      console.log(user.name),

      this.lastName = user.lastName;
      console.log(this.lastName);

      this.userSrv.setLastName(this.lastName);
      console.log(user.lastName);

        this.router.navigate(['/user-config'])
     }



  }



  // public async callPlugin(){
  //   console.log('Calling plugin...');
  //   const resp = await myCustomPlugin.execute();
  //   console.log('LOG: RESPONSE FROM PLUGIN', JSON.stringify(resp));

  // }

}
