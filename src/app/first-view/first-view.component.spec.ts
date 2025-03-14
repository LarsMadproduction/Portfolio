import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstViewComponent } from './first-view.component';

describe('FirstViewComponent', () => {
  let component: FirstViewComponent;
  let fixture: ComponentFixture<FirstViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
