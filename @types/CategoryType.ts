import { MetaType } from "./MetaType";

export interface CategoryType {
  id: string;
  name: string;
  image: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
}

export interface CategoryPageType {
  categoriesList:{
    data:CategoryType[],
    meta:MetaType
  }
}