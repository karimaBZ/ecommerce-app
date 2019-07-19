import Product from '../models/Product';

export default async function updateProduct(ctx) {
  const { request: { body: product } } = ctx;
  try {
    const { _id: id } = product;
    const updatedProduct = await Product.findOneAndUpdate({ _id: id }, { $set: product });
    if (updatedProduct) {
      ctx.status = 200;
      const findUpdated = await Product.findById(id);
      ctx.body = findUpdated;
    } else {
      ctx.status = 400;
      ctx.body = { message: `Product with productId: ${id} is not found` };
    }
  } catch (e) {
    console.log(`updateProduct: ${e.message}`);
    if (e.httpCode) {
      ctx.throw(e.httpCode, e.message);
    }
  }
}
