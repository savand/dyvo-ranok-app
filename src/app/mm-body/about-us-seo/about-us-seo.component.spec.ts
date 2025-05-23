import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsSeoComponent } from './about-us-seo.component';

describe('AboutUsSeoComponent', () => {
  let component: AboutUsSeoComponent;
  let fixture: ComponentFixture<AboutUsSeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsSeoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsSeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
