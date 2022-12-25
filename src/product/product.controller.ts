import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDTO, ProductDTO } from './product.dto';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  @Inject(ProductService)
  private readonly productService: ProductService;

  @Get()
  getProducts(): Promise<ProductDTO[]> {
    return this.productService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id:number): Promise<ProductDTO> {
    return this.productService.getProduct(id);
  }

  @Post()
  createProduct(@Body() product: ProductDTO): Promise<ProductDTO> {
    return this.productService.createProduct(product);
  }

  @Put(':id')
  updateProduct(
    @Param('id') id: number,
    @Body() product: ProductDTO,
  ): Promise<ProductDTO> {
    return this.productService.updateProduct(id, product);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: number): Promise<boolean> {
    return this.productService.deleteProduct(id);
  }
}
