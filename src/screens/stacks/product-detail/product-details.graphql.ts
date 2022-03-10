export const query = `query getProductById($productId: ID!) {
	product(id: $productId) {
    title
    description
    priceRange {
      minVariantPrice {
        amount
      }
    }
		images(first: 5) {
      edges {
        node {
          url
        }
      }
    }
    options {
      name
      values
      id
    }
  }
}`;

export const queryOptions = (productId: string) => ({
  variables: { productId: productId },
});
