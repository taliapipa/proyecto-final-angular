import { Component } from '@angular/core';
import { SpinnerService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-loading',
  template: 
  `<div class="overlay" *ngIf="isLoading$ | async">
    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
  </div>`,
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {

  isLoading$ = this.spinnerService.isLoading$;

  constructor(private spinnerService: SpinnerService) { }

}
