import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
  @Output() edit = new EventEmitter<Product>();

  @Output() delete = new EventEmitter<Product>();
  onEditProduct(product: Product): void {
    this.edit.emit(product);
  }

  onDeleteProduct(product: Product): void {
    this.delete.emit(product);
  }
}
