import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/product.interface';
import { ProductsService } from '../../services/products.service';

@Component({
    selector: 'electro-best-deals',
    templateUrl: './best-deals.component.html',
    styleUrls: ['./best-deals.component.css']
})
export class BestDealsComponent implements OnInit {

    public bestDealsProducts: ProductInterface[] = [];

    constructor(private productsService: ProductsService) { }

    ngOnInit(): void {
        this.getBestDealsProducts();
    }

    getBestDealsProducts() {
        this.productsService.getBestDealsProducts()
            .subscribe(res => this.bestDealsProducts = res.data);
    }
}