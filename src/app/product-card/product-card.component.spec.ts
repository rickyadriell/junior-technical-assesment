import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardComponent } from './product-card.component';
import { Product } from '../models/product.model';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  let product: Product
  beforeEach(async () => {
    product = {
      id: '1',
      name: 'Test Product',
      description: 'Test Description',
      department: 'Test Department',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    await TestBed.configureTestingModule({
      imports: [ProductCardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    component.product = product;
    fixture.detectChanges();
  });

  it('should create product card', () => {
    expect(component).toBeTruthy();
  });

  it('should display product name', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain(product.name);
  });

  it('should display product description', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain(product.description);
  });

  it('should display product department', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain(product.department);
  });

  it('should emit edit event', () => {
    const editSpy = jest.spyOn(component.edit, 'emit');
    component.onEditProduct(product);
    expect(editSpy).toHaveBeenCalledWith(product);
  });

  it('should emit delete event', () => {
    const deleteSpy = jest.spyOn(component.delete, 'emit');
    component.onDeleteProduct(product);
    expect(deleteSpy).toHaveBeenCalledWith(product);
  });
});
