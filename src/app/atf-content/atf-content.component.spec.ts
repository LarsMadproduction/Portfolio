import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtfContentComponent } from './atf-content.component';

describe('AtfContentComponent', () => {
  let component: AtfContentComponent;
  let fixture: ComponentFixture<AtfContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtfContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtfContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
