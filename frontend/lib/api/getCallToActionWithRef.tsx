import client from "../client";
import getImageUrl from "../getImageUrl";
import TrialButton from "components/TrialButton";
import SubHeading from "components/SubHeading";
import PageImage from "components/PageImage";
import MainQuote from "components/MainQuote";
import BlockContent from "@sanity/block-content-to-react";
import Quote from "components/Quote";
import { SanityDocument } from "@sanity/client";

export type QueryContent = {
  headlineText: string;
  buttonOneText: string;
  buttonOneLink: {
    _type: string;
    current: string;
  };
  buttonTwoText: string;
  buttonTwoLink: {
    _type: string;
    current: string;
  };
} & SanityDocument;

export async function getClassesCTAWithRef(ref: string): Promise<QueryContent> {
  const data = await client.fetch(
    `*[_type == 'classesCTA' && _id == $ref] {
   headlineText,
   buttonOneText,
   buttonOneLink,
   buttonTwoText,
   buttonTwoLink
}`,
    { ref }
  );

  return data[0];
}
