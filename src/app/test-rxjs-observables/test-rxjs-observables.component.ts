import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsComponentRxjsComponent } from '../options-component-rxjs/options-component-rxjs.component';
import { TestRxjsService } from '../services/test-rxjs.service';
import { Subscription } from 'rxjs';
import { OptionBox } from '../models/option-box.model';

@Component({
  selector: 'app-test-rxjs-observables',
  standalone: true,
  imports: [CommonModule, OptionsComponentRxjsComponent],
  templateUrl: './test-rxjs-observables.component.html',
  styleUrl: './test-rxjs-observables.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestRxjsObservablesComponent implements OnInit, OnDestroy {
  optionBoxes: OptionBox[] = [];
  currentTabButton: number = 0;
  showOptionsCard: boolean = false;
  private subscriptions = new Subscription();

  constructor(private testRxjsService: TestRxjsService, private cdr : ChangeDetectorRef) {}

  ngOnInit(): void {
    if (this.testRxjsService.loadSavedOptionBoxes().length === 0) {
      this.initialFillTheArray();
    } else {
      this.testRxjsService.updateOptionBoxes(
        this.testRxjsService.loadSavedOptionBoxes()
      );
    }
    this.getDataFromSubscription();
    this.getCurrentPosition();
    this.cdr.markForCheck();
  }

  getDataFromSubscription() {
    const savedDataSub = this.testRxjsService
      .getSavedOptions()
      .subscribe((data) => {
        this.optionBoxes = data;
      });
    this.subscriptions.add(savedDataSub);
    this.cdr.markForCheck();
  }

  getCurrentPosition() {
    const positionSub = this.testRxjsService
      .getCurrentPosition()
      .subscribe((position) => {
        this.currentTabButton = position;
      });
    this.subscriptions.add(positionSub);
    this.cdr.markForCheck();
  }

  initialFillTheArray() {
    let array: OptionBox[] = [];
    for (let index = 1; index < 11; index++) {
      const element: OptionBox = {
        index: index,
        value: 'select element',
      };
      array.push(element);
    }
    this.optionBoxes = array;
    this.testRxjsService.updateOptionBoxes(this.optionBoxes);
    this.cdr.markForCheck();
  }

  selectTabButton(index: number) {
    this.currentTabButton = index;
    this.testRxjsService.changeCurrentPosition(this.currentTabButton);
    this.showOptionsCard = true;
    this.cdr.markForCheck();
  }

  resetOptionsBox() {
    this.initialFillTheArray();
    this.cdr.markForCheck();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.cdr.markForCheck();
  }
}
