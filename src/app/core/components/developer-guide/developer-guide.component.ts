import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'developer-guide',
  templateUrl: './developer-guide.component.html',
  styleUrls: ['./developer-guide.component.scss']
})
export class DeveloperGuideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navigateToDocs(){
    window.open(window.location.origin + '/docs', '_blank');
  }

}
