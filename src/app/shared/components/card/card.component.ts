import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone:false
})
export class CardComponent  implements OnInit {
  @Input() src: string = '';
  

  constructor() { }

  ngOnInit() {}

}
