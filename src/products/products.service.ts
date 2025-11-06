import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';



@Injectable()
export class ProductsService {

  // SE DEFINE UNA URL BASE DONDE ESTÁN LAS IMÁGENES DE LOS PRODUCTOS
  private readonly baseUrl = 'http://localhost:3001/public/';
  
// AQUÍ SE DECLARA UN ARREGLO DE PRODUCTOS
// CADA PRODUCTO TIENE: ID, NOMBRE, DESCRIPCIÓN, PRECIO E IMAGEN
  private products: Product[] = [
    {
      id: 1,
      name: 'Audífonos Sony CH520',
      description: 'Sonido de alta calidad con Bluetooth y carga rápida.',
      price: 1149,
      image: this.baseUrl + 'Audifonos.webp',
    },
    {
      id: 2,
      name: 'Redmi Watch 3 Black',
      description: 'Reloj inteligente con pantalla AMOLED y GPS.',
      price: 1049,
      image: this.baseUrl + 'Smartwatch.webp',
    },
    {
      id: 3,
      name: 'Laptop Dell G5',
      description: 'Laptop gamer con procesador Intel i7 y RTX 3060.',
      price: 22999,
      image: this.baseUrl + 'Laptop.webp',
    },
    {
      id: 4,
      name: 'iPhone 16 Rosa',
      description: 'Nuevo modelo con cámara avanzada y chip A18 Bionic.',
      price: 17499,
      image: this.baseUrl + 'iPhone.webp',
    },
    {
      id: 5,
      name: 'Bocina JBL Flip 7',
      description: 'Sonido potente y batería de larga duración.',
      price: 2099,
      image: this.baseUrl + 'Bocina.webp',
    },
    {
      id: 6,
      name: 'Mouse Acteck 470',
      description: 'Mouse ergonómico con iluminación LED RGB.',
      price: 279,
      image: this.baseUrl + 'Mouse.webp',
    },
    {
      id: 7,
      name: 'Monitor GHIA 23.8"',
      description: 'Pantalla Full HD con marco delgado.',
      price: 2899,
      image: this.baseUrl + 'Monitor.webp',
    },
    {
      id: 8,
      name: 'Powerbank Steren',
      description: 'Batería portátil de 10,000 mAh con carga rápida.',
      price: 349,
      image: this.baseUrl + 'Powerbank.webp',
    },
    {
      id: 9,
      name: 'Dron Mavic Air 25',
      description: 'Dron profesional con cámara 4K.',
      price: 23399,
      image: this.baseUrl + 'Dron.webp',
    },
     {
      id: 10,
      name: 'Control Xbox Series',
      description: 'Control inalámbrico compatible con Xbox y PC.',
      price: 1399,
      image: this.baseUrl + 'Control.webp',
    },
    {
      id: 11,
      name: 'Teclado Beast Gaming',
      description: 'Teclado mecánico RGB con switches rojos.',
      price: 449,
      image: this.baseUrl + 'Teclado.webp',
    },
    {
      id: 12,
      name: 'Barra Billboard Carbono 2.1',
      description: 'Barra de sonido Bluetooth con subwoofer integrado.',
      price: 1099,
      image: this.baseUrl + 'Barra.webp',
    },
  ];

  // ESTE MÉTODO SE LLAMA DESDE EL CONTROLADOR PARA DEVOLVER TODOS LOS PRODUCTOS
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
