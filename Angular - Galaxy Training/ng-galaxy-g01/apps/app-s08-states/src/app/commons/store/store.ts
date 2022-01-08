import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

type Action = {
  type: string;
  payload: any;
};

type ReducerFn<R> = (state: R, action: Action) => R;

@Injectable({
  providedIn: 'root',
})
export class Store<T> {
  subject: BehaviorSubject<T>;
  state$: Observable<T>;

  get state(): T {
    return this.subject.getValue();
  }

  constructor(initialState: T, private reducer: ReducerFn<T>) {
    this.subject = new BehaviorSubject(initialState);
    this.state$ = this.subject.asObservable();
  }

  dispatch(action: Action): void {
    const newState = this.reducer(this.state, action);
    this.subject.next(newState);
  }

  select<K>(selectorFn: (state: T) => K): Observable<K> {
    return this.state$.pipe(map(state => selectorFn(state)));
  }
}
