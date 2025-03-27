import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRxjsObservablesComponent } from './test-rxjs-observables.component';

describe('TestRxjsObservablesComponent', () => {
  let component: TestRxjsObservablesComponent;
  let fixture: ComponentFixture<TestRxjsObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestRxjsObservablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestRxjsObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
