/* eslint-disable linebreak-style */
import Product from '../models/Product';

export default async function getAllProduct(ctx) {
  try {
    const products = await Product.find();
    ctx.status = 200;
    ctx.body = products;
    console.log(`getProducts : ${products}`);
  } catch (e) {
    console.log(`getProducts error: ${e.message}`);
    if (e.httpCode) {
      ctx.throw(e.httpCode, e.message);
    }
  }
}
