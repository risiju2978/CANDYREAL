import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMueblesComponent } from './editar-muebles.component';

describe('EditarMueblesComponent', () => {
  let component: EditarMueblesComponent;
  let fixture: ComponentFixture<EditarMueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarMueblesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarMueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
