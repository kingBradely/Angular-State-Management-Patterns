import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { TestSignalsService } from '../services/test-signals.service';
import { OptionBox } from '../models/option-box.model';

/**
 * Interface defining the shape of the OptionBox state.
 * This state structure is used by the NgRx Signal store to manage the application's state.
 */
interface OptionBoxState {
  /** Array of OptionBox objects representing the selectable options */
  data: OptionBox[];
  /** Current active tab index, used for tracking selected option */
  currentTabIndex: number;
}

/**
 * Initial state configuration for the OptionBox store.
 * Provides default values when the store is first initialized.
 */
const initialState: OptionBoxState = {
  data: [],
  currentTabIndex: 0
};

/**
 * NgRx Signal store for managing OptionBox state.
 * This store provides a centralized state management solution using NgRx Signals,
 * offering reactive state updates and integration with local storage for persistence.
 */
export const OptionBoxStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => {
    // Inject the TestSignalsService for local storage operations
    const testSignalService = inject(TestSignalsService);

    return {
      /**
       * Updates the current tab index in the store.
       * This method is called when a new tab is selected in the UI.
       * @param index - The new tab index to set
       */
      changeCurrentTabIndex(index: number) {
        patchState(store, (state) => ({
          currentTabIndex: index
        }));
      },

      /**
       * Updates the option boxes data in the store and persists it to local storage.
       * This method is called when the option boxes are modified.
       * @param optionBoxes - The new array of option boxes to store
       */
      updateOptionBox(optionBoxes: OptionBox[]) {
        patchState(store, (state) => ({
          data: optionBoxes
        }));
        // Persist the updated state to local storage
        testSignalService.saveOptionBoxes(optionBoxes);
      }
    };
  })
);
