import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-protected',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './protected.component.html',
  styleUrl: './protected.component.scss',
})
export class ProtectedComponent {
  private heroesService = inject(HeroesService);
  public heroes = this.heroesService.getHeroes();
}
