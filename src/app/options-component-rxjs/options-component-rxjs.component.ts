import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { TestRxjsService } from '../services/test-rxjs.service';
import { CommonModule } from '@angular/common';
import { OptionBox } from '../models/option-box.model';

@Component({
  selector: 'app-options-component-rxjs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './options-component-rxjs.component.html',
  styleUrl: './options-component-rxjs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionsComponentRxjsComponent implements OnInit, OnDestroy {
  frontSaltoTumbling = [
    '. - o',
    '. - <',
    '. 1',
    '. 2',
    '. 3',
    '. 4',
    '.- o',
    '.- <',
  ];

  backSaltoTumbling = [
    '- o',
    '- <',
    '- /',
    '- o x',
    '- < x',
    '1 . /',
    '2.',
    '3. 4',
    '5. 6',
    '7. 8',
    '- - o',
    '- - <',
    '- - /',
    '- - < x',
    '1 - o',
    '1 - <',
    '- 1 o',
    '- 1 <',
    '- 1 /',
    '. - 1 o',
    '. - 1 <',
    '2 - o',
    '2 - <',
    '2 - /',
    '2 1 /',
    '2 2 o',
    '2 2 /',
    '2 3 o',
    '2 3 /',
    '2 4 o',
    '2 4 /',
    '4 4 /',
    '- - o',
    '- - <',
    '- - /',
    '1 - - o',
  ];

  otherTumbling = ['(', 'H', 'F', 'A'];
  private subscriptions = new Subscription();
  boxOptions: OptionBox[] = [];
  currentPosition: number = 0;
  currentDataSelected: OptionBox = { value: '', index: 0 };

  constructor(private testRxjsService: TestRxjsService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getDataFromSubscription();
    this.getCurrentPosition();
    this.cdr.markForCheck();
  }

  getDataFromSubscription() {
    const savedDataSub = this.testRxjsService
      .getSavedOptions()
      .subscribe((data) => {
        this.boxOptions = data;
      });
    this.subscriptions.add(savedDataSub);
    this.cdr.markForCheck();
  }

  getCurrentPosition() {
    const positionSub = this.testRxjsService
      .getCurrentPosition()
      .subscribe((position) => {
        this.currentPosition = position;
        this.currentDataSelected = this.boxOptions[this.currentPosition - 1];
        this.cdr.markForCheck();
      });
    this.subscriptions.add(positionSub);
  }

  setOptionValue(value: string) {
    this.boxOptions[this.currentPosition - 1].value = value;
    if (this.boxOptions.length > this.currentPosition) {
      this.testRxjsService.changeCurrentPosition(this.currentPosition + 1);
    }
    this.testRxjsService.saveOptionBoxes(this.boxOptions);
    this.cdr.markForCheck();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.cdr.markForCheck();
  }
}
