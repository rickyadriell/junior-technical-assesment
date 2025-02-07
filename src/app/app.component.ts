import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductService } from './services/product.service';
import { Product } from './models/product.model';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProductFormComponent, ProductCardComponent],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'junior-technical-assesment';
  selectedProduct?: Product;
  products: Product[] = [];
  isLoading = false;

  errorMessage: string | null = null;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts(): void {
    this.isLoading = true;
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products
        this.clearErrorMessage();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading products:', error);
        this.isLoading = false;
      }
    });
  }

  onSaveProduct(productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): void {
    if (this.selectedProduct) {
      this.productService.updateProduct(this.selectedProduct.id, productData).subscribe({
        next: () => {
          this.loadProducts();
          this.clearErrorMessage();
          this.selectedProduct = undefined;
        },
        error: (error) => {
          console.error('Error updating product:', error);
          this.handleErrorMessage(`Error updating product: ${error.errors?.length ? error.errors[0] : error.message}`)
        }
      });
    } else {
      this.productService.createProduct(productData).subscribe({
        next: () => {
          this.loadProducts();
          this.clearErrorMessage();
          this.selectedProduct = undefined;
        },
        error: (error) => {
          console.error('Error creating product:', error);
          this.handleErrorMessage(`Error creating product: ${error.errors?.length ? error.errors[0] : error.message}`)
        }
      });
    }
  }

  onEditProduct(product: Product): void {
    this.selectedProduct = product;
  }

  onDeleteProduct(product: Product): void {
    this.productService.deleteProduct(product.id).subscribe({
      next: (success) => {
        if (success) {
          this.loadProducts();
          this.clearErrorMessage();
        }
      },
      error: (error) => {
        this.handleErrorMessage(`Error deleting product: ${error.errors?.length ? error.errors[0] : error.message}`)
        console.error('Error deleting product:', error);
      }
    });
  }

  onCancelForm(): void {
    this.selectedProduct = undefined;
  }

  handleErrorMessage(message: string) {
    this.errorMessage = message;
  }

  clearErrorMessage() {
    this.errorMessage = null;
  }
}
