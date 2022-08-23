import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ILoaderState } from './model/interface-loader-state';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {

  public show = false;

  private subscription: Subscription | null = null;

  constructor(
    private loaderService: LoaderService,
  ) {
  }

  public ngOnInit() {
    this.subscription = this.loaderService.loaderSubject
      .subscribe((state: ILoaderState) => {
        this.show = state.show;
      });
  }

  public ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
