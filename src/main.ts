import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { TodoModule } from './modules/todo/todo.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(TodoModule)
  .catch(err => console.error(err));
