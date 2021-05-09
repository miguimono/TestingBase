/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeComponent } from './like.component';

describe('LikeComponent', () => {
  let component: LikeComponent;
  let fixture: ComponentFixture<LikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LikeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("Likes should have a 0 value", () => {
    expect(component.getLikes()).toEqual(0);
  });
  it("Dislikes should have a 0 value", () => {
    expect(component.getDislikes()).toEqual(0);
  });
  it("Likes should increment value", () => {
    component.upLikes();
    expect(component.getLikes()).toEqual(1);
  });
  it("Dislikes should increment value", () => {
    component.upDislikes();
    expect(component.getDislikes()).toEqual(1);
  });

});
