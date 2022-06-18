import { Component, Input } from '@angular/core';

@Component({
    selector: 'electro-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
    @Input() productTitle: string = "";
    @Input() productSubtitle: string = "";
    @Input() productPrice: number = 0;
    @Input() productImage: string = "";
}