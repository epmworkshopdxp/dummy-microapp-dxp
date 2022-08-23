import { Injectable } from '@angular/core';
import { ILoaderState } from '../model/interface-loader-state';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LoaderService {

    public loaderSubject = new Subject<ILoaderState>();

    public show() {
        this.loaderSubject.next({ show: true } as ILoaderState);
    }

    public close() {
        this.loaderSubject.next({ show: false } as ILoaderState);
    }

}
