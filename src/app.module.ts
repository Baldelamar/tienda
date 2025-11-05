import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { StripeModule } from './stripe/stripe.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true,}),
    ProductsModule,
    StripeModule,
  ],
})
export class AppModule {}
