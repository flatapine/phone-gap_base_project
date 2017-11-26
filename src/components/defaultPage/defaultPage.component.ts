import {Component} from '@angular/core';
import {OnsNavigator, Params} from 'angular2-onsenui';

import {PageComponent} from '../page/page.component';

@Component({
    selector: 'ons-page',
    templateUrl: './src/components/defaultPage/defaultPage.template.html'
})
export class DefaultPageComponent {
    constructor(private _navigator: OnsNavigator, private _params: Params) {
        console.log('parameters:', _params.data);
    }
    push() {
        // 遷移
        this._navigator.element.pushPage(PageComponent, {data: {hoge: 'fuga'}});
    }
}