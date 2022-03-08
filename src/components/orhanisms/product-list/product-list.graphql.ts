export const query = `query getProducts($first: Int!) {
  products(first: $first) {
    edges {
      node {
        id
        title
        featuredImage {
          url
        }
        priceRange {
          minVariantPrice {
            amount
          }
        }
      }
    }
  }
}`;

export const queryOptions = {
  variables: { first: 8 },
};
