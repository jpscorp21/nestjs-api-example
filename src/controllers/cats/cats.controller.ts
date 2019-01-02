import { Controller, Get, Post, Delete, Put, Param, Body } from '@nestjs/common';
import { CatsService } from '../../services/cats/cats.service';
import { ParseIntPipe } from '../../pipes/parse-int.pipe';

@Controller('cats')
export class CatsController {

    constructor(private readonly catsService: CatsService) {}

    @Get()
    async findAll() {
        return await this.catsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id', new ParseIntPipe()) id) {
        return await this.catsService.findById(id);
    }

    @Post()
    async create(@Body() body) {
        return await this.catsService.create(body);
    }

    @Put(':id')
    async update(@Param('id', new ParseIntPipe()) id, @Body() body) {
        return await this.catsService.update(id, body);
    }

    @Delete(':id')
    async remove(@Param('id', new ParseIntPipe()) id) {
        return await this.catsService.remove(id);
    }
}
