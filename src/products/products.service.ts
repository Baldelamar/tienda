import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';



@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Camisa básica',
      description: 'Camisa de algodón 100%',
      price: 250,
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 2,
      name: 'Pantalón de mezclilla',
      description: 'Pantalón azul para uso diario',
      price: 500,
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 3,
      name: 'Tenis deportivos',
      description: 'Cómodos y ligeros para correr',
      price: 1200,
      image: 'https://via.placeholder.com/200',
    },
  ];

    findAll(): Product[] {
    return this.products;
  }

  

























  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
