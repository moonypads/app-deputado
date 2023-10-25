import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeDeputadosComponent } from './exibe-deputados.component';

describe('ExibeDeputadosComponent', () => {
  let component: ExibeDeputadosComponent;
  let fixture: ComponentFixture<ExibeDeputadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExibeDeputadosComponent]
    });
    fixture = TestBed.createComponent(ExibeDeputadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
