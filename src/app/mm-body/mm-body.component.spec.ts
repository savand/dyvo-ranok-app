import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmBodyComponent } from './mm-body.component';

describe('MmBodyComponent', () => {
  let component: MmBodyComponent;
  let fixture: ComponentFixture<MmBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MmBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MmBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
