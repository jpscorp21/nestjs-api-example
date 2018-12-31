import { Controller, Get, Post, Delete, Put, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get()
    findAll() {
        return `Esta accion retorna todos los gatos`;
    }

    @Get(':id')
    findOne(@Param('id') id) {
        return `Esta accion retorna un gato con el id ${id}`;
    }

    @Post()
    create() {
        return `Esta accion crea un nuevo gato`;
    }

    @Put()
    update() {
        return `Esta acction actualiza un nuevo gato`;
    }

    @Delete()
    remove() {
        return `Esta accion elimina un gato`;
    }
}
