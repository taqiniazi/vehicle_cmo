import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationOfReceiptOfIssuedPetrolComponent } from './information-of-receipt-of-issued-petrol.component';

describe('InformationOfReceiptOfIssuedPetrolComponent', () => {
  let component: InformationOfReceiptOfIssuedPetrolComponent;
  let fixture: ComponentFixture<InformationOfReceiptOfIssuedPetrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationOfReceiptOfIssuedPetrolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationOfReceiptOfIssuedPetrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
