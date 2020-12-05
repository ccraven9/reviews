import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleBuilderFormComponent } from './article-builder-form.component';

describe('ArticleBuilderFormComponent', () => {
  let component: ArticleBuilderFormComponent;
  let fixture: ComponentFixture<ArticleBuilderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleBuilderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleBuilderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
