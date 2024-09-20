import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ServicesService } from './services.service';
import { ToDoItemInterface } from '../../models/ITodoInterface';

describe('ServicesService', () => {
  let service: ServicesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServicesService],
    });
    service = TestBed.inject(ServicesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all items', () => {
    const dummyItems: ToDoItemInterface[] = [
      { id: 1, title: 'Task 1', description: 'Description 1', isCompleted: false },
      { id: 2, title: 'Task 2', description: 'Description 2', isCompleted: true },
    ];

    service.getAll().subscribe(items => {
      expect(items.length).toBe(2);
      expect(items).toEqual(dummyItems);
    });

    const req = httpMock.expectOne('https://localhost:7202/api/todo');
    expect(req.request.method).toBe('GET');
    req.flush(dummyItems);
  });
});
