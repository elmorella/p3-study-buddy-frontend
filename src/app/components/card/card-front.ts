import { Component } from "@angular/core";

@Component({
    selector: 'card-front',
    template: `
    <div class="card-front">
        <ng-content></ng-content>
    </div>
    `,
    styleUrls: ['./card.component.css']
})
export class CardFrontComponent {}