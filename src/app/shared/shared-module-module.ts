import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from './services/user/user';
import { FloatingButtonComponent } from './components/floating-button/floating-button.component';
import { CardComponent } from './components/card/card.component';



const modules = [IonicModule, RouterModule, FormsModule, ReactiveFormsModule]
const components = [InputComponent, ButtonComponent, FloatingButtonComponent,CardComponent ]
const providers = [User]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule, modules
  ],
  providers: [providers],
  exports: [modules, components]
})
export class SharedModuleModule { }
