import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TaskInterface } from '../interfaces/task.interface';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;
  let http: jasmine.SpyObj<HttpClient>;
  const taskTest: TaskInterface = {
    id: 1,
    description: '',
    completed: false
  };

  beforeEach(() => {

    const httpSpy = jasmine.createSpyObj<HttpClient>('HttpClient', [
      'get', 'post', 'patch', 'delete'
    ]);

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        TodoService,
        { provide: HttpClient, useValue: httpSpy }
      ]
    });
    service = TestBed.inject(TodoService);
    http = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('debe de crearse', () => {
    expect(service).toBeTruthy();
  });

  it('debe de obtener todas las tareas', () => {
    service.getAll();
    expect(http.get).toHaveBeenCalled();
    expect(http.get.calls.count()).toBe(1);
  });

  it('debe de agregar una tareas', () => {
    service.add(taskTest);
    expect(http.post).toHaveBeenCalled();
    expect(http.post.calls.count()).toBe(1);
  });

  it('debe de eliminar una tareas', () => {
    service.remove(taskTest.id);
    expect(http.delete).toHaveBeenCalled();
    expect(http.delete.calls.count()).toBe(1);
  });

  it('debe de actualizar una tareas', () => {
    service.update(taskTest.id, taskTest);
    expect(http.patch).toHaveBeenCalled();
    expect(http.patch.calls.count()).toBe(1);
  });
});
