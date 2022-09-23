import { Component } from '@angular/core';

@Component({
    selector: 'card-back',
    template: `
        <div class="card-back">
            <ng-content></ng-content>
        </div>
    `,
    styleUrls: ['./card.component.css']
})
export class CardBackComponent{}