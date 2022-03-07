export const query = `query getProducts($first: Int!) {
  products(first: $first) {
    edges {
      node {
        id
        title
        featuredImage {
          url
        }
      }
    }
  }
}`;

export const queryOptions = {
  variables: { first: 4 },
};
