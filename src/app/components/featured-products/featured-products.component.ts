import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'electro-featured-products',
    templateUrl: './featured-products.component.html',
    styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {

    public featuredProducts: ProductInterface[] = [];

    constructor(private productsService: ProductsService) { }

    ngOnInit(): void {
        this.getFeaturedProducts();
    }

    getFeaturedProducts() {
        this.productsService.getFeaturedProducts()
            .subscribe({
                next: response => {
                    this.featuredProducts = response.data;
                },
                error: e => {
                    console.error("Error loading featured products!");
                },
                complete: () => {
                    console.info("Featured products downloaded!");
                }
            });
    }

}