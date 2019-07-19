import Product from '../models/Product';

export default async function getProductDetails(ctx) {
  const { productid: productId } = ctx.request.query;
  try {
    if (!productId) {
      ctx.status = 400;
      ctx.body = { message: 'Error in fetching Product: Bad parameters' };
    }
    if (productId) {
      const product = await Product.findById(productId);
      ctx.status = 200;
      ctx.body = product;
    }
  } catch (e) {
    console.log(`getProductDetails error: ${e.message}`);
    if (e.httpCode) {
      ctx.throw(e.httpCode, e.message);
    }
  }
}
