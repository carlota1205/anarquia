import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnarquiaContactComponent } from './anarquia-contact.component';

describe('AnarquiaContactComponent', () => {
  let component: AnarquiaContactComponent;
  let fixture: ComponentFixture<AnarquiaContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnarquiaContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnarquiaContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
