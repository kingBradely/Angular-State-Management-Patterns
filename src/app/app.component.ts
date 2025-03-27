import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'SequenceFlow';
  constructor(private router: Router, private cdr : ChangeDetectorRef) {}

  gotTo(link: string) {
    console.log(link);
    this.router.navigate([link]);
    this.cdr.markForCheck();
  }
}
