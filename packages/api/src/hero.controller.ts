import { Controller, Get } from '@nestjs/common';

@Controller('heroes')
export class HeroController {
  constructor() {}

  @Get()
  getHeroes() {
    return [{name: 'Bob'}, {name: 'Mindy'}]
  }
}
