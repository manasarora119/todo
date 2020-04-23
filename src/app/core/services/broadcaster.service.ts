import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter, map } from "rxjs/operators";


export interface BroadcastEvent {
    key: any;
    data?: any;
}

@Injectable({
    providedIn: 'root'
})
export class BroadcasterService {
    private _eventBus = new Subject<BroadcastEvent>();

    publish(key: any, data?: any) {
        this._eventBus.next({key, data});
    }

    listen(key): Observable<BroadcastEvent> {
        return this._eventBus.asObservable().pipe(
            filter(event => event.key === key),
            map(event => event.data)
        )
    }

}

