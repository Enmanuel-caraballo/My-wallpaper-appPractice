import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserConfigPageRoutingModule } from './user-config-routing.module';

import { UserConfigPage } from './user-config.page';
import { SharedModuleModule } from "src/app/shared/shared-module-module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserConfigPageRoutingModule,
    SharedModuleModule
],
  declarations: [UserConfigPage]
})
export class UserConfigPageModule {}
