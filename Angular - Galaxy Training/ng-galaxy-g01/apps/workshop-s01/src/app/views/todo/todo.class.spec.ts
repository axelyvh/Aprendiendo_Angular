/*
import { TodoView } from './todo.view';

describe('TodoView', () => {
  let todo: TodoView;

  beforeAll(() => {
    console.log('beforeAll');
  });

  beforeEach(() => {
    todo = new TodoView();
    console.log('beforeEach');
  });

  afterAll(() => {
    todo = null;
    console.log('afterAll');
  });

  afterEach(() => {
    console.log('afterEach');
  });

  it('Debe poder instanciarse', () => {
    expect(todo).toBeDefined();
    expect(todo.tasks.length).toBe(0);
  });

  it('Debe poder agregar una nueva tarea', () => {
    const description = 'Esto es una prueba';

    todo.add(description);
    todo.add(description);
    todo.add(description);

    expect(todo.tasks.length).toBe(3);
  });

  describe('Eliminar Tarea', () => {
    it('Debe eliminar por el indice', () => {
      const description = 'Esto es una prueba';

      todo.add(description);
      expect(todo.tasks.length).toBe(1);

      todo.remove(0);
      expect(todo.tasks.length).toBe(0);

    });

    it('No Debe eliminar con indice incorrecto', () => {

      todo.remove(0);
      expect(todo.tasks.length).toBe(0);

    });
  });

  describe('Cambiar estado de Tarea', () => {

    beforeEach(() => {
      const description = 'Esto es una prueba';
      todo.add(description);
    });

    it('Debe cambiar el completado', () => {
      todo.toggleCompleted(0);
      expect(todo.tasks[0].completed).toBe(true);
      todo.toggleCompleted(0);
      expect(todo.tasks[0].completed).toBe(false);
    });

    it('Debe generar error al cambiar el completado de una tarea que no existe', () => {
      expect(() => {
        todo.toggleCompleted(5);
      }).toThrow();

    });
  });
});
*/
