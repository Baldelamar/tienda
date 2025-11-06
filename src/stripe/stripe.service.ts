import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateStripeDto } from './dto/create-stripe.dto';
import { UpdateStripeDto } from './dto/update-stripe.dto';
import Stripe  from 'stripe';
import { Product } from 'src/products/entities/product.entity';
import { env } from 'process';

@Injectable()
export class StripeService {
  // VARIABLE PRIVADA PARA GUARDAR LA CONEXIÓN CON STRIPE
  private stripe: Stripe;

  constructor(private configService: ConfigService) {
    // SE CREA UNA NUEVA INSTANCIA DE STRIPE USANDO LA CLAVE SECRETA GUARDADA EN LAS VARIABLES DE ENTORNO
    this.stripe = new Stripe(this.configService.get<string>('STRIPE_SECRET_KEY')!, {});
  }

    async createCheckoutSession(Product: any) {
      const domain = this.configService.get<string>('YOUR_DOMAIN');
    const session = await this.stripe.checkout.sessions.create({
      payment_method_types: ['card'], // TARJETAS DE CRÉDITO O DÉBITO
      mode: 'payment', // INDICA QUE ES UN PAGO ÚNICO Y NO UNA SUSCRIPCIÓN
      line_items: [
        {
          price_data: {
            currency: 'mxn', // MONEDA EN PESOS MEXICANOS
            product_data: {
              name: Product.name, // NOMBRE DEL PRODUCTO
              description: Product.description, // DESCRIPCIÓN DEL PRODUCTO
              images: [Product.image], // IMAGEN QUE SE MOSTRARÁ EN STRIPE
            },
            unit_amount: Product.price * 100, // EL PRECIO DEBE IR EN CENTAVOS
          },
          quantity: 1, // CANTIDAD (POR DEFECTO 1 PRODUCTO)
        },
      ],
        // URLS A LAS QUE REDIRIGE STRIPE DESPUÉS DE PAGAR O CANCELAR
       success_url: `${domain}/success`, // SI EL PAGO ES EXITOSO
       cancel_url: `${domain}/cancel`, // SI EL USUARIO CANCELA
    });
 // SE DEVUELVE LA URL DE LA SESIÓN DE STRIPE PARA REDIRIGIR AL USUARIO AL PAGO
    return { url: session.url };
  }






  create(createStripeDto: CreateStripeDto) {
    return 'This action adds a new stripe';
  }

  findAll() {
    return `This action returns all stripe`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stripe`;
  }

  update(id: number, updateStripeDto: UpdateStripeDto) {
    return `This action updates a #${id} stripe`;
  }

  remove(id: number) {
    return `This action removes a #${id} stripe`;
  }
}
