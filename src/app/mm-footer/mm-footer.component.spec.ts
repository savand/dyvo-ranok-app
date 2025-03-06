import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmFooterComponent } from './mm-footer.component';

describe('MmFooterComponent', () => {
  let component: MmFooterComponent;
  let fixture: ComponentFixture<MmFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MmFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MmFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
