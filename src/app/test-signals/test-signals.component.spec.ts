import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSignalsComponent } from './test-signals.component';

describe('TestSignalsComponent', () => {
  let component: TestSignalsComponent;
  let fixture: ComponentFixture<TestSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestSignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
