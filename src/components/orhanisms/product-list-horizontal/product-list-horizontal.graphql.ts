export const query = `query getProducts($first: Int! $handle: String!) {
	collection(handle: $handle) {
    title
    products(first:$first) {
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
  }
}`;

export const queryOptions = (first: number, handle: string) => ({
  variables: { first: 4, handle: "frontpage" },
});
