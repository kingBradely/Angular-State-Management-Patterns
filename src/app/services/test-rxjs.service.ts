import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OptionBox } from '../models/option-box.model';

/**
 * Service responsible for managing the state of option boxes using RxJS BehaviorSubjects.
 * Handles data persistence through localStorage and provides reactive state updates.
 */
@Injectable({
  providedIn: 'root'
})
export class TestRxjsService {
  /**
   * BehaviorSubject that holds and manages the array of option boxes.
   * Initial value is an empty array.
   */
  private dataSubject = new BehaviorSubject<OptionBox[]>([]);

  /**
   * BehaviorSubject that tracks the current tab position.
   * Initial value is 0 (first tab).
   */
  private currentTabButtonSubject = new BehaviorSubject<number>(0);

  constructor() { }

  /**
   * Persists the option boxes data to localStorage.
   * @param data Array of OptionBox objects to be saved
   */
  saveOptionBoxes(data: OptionBox[]): void {
    localStorage.setItem('data', JSON.stringify(data));
  }

  /**
   * Retrieves saved option boxes from localStorage.
   * @returns Array of OptionBox objects if found, empty array if not found or on error
   */
  loadSavedOptionBoxes(): OptionBox[] {
    const dataString = localStorage.getItem('data');
    try {
      return dataString ? JSON.parse(dataString) : [];
    } catch (error) {
      console.error('Error parsing data from local storage', error);
      return [];
    }
  }

  /**
   * Updates the option boxes state and notifies all subscribers.
   * @param data New array of OptionBox objects
   */
  updateOptionBoxes(data: OptionBox[]): void {
    this.dataSubject.next(data);
  }

  /**
   * Provides an Observable stream of the option boxes state.
   * @returns Observable<OptionBox[]> that emits the current option boxes array
   */
  getSavedOptions(): Observable<OptionBox[]> {
    return this.dataSubject.asObservable();
  }

  /**
   * Updates the current tab position and notifies all subscribers.
   * @param index New tab position index
   */
  changeCurrentPosition(index: number): void {
    this.currentTabButtonSubject.next(index);
  }

  /**
   * Provides an Observable stream of the current tab position.
   * @returns Observable<number> that emits the current tab index
   */
  getCurrentPosition(): Observable<number> {
    return this.currentTabButtonSubject.asObservable();
  }
}
