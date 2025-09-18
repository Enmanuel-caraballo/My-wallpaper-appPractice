import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/core/providers/auth/auth';
import { File } from 'src/app/core/providers/file/file';
import { UpLoader } from 'src/app/core/providers/upLoader/up-loader';
import { IImage } from 'src/interfaces/image.interface';
import myCustomPlugin from 'src/app/plugins/myCustomPlugin';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  public img!: IImage;
  public imgUrl: string[] = [];
  public image: string = '';

  constructor(private readonly authSrv: Auth, private readonly router: Router, private readonly fileSrv: File,
    private readonly uploaderSrv: UpLoader,
  ) { }

  ngOnInit() {

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

       this.imgUrl.push(this.image);


  }

  public async callPlugin(){
    console.log('Calling plugin...');
    const resp = await myCustomPlugin.execute();
    console.log('LOG: RESPONSE FROM PLUGIN', JSON.stringify(resp));

  }

}
