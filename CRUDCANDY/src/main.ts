import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  /*
  <script>    SystemJS.config({
    packages: {
        "CRUDCANDY": {
            "main": "main",
            "defaultExtension": "js"
        }
    }
  });
  System.import("js");</script>
  ERA PARTE DE INDEX.HTML */ 