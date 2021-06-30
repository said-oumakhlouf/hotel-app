import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteilDetailComponent } from './hoteil-detail.component';

describe('HoteilDetailComponent', () => {
  let component: HoteilDetailComponent;
  let fixture: ComponentFixture<HoteilDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoteilDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoteilDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
