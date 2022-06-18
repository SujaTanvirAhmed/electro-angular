import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'electro-recently-viewed',
    templateUrl: './recently-viewed.component.html',
    styleUrls: ['./recently-viewed.component.css']
})
export class RecentlyViewedComponent implements OnInit {

    public recentlyViewedProducts: ProductInterface[] = [];

    constructor(private productsService: ProductsService) { }

    ngOnInit(): void {
        this.getRecentlyViewedProducts();
    }

    getRecentlyViewedProducts() {
        this.productsService.getRecentlyViewedProducts()
            .subscribe(res => this.recentlyViewedProducts = res.data);
    }
}