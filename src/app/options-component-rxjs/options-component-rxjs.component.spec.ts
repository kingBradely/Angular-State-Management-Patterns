import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsComponentRxjsComponent } from './options-component-rxjs.component';

describe('OptionsComponentRxjsComponent', () => {
  let component: OptionsComponentRxjsComponent;
  let fixture: ComponentFixture<OptionsComponentRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionsComponentRxjsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsComponentRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
