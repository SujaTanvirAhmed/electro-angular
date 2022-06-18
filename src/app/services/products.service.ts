import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductInterface } from '../interfaces/product.interface';
import { api } from './api.config';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor(private http: HttpClient) { }

    getFeaturedProducts(): Observable<{ data: ProductInterface[] }> {
        return this.http.get<{ data: ProductInterface[] }>(api.root + api.featuredProducts);
    }

    getBestDealsProducts(): Observable<{ data: ProductInterface[] }> {
        return this.http.get<{ data: ProductInterface[] }>(api.root + api.bestDealsProducts);
    }

    getBestSellersProducts(): Observable<{ data: ProductInterface[] }> {
        return this.http.get<{ data: ProductInterface[] }>(api.root + api.bestSellersProducts);
    }

    getRecentlyViewedProducts(): Observable<{ data: ProductInterface[] }> {
        return this.http.get<{ data: ProductInterface[] }>(api.root + api.recentlyViewedProducts);
    }

}