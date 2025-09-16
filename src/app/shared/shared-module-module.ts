import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from './services/user/user';

const modules = [IonicModule, RouterModule, FormsModule, ReactiveFormsModule]
const components = [InputComponent, ButtonComponent]
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
