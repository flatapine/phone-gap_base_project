import {Component} from '@angular/core';
import {OnsNavigator, Params} from 'angular2-onsenui';

@Component({
    selector: 'ons-page',
    templateUrl: './src/components/page/page.template.html'
})
export class PageComponent {
    constructor(private _navigator: OnsNavigator, private _params: Params) {
        console.log('parameters:', _params.data);
    }

    push() {
        this._navigator.element.pushPage(PageComponent, {animation: 'slide', data: {foo: 'bar'}});
    }

    pop() {
        this._navigator.element.popPage();
    }
}
