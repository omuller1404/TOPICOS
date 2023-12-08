import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaqullaVentaComponent } from './taqulla-venta.component';

describe('TaqullaVentaComponent', () => {
  let component: TaqullaVentaComponent;
  let fixture: ComponentFixture<TaqullaVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaqullaVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaqullaVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
