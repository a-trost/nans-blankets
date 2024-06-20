import { Metadata } from "next";
import { notFound } from "next/navigation";

import algoliasearch from "algoliasearch";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch";

import BlanketProduct from "@/components/BlanketProduct";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const searchClient = algoliasearch(
    "JICQ4O9RUI",
    "281181b2f8d64c5866bb680ec1c8c1d2"
  );

  const index = searchClient.initIndex("blankets");

  const fetchItemById = async (uid) => {
    try {
      const item = await index
        .findObject((hit) => hit.objectID === uid)
        .then((obj) => {
          return obj;
        });
      console.log("Item fetched:", item);
      return item;
    } catch (error) {
      console.error("Error fetching item:", error);
    }
  };

  const item = await fetchItemById(params.uid);
  return <BlanketProduct product={item} />;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  return {
    title: "",
    description: "",
  };
}
