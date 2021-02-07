import { TestBed, async, inject } from '@angular/core/testing';
import { PostService } from './post.service';

describe('Service: Post', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostService]
    });
  });

  it('should create service', inject([PostService], (service: PostService) => {
    expect(service).toBeTruthy();
  }));
});

