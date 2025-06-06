/**
 * Generated by @openapi-codegen
 *
 * @version 0.0.0
 */
import * as reactQuery from "@tanstack/react-query";
import { OpenApiClientContext, queryKeyFn } from "./openApiClientContext";
import type * as Fetcher from "./openApiClientFetcher";
import { openApiClientFetch } from "./openApiClientFetcher";
import type * as Schemas from "./openApiClientSchemas";

export type ApiCategoriesListError = Fetcher.ErrorWrapper<undefined>;

export type ApiCategoriesListResponse = Schemas.Category[];

export type ApiCategoriesListVariables = OpenApiClientContext["fetcherOptions"];

/**
 * This class maps the underlying database table, it
 * allow the user the update, retive and destory Category objects.
 */
export const fetchApiCategoriesList = (
  variables: ApiCategoriesListVariables,
  signal?: AbortSignal
) =>
  openApiClientFetch<
    ApiCategoriesListResponse,
    ApiCategoriesListError,
    undefined,
    {},
    {},
    {}
  >({ url: "/api/categories/", method: "get", ...variables, signal });

/**
 * This class maps the underlying database table, it
 * allow the user the update, retive and destory Category objects.
 */
export const apiCategoriesListQuery = (
  variables: ApiCategoriesListVariables
): [
  reactQuery.QueryKey,
  ({ signal }: { signal?: AbortSignal }) => Promise<ApiCategoriesListResponse>
] => [
  queryKeyFn({
    path: "/api/categories/",
    operationId: "api_categories_list",
    variables,
  }),
  async ({ signal }: { signal?: AbortSignal }) =>
    fetchApiCategoriesList({ ...variables }, signal),
];

export type ApiCategoriesRetrievePathParams = {
  /**
   * A unique integer value identifying this category.
   */
  id: number;
};

export type ApiCategoriesRetrieveError = Fetcher.ErrorWrapper<undefined>;

export type ApiCategoriesRetrieveVariables = {
  pathParams: ApiCategoriesRetrievePathParams;
} & OpenApiClientContext["fetcherOptions"];

/**
 * This class maps the underlying database table, it
 * allow the user the update, retive and destory Category objects.
 */
export const fetchApiCategoriesRetrieve = (
  variables: ApiCategoriesRetrieveVariables,
  signal?: AbortSignal
) =>
  openApiClientFetch<
    Schemas.Category,
    ApiCategoriesRetrieveError,
    undefined,
    {},
    {},
    ApiCategoriesRetrievePathParams
  >({ url: "/api/categories/{id}/", method: "get", ...variables, signal });

/**
 * This class maps the underlying database table, it
 * allow the user the update, retive and destory Category objects.
 */
export const apiCategoriesRetrieveQuery = (
  variables: ApiCategoriesRetrieveVariables
): [
  reactQuery.QueryKey,
  ({ signal }: { signal?: AbortSignal }) => Promise<Schemas.Category>
] => [
  queryKeyFn({
    path: "/api/categories/{id}/",
    operationId: "api_categories_retrieve",
    variables,
  }),
  async ({ signal }: { signal?: AbortSignal }) =>
    fetchApiCategoriesRetrieve({ ...variables }, signal),
];

export type ApiPricesListError = Fetcher.ErrorWrapper<undefined>;

export type ApiPricesListResponse = Schemas.Price[];

export type ApiPricesListVariables = OpenApiClientContext["fetcherOptions"];

/**
 * This class describes the Retailer db table it offers
 * an interface that allows us to perform retrive, update, and destory actions.
 */
export const fetchApiPricesList = (
  variables: ApiPricesListVariables,
  signal?: AbortSignal
) =>
  openApiClientFetch<
    ApiPricesListResponse,
    ApiPricesListError,
    undefined,
    {},
    {},
    {}
  >({ url: "/api/prices/", method: "get", ...variables, signal });

/**
 * This class describes the Retailer db table it offers
 * an interface that allows us to perform retrive, update, and destory actions.
 */
export const apiPricesListQuery = (
  variables: ApiPricesListVariables
): [
  reactQuery.QueryKey,
  ({ signal }: { signal?: AbortSignal }) => Promise<ApiPricesListResponse>
] => [
  queryKeyFn({
    path: "/api/prices/",
    operationId: "api_prices_list",
    variables,
  }),
  async ({ signal }: { signal?: AbortSignal }) =>
    fetchApiPricesList({ ...variables }, signal),
];

export type ApiPricesRetrievePathParams = {
  /**
   * A unique integer value identifying this price.
   */
  id: number;
};

export type ApiPricesRetrieveError = Fetcher.ErrorWrapper<undefined>;

export type ApiPricesRetrieveVariables = {
  pathParams: ApiPricesRetrievePathParams;
} & OpenApiClientContext["fetcherOptions"];

/**
 * This class describes the Retailer db table it offers
 * an interface that allows us to perform retrive, update, and destory actions.
 */
export const fetchApiPricesRetrieve = (
  variables: ApiPricesRetrieveVariables,
  signal?: AbortSignal
) =>
  openApiClientFetch<
    Schemas.Price,
    ApiPricesRetrieveError,
    undefined,
    {},
    {},
    ApiPricesRetrievePathParams
  >({ url: "/api/prices/{id}/", method: "get", ...variables, signal });

/**
 * This class describes the Retailer db table it offers
 * an interface that allows us to perform retrive, update, and destory actions.
 */
export const apiPricesRetrieveQuery = (
  variables: ApiPricesRetrieveVariables
): [
  reactQuery.QueryKey,
  ({ signal }: { signal?: AbortSignal }) => Promise<Schemas.Price>
] => [
  queryKeyFn({
    path: "/api/prices/{id}/",
    operationId: "api_prices_retrieve",
    variables,
  }),
  async ({ signal }: { signal?: AbortSignal }) =>
    fetchApiPricesRetrieve({ ...variables }, signal),
];

export type ApiProductsListError = Fetcher.ErrorWrapper<undefined>;

export type ApiProductsListResponse = Schemas.Product[];

export type ApiProductsListVariables = OpenApiClientContext["fetcherOptions"];

/**
 * A view set for viewing and editing product
 */
export const fetchApiProductsList = (
  variables: ApiProductsListVariables,
  signal?: AbortSignal
) =>
  openApiClientFetch<
    ApiProductsListResponse,
    ApiProductsListError,
    undefined,
    {},
    {},
    {}
  >({ url: "/api/products/", method: "get", ...variables, signal });

/**
 * A view set for viewing and editing product
 */
export const apiProductsListQuery = (
  variables: ApiProductsListVariables
): [
  reactQuery.QueryKey,
  ({ signal }: { signal?: AbortSignal }) => Promise<ApiProductsListResponse>
] => [
  queryKeyFn({
    path: "/api/products/",
    operationId: "api_products_list",
    variables,
  }),
  async ({ signal }: { signal?: AbortSignal }) =>
    fetchApiProductsList({ ...variables }, signal),
];

export type ApiProductsRetrievePathParams = {
  /**
   * A unique integer value identifying this product.
   */
  id: number;
};

export type ApiProductsRetrieveError = Fetcher.ErrorWrapper<undefined>;

export type ApiProductsRetrieveVariables = {
  pathParams: ApiProductsRetrievePathParams;
} & OpenApiClientContext["fetcherOptions"];

/**
 * A view set for viewing and editing product
 */
export const fetchApiProductsRetrieve = (
  variables: ApiProductsRetrieveVariables,
  signal?: AbortSignal
) =>
  openApiClientFetch<
    Schemas.Product,
    ApiProductsRetrieveError,
    undefined,
    {},
    {},
    ApiProductsRetrievePathParams
  >({ url: "/api/products/{id}/", method: "get", ...variables, signal });

/**
 * A view set for viewing and editing product
 */
export const apiProductsRetrieveQuery = (
  variables: ApiProductsRetrieveVariables
): [
  reactQuery.QueryKey,
  ({ signal }: { signal?: AbortSignal }) => Promise<Schemas.Product>
] => [
  queryKeyFn({
    path: "/api/products/{id}/",
    operationId: "api_products_retrieve",
    variables,
  }),
  async ({ signal }: { signal?: AbortSignal }) =>
    fetchApiProductsRetrieve({ ...variables }, signal),
];

export type ApiProfilesListError = Fetcher.ErrorWrapper<undefined>;

export type ApiProfilesListResponse = Schemas.Profile[];

export type ApiProfilesListVariables = OpenApiClientContext["fetcherOptions"];

/**
 * This class details the Account model that directly maps to the users
 *     profile
 * Args:
 *     viewsets (_type_): _description_
 */
export const fetchApiProfilesList = (
  variables: ApiProfilesListVariables,
  signal?: AbortSignal
) =>
  openApiClientFetch<
    ApiProfilesListResponse,
    ApiProfilesListError,
    undefined,
    {},
    {},
    {}
  >({ url: "/api/profiles/", method: "get", ...variables, signal });

/**
 * This class details the Account model that directly maps to the users
 *     profile
 * Args:
 *     viewsets (_type_): _description_
 */
export const apiProfilesListQuery = (
  variables: ApiProfilesListVariables
): [
  reactQuery.QueryKey,
  ({ signal }: { signal?: AbortSignal }) => Promise<ApiProfilesListResponse>
] => [
  queryKeyFn({
    path: "/api/profiles/",
    operationId: "api_profiles_list",
    variables,
  }),
  async ({ signal }: { signal?: AbortSignal }) =>
    fetchApiProfilesList({ ...variables }, signal),
];

export type ApiProfilesRetrievePathParams = {
  /**
   * A unique integer value identifying this profile.
   */
  id: number;
};

export type ApiProfilesRetrieveError = Fetcher.ErrorWrapper<undefined>;

export type ApiProfilesRetrieveVariables = {
  pathParams: ApiProfilesRetrievePathParams;
} & OpenApiClientContext["fetcherOptions"];

/**
 * This class details the Account model that directly maps to the users
 *     profile
 * Args:
 *     viewsets (_type_): _description_
 */
export const fetchApiProfilesRetrieve = (
  variables: ApiProfilesRetrieveVariables,
  signal?: AbortSignal
) =>
  openApiClientFetch<
    Schemas.Profile,
    ApiProfilesRetrieveError,
    undefined,
    {},
    {},
    ApiProfilesRetrievePathParams
  >({ url: "/api/profiles/{id}/", method: "get", ...variables, signal });

/**
 * This class details the Account model that directly maps to the users
 *     profile
 * Args:
 *     viewsets (_type_): _description_
 */
export const apiProfilesRetrieveQuery = (
  variables: ApiProfilesRetrieveVariables
): [
  reactQuery.QueryKey,
  ({ signal }: { signal?: AbortSignal }) => Promise<Schemas.Profile>
] => [
  queryKeyFn({
    path: "/api/profiles/{id}/",
    operationId: "api_profiles_retrieve",
    variables,
  }),
  async ({ signal }: { signal?: AbortSignal }) =>
    fetchApiProfilesRetrieve({ ...variables }, signal),
];

export type ApiSchemaRetrieveQueryParams = {
  format?: "json" | "yaml";
  lang?:
    | "af"
    | "ar"
    | "ar-dz"
    | "ast"
    | "az"
    | "be"
    | "bg"
    | "bn"
    | "br"
    | "bs"
    | "ca"
    | "ckb"
    | "cs"
    | "cy"
    | "da"
    | "de"
    | "dsb"
    | "el"
    | "en"
    | "en-au"
    | "en-gb"
    | "eo"
    | "es"
    | "es-ar"
    | "es-co"
    | "es-mx"
    | "es-ni"
    | "es-ve"
    | "et"
    | "eu"
    | "fa"
    | "fi"
    | "fr"
    | "fy"
    | "ga"
    | "gd"
    | "gl"
    | "he"
    | "hi"
    | "hr"
    | "hsb"
    | "hu"
    | "hy"
    | "ia"
    | "id"
    | "ig"
    | "io"
    | "is"
    | "it"
    | "ja"
    | "ka"
    | "kab"
    | "kk"
    | "km"
    | "kn"
    | "ko"
    | "ky"
    | "lb"
    | "lt"
    | "lv"
    | "mk"
    | "ml"
    | "mn"
    | "mr"
    | "ms"
    | "my"
    | "nb"
    | "ne"
    | "nl"
    | "nn"
    | "os"
    | "pa"
    | "pl"
    | "pt"
    | "pt-br"
    | "ro"
    | "ru"
    | "sk"
    | "sl"
    | "sq"
    | "sr"
    | "sr-latn"
    | "sv"
    | "sw"
    | "ta"
    | "te"
    | "tg"
    | "th"
    | "tk"
    | "tr"
    | "tt"
    | "udm"
    | "uk"
    | "ur"
    | "uz"
    | "vi"
    | "zh-hans"
    | "zh-hant";
};

export type ApiSchemaRetrieveError = Fetcher.ErrorWrapper<undefined>;

export type ApiSchemaRetrieveResponse = {
  [key: string]: any;
};

export type ApiSchemaRetrieveVariables = {
  queryParams?: ApiSchemaRetrieveQueryParams;
} & OpenApiClientContext["fetcherOptions"];

/**
 * OpenApi3 schema for this API. Format can be selected via content negotiation.
 *
 * - YAML: application/vnd.oai.openapi
 * - JSON: application/vnd.oai.openapi+json
 */
export const fetchApiSchemaRetrieve = (
  variables: ApiSchemaRetrieveVariables,
  signal?: AbortSignal
) =>
  openApiClientFetch<
    ApiSchemaRetrieveResponse,
    ApiSchemaRetrieveError,
    undefined,
    {},
    ApiSchemaRetrieveQueryParams,
    {}
  >({ url: "/api/schema/", method: "get", ...variables, signal });

/**
 * OpenApi3 schema for this API. Format can be selected via content negotiation.
 *
 * - YAML: application/vnd.oai.openapi
 * - JSON: application/vnd.oai.openapi+json
 */
export const apiSchemaRetrieveQuery = (
  variables: ApiSchemaRetrieveVariables
): [
  reactQuery.QueryKey,
  ({ signal }: { signal?: AbortSignal }) => Promise<ApiSchemaRetrieveResponse>
] => [
  queryKeyFn({
    path: "/api/schema/",
    operationId: "api_schema_retrieve",
    variables,
  }),
  async ({ signal }: { signal?: AbortSignal }) =>
    fetchApiSchemaRetrieve({ ...variables }, signal),
];

export type ApiSuppliersListError = Fetcher.ErrorWrapper<undefined>;

export type ApiSuppliersListResponse = Schemas.Supplier[];

export type ApiSuppliersListVariables = OpenApiClientContext["fetcherOptions"];

/**
 * This class describes the Supplier view set class it allows
 * us to perform, create, list, retrive and many other actions
 * related to Supplier
 */
export const fetchApiSuppliersList = (
  variables: ApiSuppliersListVariables,
  signal?: AbortSignal
) =>
  openApiClientFetch<
    ApiSuppliersListResponse,
    ApiSuppliersListError,
    undefined,
    {},
    {},
    {}
  >({ url: "/api/suppliers/", method: "get", ...variables, signal });

/**
 * This class describes the Supplier view set class it allows
 * us to perform, create, list, retrive and many other actions
 * related to Supplier
 */
export const apiSuppliersListQuery = (
  variables: ApiSuppliersListVariables
): [
  reactQuery.QueryKey,
  ({ signal }: { signal?: AbortSignal }) => Promise<ApiSuppliersListResponse>
] => [
  queryKeyFn({
    path: "/api/suppliers/",
    operationId: "api_suppliers_list",
    variables,
  }),
  async ({ signal }: { signal?: AbortSignal }) =>
    fetchApiSuppliersList({ ...variables }, signal),
];

export type ApiSuppliersRetrievePathParams = {
  /**
   * A unique integer value identifying this supplier.
   */
  id: number;
};

export type ApiSuppliersRetrieveError = Fetcher.ErrorWrapper<undefined>;

export type ApiSuppliersRetrieveVariables = {
  pathParams: ApiSuppliersRetrievePathParams;
} & OpenApiClientContext["fetcherOptions"];

/**
 * This class describes the Supplier view set class it allows
 * us to perform, create, list, retrive and many other actions
 * related to Supplier
 */
export const fetchApiSuppliersRetrieve = (
  variables: ApiSuppliersRetrieveVariables,
  signal?: AbortSignal
) =>
  openApiClientFetch<
    Schemas.Supplier,
    ApiSuppliersRetrieveError,
    undefined,
    {},
    {},
    ApiSuppliersRetrievePathParams
  >({ url: "/api/suppliers/{id}/", method: "get", ...variables, signal });

/**
 * This class describes the Supplier view set class it allows
 * us to perform, create, list, retrive and many other actions
 * related to Supplier
 */
export const apiSuppliersRetrieveQuery = (
  variables: ApiSuppliersRetrieveVariables
): [
  reactQuery.QueryKey,
  ({ signal }: { signal?: AbortSignal }) => Promise<Schemas.Supplier>
] => [
  queryKeyFn({
    path: "/api/suppliers/{id}/",
    operationId: "api_suppliers_retrieve",
    variables,
  }),
  async ({ signal }: { signal?: AbortSignal }) =>
    fetchApiSuppliersRetrieve({ ...variables }, signal),
];

export type QueryOperation =
  | {
      path: "/api/categories/";
      operationId: "apiCategoriesList";
      variables: ApiCategoriesListVariables;
    }
  | {
      path: "/api/categories/{id}/";
      operationId: "apiCategoriesRetrieve";
      variables: ApiCategoriesRetrieveVariables;
    }
  | {
      path: "/api/prices/";
      operationId: "apiPricesList";
      variables: ApiPricesListVariables;
    }
  | {
      path: "/api/prices/{id}/";
      operationId: "apiPricesRetrieve";
      variables: ApiPricesRetrieveVariables;
    }
  | {
      path: "/api/products/";
      operationId: "apiProductsList";
      variables: ApiProductsListVariables;
    }
  | {
      path: "/api/products/{id}/";
      operationId: "apiProductsRetrieve";
      variables: ApiProductsRetrieveVariables;
    }
  | {
      path: "/api/profiles/";
      operationId: "apiProfilesList";
      variables: ApiProfilesListVariables;
    }
  | {
      path: "/api/profiles/{id}/";
      operationId: "apiProfilesRetrieve";
      variables: ApiProfilesRetrieveVariables;
    }
  | {
      path: "/api/schema/";
      operationId: "apiSchemaRetrieve";
      variables: ApiSchemaRetrieveVariables;
    }
  | {
      path: "/api/suppliers/";
      operationId: "apiSuppliersList";
      variables: ApiSuppliersListVariables;
    }
  | {
      path: "/api/suppliers/{id}/";
      operationId: "apiSuppliersRetrieve";
      variables: ApiSuppliersRetrieveVariables;
    };
