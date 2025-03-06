import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmHeadComponent } from './mm-head.component';

describe('MmHeadComponent', () => {
  let component: MmHeadComponent;
  let fixture: ComponentFixture<MmHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MmHeadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MmHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
