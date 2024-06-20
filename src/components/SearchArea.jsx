"use client";

import { useState } from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  useInstantSearch,
} from "react-instantsearch";
import Nan from "./Nan";
import "instantsearch.css/themes/satellite.css";
import Link from "next/link";

export default function SearchArea({}) {
  const [theme, setTheme] = useState("blankets");
  const [siteName, setSiteName] = useState("Nan's Knits");

  const searchClient = algoliasearch(
    "JICQ4O9RUI",
    "281181b2f8d64c5866bb680ec1c8c1d2"
  );

  let password = "how do you rewind your yarn";

  function handleKeyDown(e) {
    if (e.target.value.toLowerCase().includes(password)) {
      setTheme("movies");
      setSiteName("Bertie's Bootlegs");
      e.target.value = "";
    }
  }

  return (
    <div className="grid items-center place-items-center mb-20">
      <h1 className="text-fuchsia-700">{siteName}</h1>
      <Nan theme={theme} />
      <InstantSearch searchClient={searchClient} indexName={theme}>
        <SearchBox placeholder="Search" onInput={(e) => handleKeyDown(e)} />
        <EmptyQueryBoundary fallback={null}>
          <Hits hitComponent={(props) => <Hit {...props} theme={theme} />} />
        </EmptyQueryBoundary>
      </InstantSearch>
    </div>
  );
}

function Hit({ hit, theme }) {
  if (theme === "blankets") {
    return (
      <Link href={`/blanket/${hit.objectID}`}>
        <h1>{hit.name}</h1>
        <p>{hit.description}</p>
      </Link>
    );
  }

  return (
    <Link href={`/vhs/${hit.objectID}`}>
      <h1>{hit.title}</h1>
      <p>{hit.tagline}</p>
    </Link>
  );
}
function EmptyQueryBoundary({ children, fallback }) {
  const { indexUiState } = useInstantSearch();

  if (!indexUiState.query) {
    return (
      <>
        {fallback}
        <div hidden>{children}</div>
      </>
    );
  }
  return children;
}
