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

describe('TodoView', () => {
  let component: TodoView;
  let fixure: ComponentFixture<TodoView>;
  let service: jasmine.SpyObj<TodoService>;

  beforeEach(async () => {
    const todoServiceSpy = jasmine.createSpyObj<TodoService>('TodoService', [
      'getAll', 'add', 'remove', 'update'
    ]);

    await TestBed.configureTestingModule({
      declarations: [
        TodoView
      ],
      providers: [
        { provide: TodoService, useValue: todoServiceSpy }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixure = TestBed.createComponent(TodoView);
    component = fixure.componentInstance;
    service = TestBed.inject(TodoService) as jasmine.SpyObj<TodoService>;
  });

  it('Debe instanciarse', () => {
    expect(component).toBeDefined();
  });

  it('Debe listar las tareas', () => {
    service.getAll.and.returnValue(of([]));
    component.ngOnInit();
    expect(service.getAll).toHaveBeenCalled();
  });

  it('Debe agregar tareas', () => {
    service.add.and.returnValue(of(taskTest));
    const description = 'Hola Mundo';
    component.add(description);
    expect(service.add).toHaveBeenCalled();
    expect(component.tasks.length).toBe(1);
  });

  it('Debe eliminar una tarea', () => {
    service.add.and.returnValue(of(taskTest));
    component.add('Hola Mundo');
    expect(component.tasks.length).toBe(1);
    service.remove.and.returnValue(of({}));
    component.remove(1);
    expect(service.remove).toHaveBeenCalled();
    expect(component.tasks.length).toBe(0);
  });

  it('Debe generar un error al eliminar una tarea', () => {
    service.remove.and.returnValue(throwError({}));
    component.remove(1);
    expect(service.remove).toHaveBeenCalled();
  });

  it('Debe actualizar el complete', () => {
    service.add.and.returnValue(of(taskTest));
    component.add('Hola Mundo');
    expect(component.tasks.length).toBe(1);
    service.update.and.returnValue(of(taskTest));
    component.toggleCompleted(taskTest);
    expect(service.update).toHaveBeenCalled();
  });

});
