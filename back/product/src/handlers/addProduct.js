import Product from '../models/Product';

export default async function addProduct(ctx) {
  const product = ctx.request.body;
  try {
    const productAdded = await Product.insertMany(product);
    ctx.status = 201;
    ctx.body = productAdded;
    console.log(`addProduct: ${productAdded}`);
  } catch (e) {
    console.log(`addProduct Error: ${e.message}`);
    if (e.httpCode) {
      ctx.throw(e.httpCode, e.message);
    }
  }
}
