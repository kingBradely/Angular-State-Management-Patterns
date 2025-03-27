import { ChangeDetectionStrategy, ChangeDetectorRef, Component, effect, inject } from '@angular/core';
import { Data } from '@angular/router';
import { TestSignalsService } from '../services/test-signals.service';
import { CommonModule } from '@angular/common';
import { OptionBoxStore } from '../store/option-box.store';
import { OptionBox } from '../models/option-box.model';

/**
 * Component that displays and manages the selection of options using NgRx Signals.
 * This component provides a user interface for selecting different tumbling moves
 * and maintains synchronization with the central state store.
 */
@Component({
  selector: 'app-options-component-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './options-component-signals.component.html',
  styleUrl: './options-component-signals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptionsComponentSignalsComponent {
  /** Inject the signal store for state management */
  store = inject(OptionBoxStore);

  /** Available front salto tumbling options */
  frontSaltoTumbling = [". - o", ". - <", ". 1", ". 2", ". 3", ". 4", ".- o", ".- <"];

  /** Available back salto tumbling options */
  backSaltoTumbling = ["- o", "- <", "- /", "- o x", "- < x", "1 . /", "2.", "3. 4", "5. 6", "7. 8", "- - o", "- - <", "- - /", "- - < x", "1 - o", "1 - <", "- 1 o", "- 1 <", "- 1 /", ". - 1 o", ". - 1 <", "2 - o", "2 - <", "2 - /", "2 1 /", "2 2 o", "2 2 /", "2 3 o", "2 3 /", "2 4 o", "2 4 /", "4 4 /", "- - o", "- - <", "- - /", "1 - - o"];

  /** Additional tumbling options */
  otherTumbling = ["(", "H", "F", "A"];

  /** Current state of all option boxes */
  boxOptions: OptionBox[] = [];

  /** Currently selected tab position */
  currentPosition: number = this.store.currentTabIndex();

  /** Currently selected option box data */
  currentDataSelected: Data | undefined;

  constructor(private cdr: ChangeDetectorRef) {
    // Effect to automatically update local state when store changes
    effect(() => {
      this.boxOptions = this.store.data();
      this.currentPosition = this.store.currentTabIndex();
      if (this.currentPosition > 0 && this.currentPosition <= this.boxOptions.length) {
        this.currentDataSelected = this.boxOptions[this.currentPosition - 1];
      } else {
        this.currentDataSelected = undefined;
      }
      this.cdr.markForCheck();
    });
  }

  /**
   * Updates the value of the currently selected option box and advances to the next position
   * @param value The new value to set for the current option box
   */
  setOptionValue(value: string) {
    if (this.currentPosition > 0 && this.currentPosition <= this.boxOptions.length) {
      this.boxOptions[this.currentPosition - 1]['value'] = value;
      if (this.boxOptions.length > this.currentPosition) {
        this.store.changeCurrentTabIndex(this.currentPosition + 1);
      }
      this.store.updateOptionBox(this.boxOptions);
    }
  }
}