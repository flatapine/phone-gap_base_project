import {Component} from '@angular/core';
import {DefaultPageComponent} from '../defaultPage/defaultPage.component';

@Component({
    selector: 'my-app',
    template: '<ons-navigator [page]="page"></ons-navigator>'
})
export class AppComponent {
    page = DefaultPageComponent
}
