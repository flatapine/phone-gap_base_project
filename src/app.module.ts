import {OnsenModule} from 'angular2-onsenui';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {AppComponent}         from './components/app/app.component';
import {DefaultPageComponent} from './components/defaultPage/defaultPage.component';
import {PageComponent}        from './components/page/page.component';

@NgModule({
  imports:         [OnsenModule],
  declarations:    [AppComponent, DefaultPageComponent, PageComponent],
  entryComponents: [DefaultPageComponent, PageComponent],
  bootstrap:       [AppComponent],
  schemas:         [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

}