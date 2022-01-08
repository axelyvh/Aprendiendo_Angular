import { APPLICATION_NAME } from './primitives';

describe('Pruebas datos primitivos', () => {

  it('El nombre de la aplicación debe ser Taller de pruebas unitarias', () => {
    expect(APPLICATION_NAME).toBe('Taller de pruebas unitarias');
  });

  it('El nombre de la aplicación debe ser tener menos de 50 caracteres', () => {
    expect(APPLICATION_NAME.length).toBeLessThan(50);
  });

  it('El nombre de la aplicación debe ser menor o igual de 50 caracteres', () => {
    expect(APPLICATION_NAME.length).toBeLessThanOrEqual(50);
  });

  it('El nombre de la aplicación debe ser tener mas de 20 caracteres', () => {
    expect(APPLICATION_NAME.length).toBeGreaterThan(20);
  });

  it('El nombre de la aplicación debe ser mayor o igual de 20 caracteres', () => {
    expect(APPLICATION_NAME.length).toBeGreaterThanOrEqual(20);
  });

});
