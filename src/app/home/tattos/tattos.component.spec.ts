import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TattosComponent } from './tattos.component';

describe('TattosComponent', () => {
  let component: TattosComponent;
  let fixture: ComponentFixture<TattosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TattosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TattosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
