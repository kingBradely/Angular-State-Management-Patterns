import { Routes } from '@angular/router';
import { TestRxjsObservablesComponent } from './test-rxjs-observables/test-rxjs-observables.component';
import { TestSignalsComponent } from './test-signals/test-signals.component';

export const routes: Routes = [
    {path:"test-rxjs",component:TestRxjsObservablesComponent},
    {path:"test-signals",component:TestSignalsComponent},

];
