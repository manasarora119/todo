import { Component, OnInit } from '@angular/core';

import { Router, Route } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    onLogin(status) {
        this.router.navigate(['dashboard'], { replaceUrl: true });
    }

}
