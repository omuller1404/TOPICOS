import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalesAltaComponent } from './animales-alta.component';

describe('AnimalesAltaComponent', () => {
  let component: AnimalesAltaComponent;
  let fixture: ComponentFixture<AnimalesAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalesAltaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalesAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
