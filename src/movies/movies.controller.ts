import { Controller, Get, Param } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return `This will return All movies.`;
  }

  @Get(`:id`)
  getMovieById(@Param('id') movieId: string) {
    return `This will return one movie data with movieId : ${movieId}`;
  }
}
