import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {
    provideBrowserGlobalErrorListeners,
    provideZoneChangeDetection,
} from '@angular/core';

import {provideHttpClient} from "@angular/common/http";
import {provideTranslateService,} from "@ngx-translate/core";
import {provideTranslateHttpLoader} from "@ngx-translate/http-loader";

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core-module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CoreModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideTranslateService({
      lang: 'en',
      fallbackLang: 'en',
      loader: provideTranslateHttpLoader({
        prefix: 'assets/i18n/',
        suffix: '.json'
      })
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

