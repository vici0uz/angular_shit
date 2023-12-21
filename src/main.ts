import { platformBrowser } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ApplicationRef } from '@angular/core';
import { InicioModule } from './app/inicio/inicio.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(InicioModule)
// ApplicationRef.bootstrapApplication(InicioModule)
// bootstrapApplication(InicioModule, appConfig)
  // .catch((err) => console.error(err));
