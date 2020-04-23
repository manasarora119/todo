import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

import { DlvHttpService } from 'dlv-ng-auth';

@Injectable()
export class DashboardService {
    constructor(
        private http: DlvHttpService
    ) {
    }


    public getRequest(params?) {
        const option = {
            method: 'GET',
            query: params,
            body: { name: 'Pawan' },
            url: 'https://faas-dev-api.delhivery.com/v2/facilities/'
        };

        return this.http.httpRequest(option)
            .pipe(
                catchError(this.http.handleError),
                map(this.http.responseData)
            );
    }

}