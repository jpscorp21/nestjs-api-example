import { Controller, Get, Post, Delete, Put, Param, Body } from '@nestjs/common';
import { CatsService } from '../../services/cats/cats.service';

@Controller('cats')
export class CatsController {

    constructor(private readonly catsService: CatsService) {}

    @Get()
    async findAll() {
        return this.catsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id) {
        id = Number(id);
        return this.catsService.findById(id);
    }

    @Post()
    async create(@Body() body) {
        this.catsService.create(body);
        return body;
    }

    @Put(':id')
    async update(@Param('id') id, @Body() body) {
        id = Number(id);
        this.catsService.update(id, body);
        return this.catsService.findById(id);
    }

    @Delete(':id')
    async remove(@Param('id') id) {
        id = Number(id);
        this.catsService.remove(id);
        return this.catsService.findById(id);
    }
}
