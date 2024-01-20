import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private http = inject(HttpClient);

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>('/api/heroes').pipe(
      map(res => res || [])
    )
  }

}
