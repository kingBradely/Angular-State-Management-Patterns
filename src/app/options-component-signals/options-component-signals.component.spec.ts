import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsComponentSignalsComponent } from './options-component-signals.component';

describe('OptionsComponentSignalsComponent', () => {
  let component: OptionsComponentSignalsComponent;
  let fixture: ComponentFixture<OptionsComponentSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionsComponentSignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsComponentSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
