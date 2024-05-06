import { Component, inject } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import Product from '../../types/product';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent {
  formBuilder = inject(FormBuilder);
  userForm: FormGroup = this.formBuilder.group({
    prod_name: [''],
    prod_color: [''],
    prod_category: [''],
    prod_price: [''],
  });

  productService = inject(ProductService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  editProdId!: string;

  ngOnInit() {
    this.editProdId = this.route.snapshot.params['id'];
    if (this.editProdId) {
      this.productService.getProduct(this.editProdId).subscribe((result) => {
        this.userForm.patchValue(result);
      });
    }
  }

  createProduct() {
    const model: Product = this.userForm.value;
    this.productService.addProduct(model).subscribe((result) => {
      alert('Product Created Successfully!');
      this.router.navigateByUrl('/products');
    });
  }

  updateProduct() {
    const model: Product = this.userForm.value;
    this.productService
      .updateProduct(this.editProdId, model)
      .subscribe((result) => {
        alert('Updated Successfully');
        this.router.navigateByUrl('/products');
      });
  }
}
