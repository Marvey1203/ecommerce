import { gql } from "@/utils/gql";
import ProductCards from "./components/ProductsCards";

type GraphQLResponse = {
  data: {
    products: {
      nodes: {
        title: string;
        id: string;
        featureImage: {
          url: string;
        }
        priceRangeV2:{
          maxVariantPrice:{
            amount:string;
            currencyCode: string
          }
        }
      }[];
    };
  };
  extensions: {
    cost: {
      requestedQueryCost: number;
      actualQueryCost: number;
      throttleStatus: {
        maximumAvailable: number;
        currentlyAvailable: number;
        restoreRate: number;
      };
    };
  };
};

const getProducts = async () => {
  const res = await fetch(process.env.GRAPHQL_API_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": process.env.ADMIN_API_ACCESS_TOKEN!
    },
    body: JSON.stringify({
      query: gql`
        query ProductsQuery {
          products(first: 6) {
            nodes {
              title
              id
              featuredImage{
                url
              }
              priceRangeV2{
                maxVariantPrice{
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      `
    })
  });
  if (!res.ok) {
    const text = await res.text(); // get the response body for more information

    throw new Error(`
      Failed to fetch data
      Status: ${res.status}
      Response: ${text}
    `);
  }

  return res.json();
}

export default async function Home() {
  const json = await getProducts();
  const productData: any[] = json.data.products.nodes

  return (
    <main>
      <div className="w-full">
        <ProductCards productData={productData} />
      </div>
    </main>
  );
}
