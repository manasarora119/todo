import { Injectable, EventEmitter } from '@angular/core';
import { filter, map } from "rxjs/operators";

import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {
	
	constructor() {
	}

	private loadEvt = new Subject<any>();

	getLoadState(id){
		return this.loadEvt.asObservable().pipe(
			filter(evt => evt.id === id ),
			map(evt => evt.status)
		)
	}

	start(id = 'root') {
		this.loadEvt.next({
			id: id,
			status: true
		});
	}

	stop(id = 'root') {
		this.loadEvt.next({
			id: id,
			status: false
		});
	}
}