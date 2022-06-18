import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'electro-bestsellers',
    templateUrl: './bestsellers.component.html',
    styleUrls: ['./bestsellers.component.css']
})
export class BestsellersComponent implements OnInit {

    public bestSellersProducts: ProductInterface[] = [];

    constructor(private productsService: ProductsService) { }

    ngOnInit(): void {
        this.getBestSellersProducts();
    }

    getBestSellersProducts() {
        this.productsService.getBestSellersProducts()
            .subscribe(res => this.bestSellersProducts = res.data);
    }
}