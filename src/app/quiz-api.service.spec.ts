import { TestBed } from '@angular/core/testing';

import { QuizAPIService } from './quiz-api.service';

describe('QuizAPIService', () => {
  let service: QuizAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
