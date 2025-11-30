import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductsService } from '../../products.service';
import { Product } from '../../../types/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
})
export class ProductsComponent implements OnInit {
  getAllProducts = inject(ProductsService);
  products = signal<Product[]>([]);
  constructor() {}

  ngOnInit(): void {
    this.initProducts();
  }

  initProducts() {
    this.getAllProducts.getAllProducts().subscribe((res) => {
      console.log(res);
      this.products.set((res as any).products);
    });
  }
}
