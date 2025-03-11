import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideCardsComponent } from './guide-cards.component';

describe('GuideCardsComponent', () => {
  let component: GuideCardsComponent;
  let fixture: ComponentFixture<GuideCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuideCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuideCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
