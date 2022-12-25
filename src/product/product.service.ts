import { Injectable } from '@nestjs/common';
import { ProductDTO } from './product.dto';
import { ProductRepository } from './product.repository';

const repo = new ProductRepository();

@Injectable()
export class ProductService {
  async getProducts(): Promise<ProductDTO[]> {
    return await repo.getAll();
  }

  async getProduct(id: number): Promise<ProductDTO> {
    return await repo.getById(id);
  }

  async createProduct(product: ProductDTO): Promise<ProductDTO> {
    return await repo.save(product);
  }

  async updateProduct(id: number, product: ProductDTO) {
    return await repo.update(id, product);
  }

  async deleteProduct(id: number): Promise<boolean> {
    return await repo.delete(id);
  }
}
