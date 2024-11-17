import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSingleListComponent } from './portfolio-single-list.component';

describe('PortfolioSingleListComponent', () => {
  let component: PortfolioSingleListComponent;
  let fixture: ComponentFixture<PortfolioSingleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioSingleListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioSingleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
