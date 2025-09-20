import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalUrl {
  private imgUrl: string = '';
  private imgUrls: string[] = [];

  setUrl(url: string){
    this.imgUrl = url;
  }

  getUrl(): string{
    return this.imgUrl;
  }

  setUrls(urls: string[]){
    this.imgUrls = urls;
  }

  getUrls(): string[]{
    return this.imgUrls;
  }

  addUrl(url: string){
    this.imgUrls.push(url);
  }

}
