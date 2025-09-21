import { Component, Input, OnInit } from '@angular/core';
import { GlobalUrl } from 'src/app/core/providers/globalUrl/global-url';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone:false
})
export class CardComponent  implements OnInit {
  @Input() src: string = '';


  public imgUrl: string[] = [];



  constructor(private readonly urlSrv: GlobalUrl) { }

  ngOnInit() {
   this.imgUrl = this.urlSrv.getUrls();
  }

  setNewUrl(url: string){
    this.urlSrv.setUrl(url);
  }

}
