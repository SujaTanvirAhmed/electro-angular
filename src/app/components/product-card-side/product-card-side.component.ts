import { Component, Input } from '@angular/core';

@Component({
    selector: 'electro-product-card-side',
    templateUrl: './product-card-side.component.html',
    styleUrls: ['./product-card-side.component.css']
})
export class ProductCardSideComponent {
    @Input() productSubtitle: string = "";
    @Input() productTitle: string = "";
    @Input() productPhotoUrl: string = "";
    @Input() productPrice: number = 0;
}