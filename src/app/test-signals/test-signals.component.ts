import { ChangeDetectionStrategy, ChangeDetectorRef, Component, effect, inject } from '@angular/core';
import { TestSignalsService } from '../services/test-signals.service';
import { CommonModule } from '@angular/common';
import { OptionsComponentSignalsComponent } from "../options-component-signals/options-component-signals.component";
import { OptionBoxStore } from '../store/option-box.store';
import { OptionBox } from '../models/option-box.model';

/**
 * Component that implements the box selection feature using NgRx Signals.
 * This component demonstrates reactive state management with signals,
 * including state persistence and change detection optimization.
 */
@Component({
  selector: 'app-test-signals',
  standalone: true,
  imports: [
    CommonModule,
    OptionsComponentSignalsComponent
  ],
  templateUrl: './test-signals.component.html',
  styleUrl: './test-signals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestSignalsComponent {
  /** Inject the signal store for state management */
  store = inject(OptionBoxStore);
  
  /** Local reference to the option boxes from the store */
  optionBoxes: OptionBox[] = this.store.data();
  
  /** Track the currently selected tab position */
  currentPosition = this.store.currentTabIndex();
  
  /** Control visibility of the options card */
  showOptionsCard: boolean = false;

  constructor(private testSignalService: TestSignalsService, private cdr: ChangeDetectorRef) {
    // Effect to automatically update local state when store changes
    effect(() => {
      this.optionBoxes = this.store.data();
      this.currentPosition = this.store.currentTabIndex();
      this.cdr.markForCheck();
    });
  }

  /**
   * Initialize the component by loading saved data or creating new option boxes
   */
  ngOnInit(): void {
    this.cdr.markForCheck();
    const savedData = this.testSignalService.loadSavedOptionBoxes();
    if (savedData.length === 0) {
      this.initiateOrResetTheBoxes();
    } else {
      this.store.updateOptionBox(savedData);
    }
    this.cdr.markForCheck();
  }

  /**
   * Creates or resets the option boxes to their initial state
   * Initializes 10 option boxes with default values
   */
  initiateOrResetTheBoxes() {
    const array: OptionBox[] = [];
    for (let index = 1; index < 11; index++) {
      const element: OptionBox = {
        index: index,
        value: 'select element'
      };
      array.push(element);
    }
    this.optionBoxes = array;
    this.store.updateOptionBox(this.optionBoxes);
    this.cdr.markForCheck();
  }

  /**
   * Handles tab selection and updates the store state
   * @param index The index of the selected tab
   */
  selectTabButton(index: number) {
    this.currentPosition = index;
    this.store.changeCurrentTabIndex(index);
    this.showOptionsCard = true;
    this.cdr.markForCheck();
  }

  /**
   * Resets all option boxes to their initial state
   */
  resetOptionsBoxes() {
    this.initiateOrResetTheBoxes();
    this.cdr.markForCheck();
  }
}