//import './libs';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

if (process.env.ENV === 'production') {
  enableProdMode();
}
//document.write('<my-app></my-app>');
