import { Component, Input, OnInit } from '@angular/core';
import { IonFabButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.scss'],
  standalone: false,
})
export class FloatingButtonComponent  implements OnInit {
@Input() type: string = '';
@Input() color: string = '';
@Input() name: string = '';
@Input() horizontal = '';

  constructor() { }

  ngOnInit() {}

}
