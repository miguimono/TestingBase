import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { PostService } from './post.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { Post } from './post';
import faker from "faker";

describe('Service: Post', () => {
  let injector: TestBed;
  let service: PostService;
  let httpMock: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostService]
    });
    injector = getTestBed();
    service = injector.get(PostService);
    httpMock = injector.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it('Prueba post service', inject([PostService], (service: PostService) => {
    expect(service).toBeTruthy();
  }));

  it('getPost() should return 10 records', () => {

    let mockPosts: Post[] = [];

    for (let i = 1; i < 11; i++) {
      let post = new Post(i, faker.lorem.sentence(), faker.lorem.sentence());
      mockPosts.push(post);
    }

    service.getPosts().subscribe((posts) => {
      expect(posts.length).toBe(10);
    });

    const req = httpMock.expectOne(() => true);
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });
});

