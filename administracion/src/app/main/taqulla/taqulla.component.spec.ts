import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaqullaComponent } from './taqulla.component';

describe('TaqullaComponent', () => {
  let component: TaqullaComponent;
  let fixture: ComponentFixture<TaqullaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaqullaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaqullaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
