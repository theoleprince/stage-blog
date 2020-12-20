import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlogCategorieComponent } from './add-blog-categorie.component';

describe('AddBlogCategorieComponent', () => {
  let component: AddBlogCategorieComponent;
  let fixture: ComponentFixture<AddBlogCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBlogCategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBlogCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
