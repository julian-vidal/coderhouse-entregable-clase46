import { ApiProperty } from '@nestjs/swagger';
import { buildSchema } from 'graphql';

export class ProductDTO {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  stock: number;
  @ApiProperty()
  picture?: string;
  _id?: string;
}

export type CreateProductDTO = Omit<ProductDTO, '_id'>;

export type UpdateProductDTO = Partial<Omit<CreateProductDTO, 'id'>>;

export const GraphQLSchema = buildSchema(`
type Product {
    id: ID!
    name: String
    price: Int
    stock: Int
    picture: String
    _id: String
}

input ProductInput {
    id: ID!
    name: String
    price: Int
    stock: Int
    picture: String
}

input UpdateProduct {
    name: String
    price: Int
    stock: Int
    picture: String
}

type Query {
    getProduct(id: ID!): Product
    getProducts: [Product]
}

type Mutation {
    createProduct(product: ProductInput): Product
    updateProduct(id: ID!, product: UpdateProduct): Product
    deleteProduct(id: ID!): String
}
`);
