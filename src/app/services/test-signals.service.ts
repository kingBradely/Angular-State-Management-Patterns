import { Injectable, signal } from '@angular/core';
import { OptionBox } from '../models/option-box.model';

/**
 * Service responsible for managing state persistence using localStorage.
 * This service works in conjunction with the NgRx Signal store to provide
 * data persistence across browser sessions.
 */
@Injectable({
  providedIn: 'root'
})
export class TestSignalsService {
  constructor() { }

  /**
   * Persists the option boxes data to localStorage.
   * Converts the OptionBox array to a JSON string before storage.
   * @param data Array of OptionBox objects to be saved
   */
  saveOptionBoxes(data: OptionBox[]): void {
    localStorage.setItem('data', JSON.stringify(data));
  }

  /**
   * Retrieves saved option boxes from localStorage.
   * Parses the stored JSON string back into an OptionBox array.
   * @returns Array of OptionBox objects if found, empty array if not found
   */
  loadSavedOptionBoxes(): OptionBox[] {
    const stringArray = localStorage.getItem('data');
    return stringArray ? JSON.parse(stringArray) : [];
  }
}
