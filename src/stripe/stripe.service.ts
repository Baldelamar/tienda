import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateStripeDto } from './dto/create-stripe.dto';
import { UpdateStripeDto } from './dto/update-stripe.dto';
import Stripe  from 'stripe';
import { Product } from 'src/products/entities/product.entity';

@Injectable()
export class StripeService {
  private stripe: Stripe;

  constructor(private configService: ConfigService) {
    this.stripe = new Stripe(this.configService.get<string>('STRIPE_SECRET_KEY')!, {});
  }

    async createCheckoutSession(Product: any) {
    const session = await this.stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'mxn',
            product_data: {
              name: Product.name,
              description: Product.description,
              images: [Product.image],
            },
            unit_amount: Product.price * 100, // Stripe usa centavos
          },
          quantity: 1,
        },
      ],
       success_url: 'http://localhost:5174/success',
        cancel_url: 'http://localhost:5174/cancel',
    });

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
