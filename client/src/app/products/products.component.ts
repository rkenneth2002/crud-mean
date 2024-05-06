import { Component, Inject, OnInit, inject } from '@angular/core';
import Product from '../types/product';
import { ProductService } from '../services/product.service';

import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatButtonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private prodService: ProductService) {}

  ngOnInit() {
    this.prodService.getProducts().subscribe((result) => {
      this.products = result;
    });
  }

  deleteProduct(id: string) {
    const ok = confirm('Are you sure you want to delete this product?');
    if (ok) {
      this.prodService.deleteProduct(id).subscribe((result) => {
        alert('Deleted Successfully!');
        this.products = this.products.filter((p) => p._id != id);
      });
    }
  }
}
