import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMueblesComponent } from './agregar-muebles.component';

describe('AgregarMueblesComponent', () => {
  let component: AgregarMueblesComponent;
  let fixture: ComponentFixture<AgregarMueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarMueblesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarMueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
