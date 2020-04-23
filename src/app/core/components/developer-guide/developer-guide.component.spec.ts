import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperGuideComponent } from './developer-guide.component';

describe('DeveloperGuideComponent', () => {
  let component: DeveloperGuideComponent;
  let fixture: ComponentFixture<DeveloperGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
