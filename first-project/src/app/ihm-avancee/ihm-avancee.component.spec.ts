import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IhmAvanceeComponent } from './ihm-avancee.component';

describe('IhmAvanceeComponent', () => {
  let component: IhmAvanceeComponent;
  let fixture: ComponentFixture<IhmAvanceeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IhmAvanceeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IhmAvanceeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
