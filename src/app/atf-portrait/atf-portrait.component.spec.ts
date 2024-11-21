import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtfPortraitComponent } from './atf-portrait.component';

describe('AtfPortraitComponent', () => {
  let component: AtfPortraitComponent;
  let fixture: ComponentFixture<AtfPortraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtfPortraitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtfPortraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
