import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMessagesComponent } from './search-messages.component';

describe('SearchMessagesComponent', () => {
  let component: SearchMessagesComponent;
  let fixture: ComponentFixture<SearchMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
