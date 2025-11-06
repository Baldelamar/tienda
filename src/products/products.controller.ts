import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Controller('products')
export class ProductsController {
  // IMPORTA EL SERVICIO DE PRODUCTOS PARA USAR SUS FUNCIONES
  constructor(private readonly productsService: ProductsService) {}

  // RUTA PARA OBTENER TODOS LOS PRODUCTOS
  @Get()
   // AQUÍ SE LLAMA AL MÉTODO findAll() DEL SERVICIO DE PRODUCTOS
  // ESTE MÉTODO DEVUELVE LA LISTA DE PRODUCTOS GUARDADOS EN EL SERVICIO
  findAll(): Product[] {
    return this.productsService.findAll();
  }






















  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
