import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebContainerComponent } from './web-container.component';

describe('WebContainerComponent', () => {
  let component: WebContainerComponent;
  let fixture: ComponentFixture<WebContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
