import { TestBed } from '@angular/core/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';

describe('DataService', () => {
  let service: DataService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    // service = new ProductsService(httpClientSpy);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService, HttpClient],
    });
    service = TestBed.inject(DataService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get a random word', () => {
    let randomWordObservable = service.getRandomWord('Countries');

    expect(randomWordObservable).toBeTruthy();
  });
});
