import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { TaskInterface } from '../../interfaces/task.interface';
import { TodoService } from '../../services/todo.service';
import { TodoView } from './todo.view';

const taskTest: TaskInterface = {
  id: 1,
  description: 'Hola Mundo',
  completed: false
};

class TodoServiceMock {
  getAll(): Observable<TaskInterface[]> {
    return of([
      taskTest
    ]).pipe(delay(3000));
  }

  add(task: Partial<TaskInterface>): Observable<TaskInterface> {
    return of(taskTest);
  }

  update(id: number, task: Partial<TaskInterface>): Observable<TaskInterface> {
    return of(taskTest);
  }

  remove(id: number): Observable<object> {
    return of({});
  }
}

describe('TodoView', () => {
  let component: TodoView;
  let fixure: ComponentFixture<TodoView>;
  let service: TodoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TodoView
      ],
      providers: [
        { provide: TodoService, useClass: TodoServiceMock }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixure = TestBed.createComponent(TodoView);
    component = fixure.componentInstance;
    service = TestBed.inject(TodoService);
  });

  it('Debe instanciarse', () => {
    expect(component).toBeDefined();
  });

  it('Debe listar las tareas', () => {
    spyOn(service, 'getAll').and.returnValue(of([]));
    component.ngOnInit();
    expect(service.getAll).toHaveBeenCalled();
  });

  it('Debe agregar tareas', () => {
    spyOn(service, 'add').and.returnValue(of(taskTest));
    const description = 'Hola Mundo';
    component.add(description);
    expect(service.add).toHaveBeenCalled();
    expect(component.tasks.length).toBe(1);
  });

  it('Debe eliminar una tarea', () => {
    spyOn(service, 'add').and.returnValue(of(taskTest));
    component.add('Hola Mundo');
    expect(component.tasks.length).toBe(1);
    spyOn(service, 'remove').and.returnValue(of({}));
    component.remove(1);
    expect(service.remove).toHaveBeenCalled();
    expect(component.tasks.length).toBe(0);
  });

  it('Debe generar un error al eliminar una tarea', () => {
    spyOn(service, 'remove').and.returnValue(throwError({}));
    component.remove(1);
    expect(service.remove).toHaveBeenCalled();
  });

  it('Debe actualizar el complete', () => {
    spyOn(service, 'add').and.returnValue(of(taskTest));
    component.add('Hola Mundo');
    expect(component.tasks.length).toBe(1);
    spyOn(service, 'update').and.returnValue(of(taskTest));
    component.toggleCompleted(taskTest);
    expect(service.update).toHaveBeenCalled();
  });

});
