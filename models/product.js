class Product {
  constructor(id, categoryIds, qty, title, description, imageUrl, weight, price) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.qty = qty;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.weight = weight;
    this.price = price;
  }
}

export default Product;
