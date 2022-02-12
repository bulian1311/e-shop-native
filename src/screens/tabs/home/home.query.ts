export const query = `query getProductPaths($first: Int!) {
  products(first: $first) {
    edges {
      node {
        id
        handle
    }
  }
}   
}`;

export const queryOptions = {
  variables: { first: 5 },
};
