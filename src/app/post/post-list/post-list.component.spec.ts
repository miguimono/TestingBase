/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";

import { PostListComponent } from './post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LikeComponent } from 'src/app/like/like.component';
import { DebugElement } from '@angular/core';
import { Post } from '../post';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PostListComponent, LikeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    component.posts = [new Post(1, "Post 1", "Content of post 1")];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("Should have an h1 tag", () => {
    expect(debug.query(By.css("h1")).nativeElement.innerText).toBe("List of posts");
  })
  it("Should have a div tag", () => {
    const tag = debug.query(By.css("div")).nativeElement.children;
    expect(tag.length).toBe(1);
    expect(tag[0].innerText).toContain("Post 1")
  })

});
