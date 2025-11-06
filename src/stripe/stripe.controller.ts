import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StripeService } from './stripe.service';
import { CreateStripeDto } from './dto/create-stripe.dto';
import { UpdateStripeDto } from './dto/update-stripe.dto';
import { Product } from 'src/products/entities/product.entity';

@Controller('stripe')
export class StripeController {
// EL CONSTRUCTOR RECIBE UNA INSTANCIA DEL SERVICIO DE STRIPE Y CREAR SESIONES DE PAGO
  constructor(private readonly stripeService: StripeService) {}

  @Post('checkout')
  async createCheckout(@Body() product: Product) {
     // ESTA FUNCIÓN RECIBE LOS DATOS DE UN PRODUCTO EN EL CUERPO DE LA PETICIÓN
    // Y LLAMA AL SERVICIO DE STRIPE PARA CREAR UNA SESIÓN DE CHECKOUT
    // LUEGO DEVUELVE EL FORMULARIO DE PAGO GENERADO POR STRIPE
    return this.stripeService.createCheckoutSession(product);
  }


















  @Get()
  findAll() {
    return this.stripeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stripeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStripeDto: UpdateStripeDto) {
    return this.stripeService.update(+id, updateStripeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stripeService.remove(+id);
  }
}
