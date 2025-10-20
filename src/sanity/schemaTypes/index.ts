import { type SchemaTypeDefinition } from "sanity";
import { CategoryType } from "./CategoryType";
import { productType } from "./productType";
import { orderType } from "./orderType";
import { blogType } from "./BlogType";
import { blogCategoryType } from "./blogCategoryType";
import { blockContentType } from "./blockContentType";
import { authorType } from "./authorType";
import { brandType } from "./brandType";
import { addressType } from "./adressType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    CategoryType,
    productType,
    orderType,
    blogType,
    blogCategoryType,
    authorType,
    brandType,
    addressType,
    blockContentType,
  ],
};
