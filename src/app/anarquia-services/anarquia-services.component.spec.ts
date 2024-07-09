import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnarquiaServicesComponent } from './anarquia-services.component';

describe('AnarquiaServicesComponent', () => {
  let component: AnarquiaServicesComponent;
  let fixture: ComponentFixture<AnarquiaServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnarquiaServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnarquiaServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
