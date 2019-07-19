import Product from '../models/Product';

export default async function deleteProduct(ctx) {
  const { productid: productId } = ctx.request.query;
  try {
    const resp = await Product.deleteOne({ _id: productId });
    ctx.status = resp.deletedCount ? 200 : 400;
    ctx.body = { message: `Product with ${productId} ${resp.deletedCount ? 'deleted successfully' : 'not found'}` };
  } catch (error) {
    console.log(`ProductDeleteError: ${error.message}`);
    if (error.httpCode) {
      ctx.throw(error.httpCode, error.message);
    }
  }
}
