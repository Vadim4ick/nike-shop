import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  I18NLocaleCode: { input: any; output: any; }
  JSON: { input: any; output: any; }
  LayoutFooterSocilasDynamicZoneInput: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type BooleanFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly contains: InputMaybe<Scalars['Boolean']['input']>;
  readonly containsi: InputMaybe<Scalars['Boolean']['input']>;
  readonly endsWith: InputMaybe<Scalars['Boolean']['input']>;
  readonly eq: InputMaybe<Scalars['Boolean']['input']>;
  readonly eqi: InputMaybe<Scalars['Boolean']['input']>;
  readonly gt: InputMaybe<Scalars['Boolean']['input']>;
  readonly gte: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly lt: InputMaybe<Scalars['Boolean']['input']>;
  readonly lte: InputMaybe<Scalars['Boolean']['input']>;
  readonly ne: InputMaybe<Scalars['Boolean']['input']>;
  readonly nei: InputMaybe<Scalars['Boolean']['input']>;
  readonly not: InputMaybe<BooleanFilterInput>;
  readonly notContains: InputMaybe<Scalars['Boolean']['input']>;
  readonly notContainsi: InputMaybe<Scalars['Boolean']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentElementsLinkItem = {
  readonly __typename?: 'ComponentElementsLinkItem';
  readonly id: Scalars['ID']['output'];
  readonly link: Maybe<ReadonlyArray<Maybe<ComponentUiLink>>>;
  readonly title: Scalars['String']['output'];
};


export type ComponentElementsLinkItemLinkArgs = {
  filters: InputMaybe<ComponentUiLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentElementsLinkItemFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentElementsLinkItemFiltersInput>>>;
  readonly link: InputMaybe<ComponentUiLinkFiltersInput>;
  readonly not: InputMaybe<ComponentElementsLinkItemFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentElementsLinkItemFiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentElementsLinkItemInput = {
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly link: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiLinkInput>>>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentEntityShoeOption = {
  readonly __typename?: 'ComponentEntityShoeOption';
  readonly color: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly medias: UploadFileEntityResponse;
};

export type ComponentEntityShoeOptionFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentEntityShoeOptionFiltersInput>>>;
  readonly color: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentEntityShoeOptionFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentEntityShoeOptionFiltersInput>>>;
};

export type ComponentEntityShoeOptionInput = {
  readonly color: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly medias: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentSharedMetaSocial = {
  readonly __typename?: 'ComponentSharedMetaSocial';
  readonly description: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly image: Maybe<UploadFileEntityResponse>;
  readonly socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork;
  readonly title: Scalars['String']['output'];
};

export type ComponentSharedMetaSocialFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  readonly description: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  readonly socialNetwork: InputMaybe<StringFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentSharedMetaSocialInput = {
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly image: InputMaybe<Scalars['ID']['input']>;
  readonly socialNetwork: InputMaybe<Enum_Componentsharedmetasocial_Socialnetwork>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedSeo = {
  readonly __typename?: 'ComponentSharedSeo';
  readonly canonicalURL: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly keywords: Maybe<Scalars['String']['output']>;
  readonly metaDescription: Scalars['String']['output'];
  readonly metaImage: Maybe<UploadFileEntityResponse>;
  readonly metaRobots: Maybe<Scalars['String']['output']>;
  readonly metaSocial: Maybe<ReadonlyArray<Maybe<ComponentSharedMetaSocial>>>;
  readonly metaTitle: Scalars['String']['output'];
  readonly metaViewport: Maybe<Scalars['String']['output']>;
  readonly structuredData: Maybe<Scalars['JSON']['output']>;
};


export type ComponentSharedSeoMetaSocialArgs = {
  filters: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSharedSeoInput = {
  readonly canonicalURL: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly keywords: InputMaybe<Scalars['String']['input']>;
  readonly metaDescription: InputMaybe<Scalars['String']['input']>;
  readonly metaImage: InputMaybe<Scalars['ID']['input']>;
  readonly metaRobots: InputMaybe<Scalars['String']['input']>;
  readonly metaSocial: InputMaybe<ReadonlyArray<InputMaybe<ComponentSharedMetaSocialInput>>>;
  readonly metaTitle: InputMaybe<Scalars['String']['input']>;
  readonly metaViewport: InputMaybe<Scalars['String']['input']>;
  readonly structuredData: InputMaybe<Scalars['JSON']['input']>;
};

export type ComponentUiDiscountCard = {
  readonly __typename?: 'ComponentUiDiscountCard';
  readonly description2: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly title: Scalars['String']['output'];
};

export type ComponentUiDiscountCardFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiDiscountCardFiltersInput>>>;
  readonly description2: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentUiDiscountCardFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiDiscountCardFiltersInput>>>;
  readonly title: InputMaybe<StringFilterInput>;
};

export type ComponentUiDiscountCardInput = {
  readonly description2: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type ComponentUiFigure = {
  readonly __typename?: 'ComponentUiFigure';
  readonly caption: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly image: UploadFileEntityResponse;
  readonly linkButton: Maybe<ReadonlyArray<Maybe<ComponentUiLink>>>;
};


export type ComponentUiFigureLinkButtonArgs = {
  filters: InputMaybe<ComponentUiLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentUiFigureFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiFigureFiltersInput>>>;
  readonly caption: InputMaybe<StringFilterInput>;
  readonly linkButton: InputMaybe<ComponentUiLinkFiltersInput>;
  readonly not: InputMaybe<ComponentUiFigureFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiFigureFiltersInput>>>;
};

export type ComponentUiFigureInput = {
  readonly caption: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly image: InputMaybe<Scalars['ID']['input']>;
  readonly linkButton: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiLinkInput>>>;
};

export type ComponentUiLink = {
  readonly __typename?: 'ComponentUiLink';
  readonly href: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly label: Scalars['String']['output'];
};

export type ComponentUiLinkFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiLinkFiltersInput>>>;
  readonly href: InputMaybe<StringFilterInput>;
  readonly label: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ComponentUiLinkFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiLinkFiltersInput>>>;
};

export type ComponentUiLinkInput = {
  readonly href: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly label: InputMaybe<Scalars['String']['input']>;
};

export type ContentReleasesRelease = {
  readonly __typename?: 'ContentReleasesRelease';
  readonly actions: Maybe<ContentReleasesReleaseActionRelationResponseCollection>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly name: Scalars['String']['output'];
  readonly releasedAt: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type ContentReleasesReleaseActionsArgs = {
  filters: InputMaybe<ContentReleasesReleaseActionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentReleasesReleaseAction = {
  readonly __typename?: 'ContentReleasesReleaseAction';
  readonly contentType: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly entry: Maybe<GenericMorph>;
  readonly release: Maybe<ContentReleasesReleaseEntityResponse>;
  readonly type: Enum_Contentreleasesreleaseaction_Type;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type ContentReleasesReleaseActionEntity = {
  readonly __typename?: 'ContentReleasesReleaseActionEntity';
  readonly attributes: Maybe<ContentReleasesReleaseAction>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type ContentReleasesReleaseActionEntityResponse = {
  readonly __typename?: 'ContentReleasesReleaseActionEntityResponse';
  readonly data: Maybe<ContentReleasesReleaseActionEntity>;
};

export type ContentReleasesReleaseActionEntityResponseCollection = {
  readonly __typename?: 'ContentReleasesReleaseActionEntityResponseCollection';
  readonly data: ReadonlyArray<ContentReleasesReleaseActionEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type ContentReleasesReleaseActionFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ContentReleasesReleaseActionFiltersInput>>>;
  readonly contentType: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<ContentReleasesReleaseActionFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ContentReleasesReleaseActionFiltersInput>>>;
  readonly release: InputMaybe<ContentReleasesReleaseFiltersInput>;
  readonly type: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type ContentReleasesReleaseActionInput = {
  readonly contentType: InputMaybe<Scalars['String']['input']>;
  readonly release: InputMaybe<Scalars['ID']['input']>;
  readonly type: InputMaybe<Enum_Contentreleasesreleaseaction_Type>;
};

export type ContentReleasesReleaseActionRelationResponseCollection = {
  readonly __typename?: 'ContentReleasesReleaseActionRelationResponseCollection';
  readonly data: ReadonlyArray<ContentReleasesReleaseActionEntity>;
};

export type ContentReleasesReleaseEntity = {
  readonly __typename?: 'ContentReleasesReleaseEntity';
  readonly attributes: Maybe<ContentReleasesRelease>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type ContentReleasesReleaseEntityResponse = {
  readonly __typename?: 'ContentReleasesReleaseEntityResponse';
  readonly data: Maybe<ContentReleasesReleaseEntity>;
};

export type ContentReleasesReleaseEntityResponseCollection = {
  readonly __typename?: 'ContentReleasesReleaseEntityResponseCollection';
  readonly data: ReadonlyArray<ContentReleasesReleaseEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type ContentReleasesReleaseFiltersInput = {
  readonly actions: InputMaybe<ContentReleasesReleaseActionFiltersInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ContentReleasesReleaseFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ContentReleasesReleaseFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ContentReleasesReleaseFiltersInput>>>;
  readonly releasedAt: InputMaybe<DateTimeFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type ContentReleasesReleaseInput = {
  readonly actions: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly releasedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateTimeFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly contains: InputMaybe<Scalars['DateTime']['input']>;
  readonly containsi: InputMaybe<Scalars['DateTime']['input']>;
  readonly endsWith: InputMaybe<Scalars['DateTime']['input']>;
  readonly eq: InputMaybe<Scalars['DateTime']['input']>;
  readonly eqi: InputMaybe<Scalars['DateTime']['input']>;
  readonly gt: InputMaybe<Scalars['DateTime']['input']>;
  readonly gte: InputMaybe<Scalars['DateTime']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly lt: InputMaybe<Scalars['DateTime']['input']>;
  readonly lte: InputMaybe<Scalars['DateTime']['input']>;
  readonly ne: InputMaybe<Scalars['DateTime']['input']>;
  readonly nei: InputMaybe<Scalars['DateTime']['input']>;
  readonly not: InputMaybe<DateTimeFilterInput>;
  readonly notContains: InputMaybe<Scalars['DateTime']['input']>;
  readonly notContainsi: InputMaybe<Scalars['DateTime']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Componentsharedmetasocial_Socialnetwork {
  Facebook = 'Facebook',
  Twitter = 'Twitter'
}

export enum Enum_Contentreleasesreleaseaction_Type {
  Publish = 'publish',
  Unpublish = 'unpublish'
}

export enum Enum_Shoe_Type {
  MensShoes = 'Mens_shoes',
  WoomensShoes = 'Woomens_shoes'
}

export type Error = {
  readonly __typename?: 'Error';
  readonly code: Scalars['String']['output'];
  readonly message: Maybe<Scalars['String']['output']>;
};

export type FileInfoInput = {
  readonly alternativeText: InputMaybe<Scalars['String']['input']>;
  readonly caption: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly contains: InputMaybe<Scalars['Float']['input']>;
  readonly containsi: InputMaybe<Scalars['Float']['input']>;
  readonly endsWith: InputMaybe<Scalars['Float']['input']>;
  readonly eq: InputMaybe<Scalars['Float']['input']>;
  readonly eqi: InputMaybe<Scalars['Float']['input']>;
  readonly gt: InputMaybe<Scalars['Float']['input']>;
  readonly gte: InputMaybe<Scalars['Float']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly lt: InputMaybe<Scalars['Float']['input']>;
  readonly lte: InputMaybe<Scalars['Float']['input']>;
  readonly ne: InputMaybe<Scalars['Float']['input']>;
  readonly nei: InputMaybe<Scalars['Float']['input']>;
  readonly not: InputMaybe<FloatFilterInput>;
  readonly notContains: InputMaybe<Scalars['Float']['input']>;
  readonly notContainsi: InputMaybe<Scalars['Float']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = ComponentElementsLinkItem | ComponentEntityShoeOption | ComponentSharedMetaSocial | ComponentSharedSeo | ComponentUiDiscountCard | ComponentUiFigure | ComponentUiLink | ContentReleasesRelease | ContentReleasesReleaseAction | I18NLocale | LayoutFooter | LayoutSubFooter | LinkList | PageHome | PageShoe | PreHeader | SectionBanner | SectionDiscount | SectionMembership | SectionShoe | SectionTrend | Shoe | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  readonly __typename?: 'I18NLocale';
  readonly code: Maybe<Scalars['String']['output']>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  readonly __typename?: 'I18NLocaleEntity';
  readonly attributes: Maybe<I18NLocale>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  readonly __typename?: 'I18NLocaleEntityResponse';
  readonly data: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  readonly __typename?: 'I18NLocaleEntityResponseCollection';
  readonly data: ReadonlyArray<I18NLocaleEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<I18NLocaleFiltersInput>>>;
  readonly code: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<I18NLocaleFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<I18NLocaleFiltersInput>>>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly contains: InputMaybe<Scalars['ID']['input']>;
  readonly containsi: InputMaybe<Scalars['ID']['input']>;
  readonly endsWith: InputMaybe<Scalars['ID']['input']>;
  readonly eq: InputMaybe<Scalars['ID']['input']>;
  readonly eqi: InputMaybe<Scalars['ID']['input']>;
  readonly gt: InputMaybe<Scalars['ID']['input']>;
  readonly gte: InputMaybe<Scalars['ID']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly lt: InputMaybe<Scalars['ID']['input']>;
  readonly lte: InputMaybe<Scalars['ID']['input']>;
  readonly ne: InputMaybe<Scalars['ID']['input']>;
  readonly nei: InputMaybe<Scalars['ID']['input']>;
  readonly not: InputMaybe<IdFilterInput>;
  readonly notContains: InputMaybe<Scalars['ID']['input']>;
  readonly notContainsi: InputMaybe<Scalars['ID']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly contains: InputMaybe<Scalars['Int']['input']>;
  readonly containsi: InputMaybe<Scalars['Int']['input']>;
  readonly endsWith: InputMaybe<Scalars['Int']['input']>;
  readonly eq: InputMaybe<Scalars['Int']['input']>;
  readonly eqi: InputMaybe<Scalars['Int']['input']>;
  readonly gt: InputMaybe<Scalars['Int']['input']>;
  readonly gte: InputMaybe<Scalars['Int']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly lt: InputMaybe<Scalars['Int']['input']>;
  readonly lte: InputMaybe<Scalars['Int']['input']>;
  readonly ne: InputMaybe<Scalars['Int']['input']>;
  readonly nei: InputMaybe<Scalars['Int']['input']>;
  readonly not: InputMaybe<IntFilterInput>;
  readonly notContains: InputMaybe<Scalars['Int']['input']>;
  readonly notContainsi: InputMaybe<Scalars['Int']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly contains: InputMaybe<Scalars['JSON']['input']>;
  readonly containsi: InputMaybe<Scalars['JSON']['input']>;
  readonly endsWith: InputMaybe<Scalars['JSON']['input']>;
  readonly eq: InputMaybe<Scalars['JSON']['input']>;
  readonly eqi: InputMaybe<Scalars['JSON']['input']>;
  readonly gt: InputMaybe<Scalars['JSON']['input']>;
  readonly gte: InputMaybe<Scalars['JSON']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly lt: InputMaybe<Scalars['JSON']['input']>;
  readonly lte: InputMaybe<Scalars['JSON']['input']>;
  readonly ne: InputMaybe<Scalars['JSON']['input']>;
  readonly nei: InputMaybe<Scalars['JSON']['input']>;
  readonly not: InputMaybe<JsonFilterInput>;
  readonly notContains: InputMaybe<Scalars['JSON']['input']>;
  readonly notContainsi: InputMaybe<Scalars['JSON']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['JSON']['input']>;
};

export type LayoutFooter = {
  readonly __typename?: 'LayoutFooter';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly links: ReadonlyArray<Maybe<ComponentElementsLinkItem>>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<LayoutFooterRelationResponseCollection>;
  readonly mainLinks: Maybe<ComponentElementsLinkItem>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly socilas: Maybe<ReadonlyArray<Maybe<LayoutFooterSocilasDynamicZone>>>;
  readonly supportLinks: Maybe<ComponentElementsLinkItem>;
  readonly title: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type LayoutFooterLinksArgs = {
  filters: InputMaybe<ComponentElementsLinkItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type LayoutFooterLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type LayoutFooterEntity = {
  readonly __typename?: 'LayoutFooterEntity';
  readonly attributes: Maybe<LayoutFooter>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type LayoutFooterEntityResponse = {
  readonly __typename?: 'LayoutFooterEntityResponse';
  readonly data: Maybe<LayoutFooterEntity>;
};

export type LayoutFooterInput = {
  readonly links: InputMaybe<ReadonlyArray<InputMaybe<ComponentElementsLinkItemInput>>>;
  readonly mainLinks: InputMaybe<ComponentElementsLinkItemInput>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly socilas: InputMaybe<ReadonlyArray<Scalars['LayoutFooterSocilasDynamicZoneInput']['input']>>;
  readonly supportLinks: InputMaybe<ComponentElementsLinkItemInput>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type LayoutFooterRelationResponseCollection = {
  readonly __typename?: 'LayoutFooterRelationResponseCollection';
  readonly data: ReadonlyArray<LayoutFooterEntity>;
};

export type LayoutFooterSocilasDynamicZone = ComponentUiLink | Error;

export type LayoutSubFooter = {
  readonly __typename?: 'LayoutSubFooter';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly links: ReadonlyArray<Maybe<ComponentUiLink>>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<LayoutSubFooterRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type LayoutSubFooterLinksArgs = {
  filters: InputMaybe<ComponentUiLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type LayoutSubFooterLocalizationsArgs = {
  filters: InputMaybe<LayoutSubFooterFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type LayoutSubFooterEntity = {
  readonly __typename?: 'LayoutSubFooterEntity';
  readonly attributes: Maybe<LayoutSubFooter>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type LayoutSubFooterEntityResponse = {
  readonly __typename?: 'LayoutSubFooterEntityResponse';
  readonly data: Maybe<LayoutSubFooterEntity>;
};

export type LayoutSubFooterEntityResponseCollection = {
  readonly __typename?: 'LayoutSubFooterEntityResponseCollection';
  readonly data: ReadonlyArray<LayoutSubFooterEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type LayoutSubFooterFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<LayoutSubFooterFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly links: InputMaybe<ComponentUiLinkFiltersInput>;
  readonly locale: InputMaybe<StringFilterInput>;
  readonly localizations: InputMaybe<LayoutSubFooterFiltersInput>;
  readonly not: InputMaybe<LayoutSubFooterFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<LayoutSubFooterFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type LayoutSubFooterInput = {
  readonly links: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiLinkInput>>>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type LayoutSubFooterRelationResponseCollection = {
  readonly __typename?: 'LayoutSubFooterRelationResponseCollection';
  readonly data: ReadonlyArray<LayoutSubFooterEntity>;
};

export type LinkList = {
  readonly __typename?: 'LinkList';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly links: ReadonlyArray<Maybe<ComponentElementsLinkItem>>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<LinkListRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type LinkListLinksArgs = {
  filters: InputMaybe<ComponentElementsLinkItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type LinkListLocalizationsArgs = {
  filters: InputMaybe<LinkListFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type LinkListEntity = {
  readonly __typename?: 'LinkListEntity';
  readonly attributes: Maybe<LinkList>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type LinkListEntityResponse = {
  readonly __typename?: 'LinkListEntityResponse';
  readonly data: Maybe<LinkListEntity>;
};

export type LinkListEntityResponseCollection = {
  readonly __typename?: 'LinkListEntityResponseCollection';
  readonly data: ReadonlyArray<LinkListEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type LinkListFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<LinkListFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly links: InputMaybe<ComponentElementsLinkItemFiltersInput>;
  readonly locale: InputMaybe<StringFilterInput>;
  readonly localizations: InputMaybe<LinkListFiltersInput>;
  readonly not: InputMaybe<LinkListFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<LinkListFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly title: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type LinkListInput = {
  readonly links: InputMaybe<ReadonlyArray<InputMaybe<ComponentElementsLinkItemInput>>>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type LinkListRelationResponseCollection = {
  readonly __typename?: 'LinkListRelationResponseCollection';
  readonly data: ReadonlyArray<LinkListEntity>;
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  readonly changePassword: Maybe<UsersPermissionsLoginPayload>;
  readonly createContentReleasesRelease: Maybe<ContentReleasesReleaseEntityResponse>;
  readonly createContentReleasesReleaseAction: Maybe<ContentReleasesReleaseActionEntityResponse>;
  readonly createLayoutFooterLocalization: Maybe<LayoutFooterEntityResponse>;
  readonly createLayoutSubFooter: Maybe<LayoutSubFooterEntityResponse>;
  readonly createLayoutSubFooterLocalization: Maybe<LayoutSubFooterEntityResponse>;
  readonly createLinkList: Maybe<LinkListEntityResponse>;
  readonly createLinkListLocalization: Maybe<LinkListEntityResponse>;
  readonly createPageHomeLocalization: Maybe<PageHomeEntityResponse>;
  readonly createPageShoeLocalization: Maybe<PageShoeEntityResponse>;
  readonly createPreHeaderLocalization: Maybe<PreHeaderEntityResponse>;
  readonly createSectionBannerLocalization: Maybe<SectionBannerEntityResponse>;
  readonly createSectionDiscount: Maybe<SectionDiscountEntityResponse>;
  readonly createSectionDiscountLocalization: Maybe<SectionDiscountEntityResponse>;
  readonly createSectionMembershipLocalization: Maybe<SectionMembershipEntityResponse>;
  readonly createSectionShoeLocalization: Maybe<SectionShoeEntityResponse>;
  readonly createSectionTrendLocalization: Maybe<SectionTrendEntityResponse>;
  readonly createShoe: Maybe<ShoeEntityResponse>;
  readonly createShoeLocalization: Maybe<ShoeEntityResponse>;
  readonly createUploadFile: Maybe<UploadFileEntityResponse>;
  readonly createUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  readonly createUsersPermissionsRole: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  readonly createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  readonly deleteContentReleasesRelease: Maybe<ContentReleasesReleaseEntityResponse>;
  readonly deleteContentReleasesReleaseAction: Maybe<ContentReleasesReleaseActionEntityResponse>;
  readonly deleteLayoutFooter: Maybe<LayoutFooterEntityResponse>;
  readonly deleteLayoutSubFooter: Maybe<LayoutSubFooterEntityResponse>;
  readonly deleteLinkList: Maybe<LinkListEntityResponse>;
  readonly deletePageHome: Maybe<PageHomeEntityResponse>;
  readonly deletePageShoe: Maybe<PageShoeEntityResponse>;
  readonly deletePreHeader: Maybe<PreHeaderEntityResponse>;
  readonly deleteSectionBanner: Maybe<SectionBannerEntityResponse>;
  readonly deleteSectionDiscount: Maybe<SectionDiscountEntityResponse>;
  readonly deleteSectionMembership: Maybe<SectionMembershipEntityResponse>;
  readonly deleteSectionShoe: Maybe<SectionShoeEntityResponse>;
  readonly deleteSectionTrend: Maybe<SectionTrendEntityResponse>;
  readonly deleteShoe: Maybe<ShoeEntityResponse>;
  readonly deleteUploadFile: Maybe<UploadFileEntityResponse>;
  readonly deleteUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  readonly deleteUsersPermissionsRole: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  readonly deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  readonly emailConfirmation: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  readonly forgotPassword: Maybe<UsersPermissionsPasswordPayload>;
  readonly login: UsersPermissionsLoginPayload;
  readonly multipleUpload: ReadonlyArray<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  readonly register: UsersPermissionsLoginPayload;
  readonly removeFile: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  readonly resetPassword: Maybe<UsersPermissionsLoginPayload>;
  readonly updateContentReleasesRelease: Maybe<ContentReleasesReleaseEntityResponse>;
  readonly updateContentReleasesReleaseAction: Maybe<ContentReleasesReleaseActionEntityResponse>;
  readonly updateFileInfo: UploadFileEntityResponse;
  readonly updateLayoutFooter: Maybe<LayoutFooterEntityResponse>;
  readonly updateLayoutSubFooter: Maybe<LayoutSubFooterEntityResponse>;
  readonly updateLinkList: Maybe<LinkListEntityResponse>;
  readonly updatePageHome: Maybe<PageHomeEntityResponse>;
  readonly updatePageShoe: Maybe<PageShoeEntityResponse>;
  readonly updatePreHeader: Maybe<PreHeaderEntityResponse>;
  readonly updateSectionBanner: Maybe<SectionBannerEntityResponse>;
  readonly updateSectionDiscount: Maybe<SectionDiscountEntityResponse>;
  readonly updateSectionMembership: Maybe<SectionMembershipEntityResponse>;
  readonly updateSectionShoe: Maybe<SectionShoeEntityResponse>;
  readonly updateSectionTrend: Maybe<SectionTrendEntityResponse>;
  readonly updateShoe: Maybe<ShoeEntityResponse>;
  readonly updateUploadFile: Maybe<UploadFileEntityResponse>;
  readonly updateUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  readonly updateUsersPermissionsRole: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  readonly updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  readonly upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateContentReleasesReleaseArgs = {
  data: ContentReleasesReleaseInput;
};


export type MutationCreateContentReleasesReleaseActionArgs = {
  data: ContentReleasesReleaseActionInput;
};


export type MutationCreateLayoutFooterLocalizationArgs = {
  data: InputMaybe<LayoutFooterInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateLayoutSubFooterArgs = {
  data: LayoutSubFooterInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateLayoutSubFooterLocalizationArgs = {
  data: InputMaybe<LayoutSubFooterInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateLinkListArgs = {
  data: LinkListInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateLinkListLocalizationArgs = {
  data: InputMaybe<LinkListInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreatePageHomeLocalizationArgs = {
  data: InputMaybe<PageHomeInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreatePageShoeLocalizationArgs = {
  data: InputMaybe<PageShoeInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreatePreHeaderLocalizationArgs = {
  data: InputMaybe<PreHeaderInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateSectionBannerLocalizationArgs = {
  data: InputMaybe<SectionBannerInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateSectionDiscountArgs = {
  data: SectionDiscountInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateSectionDiscountLocalizationArgs = {
  data: InputMaybe<SectionDiscountInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateSectionMembershipLocalizationArgs = {
  data: InputMaybe<SectionMembershipInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateSectionShoeLocalizationArgs = {
  data: InputMaybe<SectionShoeInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateSectionTrendLocalizationArgs = {
  data: InputMaybe<SectionTrendInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateShoeArgs = {
  data: ShoeInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateShoeLocalizationArgs = {
  data: InputMaybe<ShoeInput>;
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteContentReleasesReleaseArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteContentReleasesReleaseActionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteLayoutFooterArgs = {
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteLayoutSubFooterArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteLinkListArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeletePageHomeArgs = {
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeletePageShoeArgs = {
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeletePreHeaderArgs = {
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteSectionBannerArgs = {
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteSectionDiscountArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteSectionMembershipArgs = {
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteSectionShoeArgs = {
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteSectionTrendArgs = {
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteShoeArgs = {
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field: InputMaybe<Scalars['String']['input']>;
  files: ReadonlyArray<InputMaybe<Scalars['Upload']['input']>>;
  ref: InputMaybe<Scalars['String']['input']>;
  refId: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateContentReleasesReleaseArgs = {
  data: ContentReleasesReleaseInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateContentReleasesReleaseActionArgs = {
  data: ContentReleasesReleaseActionInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info: InputMaybe<FileInfoInput>;
};


export type MutationUpdateLayoutFooterArgs = {
  data: LayoutFooterInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateLayoutSubFooterArgs = {
  data: LayoutSubFooterInput;
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateLinkListArgs = {
  data: LinkListInput;
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdatePageHomeArgs = {
  data: PageHomeInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdatePageShoeArgs = {
  data: PageShoeInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdatePreHeaderArgs = {
  data: PreHeaderInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateSectionBannerArgs = {
  data: SectionBannerInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateSectionDiscountArgs = {
  data: SectionDiscountInput;
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateSectionMembershipArgs = {
  data: SectionMembershipInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateSectionShoeArgs = {
  data: SectionShoeInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateSectionTrendArgs = {
  data: SectionTrendInput;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateShoeArgs = {
  data: ShoeInput;
  id: Scalars['ID']['input'];
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info: InputMaybe<FileInfoInput>;
  ref: InputMaybe<Scalars['String']['input']>;
  refId: InputMaybe<Scalars['ID']['input']>;
};

export type PageHome = {
  readonly __typename?: 'PageHome';
  readonly SEO: Maybe<ComponentSharedSeo>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<PageHomeRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly section_discount: Maybe<SectionDiscountEntityResponse>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type PageHomeLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type PageHomeEntity = {
  readonly __typename?: 'PageHomeEntity';
  readonly attributes: Maybe<PageHome>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type PageHomeEntityResponse = {
  readonly __typename?: 'PageHomeEntityResponse';
  readonly data: Maybe<PageHomeEntity>;
};

export type PageHomeInput = {
  readonly SEO: InputMaybe<ComponentSharedSeoInput>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly section_discount: InputMaybe<Scalars['ID']['input']>;
};

export type PageHomeRelationResponseCollection = {
  readonly __typename?: 'PageHomeRelationResponseCollection';
  readonly data: ReadonlyArray<PageHomeEntity>;
};

export type PageShoe = {
  readonly __typename?: 'PageShoe';
  readonly SEO: Maybe<ComponentSharedSeo>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<PageShoeRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly section_discount: Maybe<SectionDiscountEntityResponse>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type PageShoeLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type PageShoeEntity = {
  readonly __typename?: 'PageShoeEntity';
  readonly attributes: Maybe<PageShoe>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type PageShoeEntityResponse = {
  readonly __typename?: 'PageShoeEntityResponse';
  readonly data: Maybe<PageShoeEntity>;
};

export type PageShoeInput = {
  readonly SEO: InputMaybe<ComponentSharedSeoInput>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly section_discount: InputMaybe<Scalars['ID']['input']>;
};

export type PageShoeRelationResponseCollection = {
  readonly __typename?: 'PageShoeRelationResponseCollection';
  readonly data: ReadonlyArray<PageShoeEntity>;
};

export type Pagination = {
  readonly __typename?: 'Pagination';
  readonly page: Scalars['Int']['output'];
  readonly pageCount: Scalars['Int']['output'];
  readonly pageSize: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export type PaginationArg = {
  readonly limit: InputMaybe<Scalars['Int']['input']>;
  readonly page: InputMaybe<Scalars['Int']['input']>;
  readonly pageSize: InputMaybe<Scalars['Int']['input']>;
  readonly start: InputMaybe<Scalars['Int']['input']>;
};

export type PreHeader = {
  readonly __typename?: 'PreHeader';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly links: ReadonlyArray<Maybe<ComponentUiLink>>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<PreHeaderRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type PreHeaderLinksArgs = {
  filters: InputMaybe<ComponentUiLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type PreHeaderLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type PreHeaderEntity = {
  readonly __typename?: 'PreHeaderEntity';
  readonly attributes: Maybe<PreHeader>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type PreHeaderEntityResponse = {
  readonly __typename?: 'PreHeaderEntityResponse';
  readonly data: Maybe<PreHeaderEntity>;
};

export type PreHeaderInput = {
  readonly links: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiLinkInput>>>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type PreHeaderRelationResponseCollection = {
  readonly __typename?: 'PreHeaderRelationResponseCollection';
  readonly data: ReadonlyArray<PreHeaderEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  readonly __typename?: 'Query';
  readonly contentReleasesRelease: Maybe<ContentReleasesReleaseEntityResponse>;
  readonly contentReleasesReleaseAction: Maybe<ContentReleasesReleaseActionEntityResponse>;
  readonly contentReleasesReleaseActions: Maybe<ContentReleasesReleaseActionEntityResponseCollection>;
  readonly contentReleasesReleases: Maybe<ContentReleasesReleaseEntityResponseCollection>;
  readonly i18NLocale: Maybe<I18NLocaleEntityResponse>;
  readonly i18NLocales: Maybe<I18NLocaleEntityResponseCollection>;
  readonly layoutFooter: Maybe<LayoutFooterEntityResponse>;
  readonly layoutSubFooter: Maybe<LayoutSubFooterEntityResponse>;
  readonly layoutSubFooters: Maybe<LayoutSubFooterEntityResponseCollection>;
  readonly linkList: Maybe<LinkListEntityResponse>;
  readonly linkLists: Maybe<LinkListEntityResponseCollection>;
  readonly me: Maybe<UsersPermissionsMe>;
  readonly pageHome: Maybe<PageHomeEntityResponse>;
  readonly pageShoe: Maybe<PageShoeEntityResponse>;
  readonly preHeader: Maybe<PreHeaderEntityResponse>;
  readonly sectionBanner: Maybe<SectionBannerEntityResponse>;
  readonly sectionDiscount: Maybe<SectionDiscountEntityResponse>;
  readonly sectionDiscounts: Maybe<SectionDiscountEntityResponseCollection>;
  readonly sectionMembership: Maybe<SectionMembershipEntityResponse>;
  readonly sectionShoe: Maybe<SectionShoeEntityResponse>;
  readonly sectionTrend: Maybe<SectionTrendEntityResponse>;
  readonly shoe: Maybe<ShoeEntityResponse>;
  readonly shoes: Maybe<ShoeEntityResponseCollection>;
  readonly uploadFile: Maybe<UploadFileEntityResponse>;
  readonly uploadFiles: Maybe<UploadFileEntityResponseCollection>;
  readonly uploadFolder: Maybe<UploadFolderEntityResponse>;
  readonly uploadFolders: Maybe<UploadFolderEntityResponseCollection>;
  readonly usersPermissionsRole: Maybe<UsersPermissionsRoleEntityResponse>;
  readonly usersPermissionsRoles: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  readonly usersPermissionsUser: Maybe<UsersPermissionsUserEntityResponse>;
  readonly usersPermissionsUsers: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryContentReleasesReleaseArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryContentReleasesReleaseActionArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryContentReleasesReleaseActionsArgs = {
  filters: InputMaybe<ContentReleasesReleaseActionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContentReleasesReleasesArgs = {
  filters: InputMaybe<ContentReleasesReleaseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryI18NLocaleArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLayoutFooterArgs = {
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryLayoutSubFooterArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryLayoutSubFootersArgs = {
  filters: InputMaybe<LayoutSubFooterFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLinkListArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryLinkListsArgs = {
  filters: InputMaybe<LinkListFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPageHomeArgs = {
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryPageShoeArgs = {
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryPreHeaderArgs = {
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QuerySectionBannerArgs = {
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QuerySectionDiscountArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QuerySectionDiscountsArgs = {
  filters: InputMaybe<SectionDiscountFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySectionMembershipArgs = {
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QuerySectionShoeArgs = {
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QuerySectionTrendArgs = {
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryShoeArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryShoesArgs = {
  filters: InputMaybe<ShoeFiltersInput>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  readonly __typename?: 'ResponseCollectionMeta';
  readonly pagination: Pagination;
};

export type SectionBanner = {
  readonly __typename?: 'SectionBanner';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly linkButton: ReadonlyArray<Maybe<ComponentUiLink>>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<SectionBannerRelationResponseCollection>;
  readonly preSectionTitle: Scalars['String']['output'];
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly sectionTitle: Scalars['String']['output'];
  readonly subSectionTitle: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly video: UploadFileEntityResponse;
};


export type SectionBannerLinkButtonArgs = {
  filters: InputMaybe<ComponentUiLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type SectionBannerLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type SectionBannerEntity = {
  readonly __typename?: 'SectionBannerEntity';
  readonly attributes: Maybe<SectionBanner>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type SectionBannerEntityResponse = {
  readonly __typename?: 'SectionBannerEntityResponse';
  readonly data: Maybe<SectionBannerEntity>;
};

export type SectionBannerInput = {
  readonly linkButton: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiLinkInput>>>;
  readonly preSectionTitle: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly sectionTitle: InputMaybe<Scalars['String']['input']>;
  readonly subSectionTitle: InputMaybe<Scalars['String']['input']>;
  readonly video: InputMaybe<Scalars['ID']['input']>;
};

export type SectionBannerRelationResponseCollection = {
  readonly __typename?: 'SectionBannerRelationResponseCollection';
  readonly data: ReadonlyArray<SectionBannerEntity>;
};

export type SectionDiscount = {
  readonly __typename?: 'SectionDiscount';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly items: Maybe<ReadonlyArray<Maybe<ComponentUiDiscountCard>>>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<SectionDiscountRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type SectionDiscountItemsArgs = {
  filters: InputMaybe<ComponentUiDiscountCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type SectionDiscountLocalizationsArgs = {
  filters: InputMaybe<SectionDiscountFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type SectionDiscountEntity = {
  readonly __typename?: 'SectionDiscountEntity';
  readonly attributes: Maybe<SectionDiscount>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type SectionDiscountEntityResponse = {
  readonly __typename?: 'SectionDiscountEntityResponse';
  readonly data: Maybe<SectionDiscountEntity>;
};

export type SectionDiscountEntityResponseCollection = {
  readonly __typename?: 'SectionDiscountEntityResponseCollection';
  readonly data: ReadonlyArray<SectionDiscountEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type SectionDiscountFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<SectionDiscountFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly items: InputMaybe<ComponentUiDiscountCardFiltersInput>;
  readonly locale: InputMaybe<StringFilterInput>;
  readonly localizations: InputMaybe<SectionDiscountFiltersInput>;
  readonly not: InputMaybe<SectionDiscountFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<SectionDiscountFiltersInput>>>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type SectionDiscountInput = {
  readonly items: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiDiscountCardInput>>>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type SectionDiscountRelationResponseCollection = {
  readonly __typename?: 'SectionDiscountRelationResponseCollection';
  readonly data: ReadonlyArray<SectionDiscountEntity>;
};

export type SectionMembership = {
  readonly __typename?: 'SectionMembership';
  readonly card: Maybe<ReadonlyArray<Maybe<ComponentUiFigure>>>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<SectionMembershipRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type SectionMembershipCardArgs = {
  filters: InputMaybe<ComponentUiFigureFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type SectionMembershipLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type SectionMembershipEntity = {
  readonly __typename?: 'SectionMembershipEntity';
  readonly attributes: Maybe<SectionMembership>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type SectionMembershipEntityResponse = {
  readonly __typename?: 'SectionMembershipEntityResponse';
  readonly data: Maybe<SectionMembershipEntity>;
};

export type SectionMembershipInput = {
  readonly card: InputMaybe<ReadonlyArray<InputMaybe<ComponentUiFigureInput>>>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type SectionMembershipRelationResponseCollection = {
  readonly __typename?: 'SectionMembershipRelationResponseCollection';
  readonly data: ReadonlyArray<SectionMembershipEntity>;
};

export type SectionShoe = {
  readonly __typename?: 'SectionShoe';
  readonly addToBagButton: Maybe<ComponentUiLink>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly detailsButton: Maybe<ComponentUiLink>;
  readonly favoriteButton: Maybe<ComponentUiLink>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<SectionShoeRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly shoe: Maybe<ShoeEntityResponse>;
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type SectionShoeLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type SectionShoeEntity = {
  readonly __typename?: 'SectionShoeEntity';
  readonly attributes: Maybe<SectionShoe>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type SectionShoeEntityResponse = {
  readonly __typename?: 'SectionShoeEntityResponse';
  readonly data: Maybe<SectionShoeEntity>;
};

export type SectionShoeInput = {
  readonly addToBagButton: InputMaybe<ComponentUiLinkInput>;
  readonly detailsButton: InputMaybe<ComponentUiLinkInput>;
  readonly favoriteButton: InputMaybe<ComponentUiLinkInput>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly shoe: InputMaybe<Scalars['ID']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
};

export type SectionShoeRelationResponseCollection = {
  readonly __typename?: 'SectionShoeRelationResponseCollection';
  readonly data: ReadonlyArray<SectionShoeEntity>;
};

export type SectionTrend = {
  readonly __typename?: 'SectionTrend';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<SectionTrendRelationResponseCollection>;
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly sectionTitle: Scalars['String']['output'];
  readonly shoes: Maybe<ShoeRelationResponseCollection>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type SectionTrendLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type SectionTrendShoesArgs = {
  filters: InputMaybe<ShoeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type SectionTrendEntity = {
  readonly __typename?: 'SectionTrendEntity';
  readonly attributes: Maybe<SectionTrend>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type SectionTrendEntityResponse = {
  readonly __typename?: 'SectionTrendEntityResponse';
  readonly data: Maybe<SectionTrendEntity>;
};

export type SectionTrendInput = {
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly sectionTitle: InputMaybe<Scalars['String']['input']>;
  readonly shoes: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type SectionTrendRelationResponseCollection = {
  readonly __typename?: 'SectionTrendRelationResponseCollection';
  readonly data: ReadonlyArray<SectionTrendEntity>;
};

export type Shoe = {
  readonly __typename?: 'Shoe';
  readonly content: Maybe<Scalars['String']['output']>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly description: Scalars['String']['output'];
  readonly details: Maybe<Scalars['String']['output']>;
  readonly locale: Maybe<Scalars['String']['output']>;
  readonly localizations: Maybe<ShoeRelationResponseCollection>;
  readonly name: Scalars['String']['output'];
  readonly options: ReadonlyArray<Maybe<ComponentEntityShoeOption>>;
  readonly price: Scalars['Float']['output'];
  readonly publishedAt: Maybe<Scalars['DateTime']['output']>;
  readonly type: Enum_Shoe_Type;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type ShoeLocalizationsArgs = {
  filters: InputMaybe<ShoeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type ShoeOptionsArgs = {
  filters: InputMaybe<ComponentEntityShoeOptionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ShoeEntity = {
  readonly __typename?: 'ShoeEntity';
  readonly attributes: Maybe<Shoe>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type ShoeEntityResponse = {
  readonly __typename?: 'ShoeEntityResponse';
  readonly data: Maybe<ShoeEntity>;
};

export type ShoeEntityResponseCollection = {
  readonly __typename?: 'ShoeEntityResponseCollection';
  readonly data: ReadonlyArray<ShoeEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type ShoeFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<ShoeFiltersInput>>>;
  readonly content: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly description: InputMaybe<StringFilterInput>;
  readonly details: InputMaybe<StringFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly locale: InputMaybe<StringFilterInput>;
  readonly localizations: InputMaybe<ShoeFiltersInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<ShoeFiltersInput>;
  readonly options: InputMaybe<ComponentEntityShoeOptionFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<ShoeFiltersInput>>>;
  readonly price: InputMaybe<FloatFilterInput>;
  readonly publishedAt: InputMaybe<DateTimeFilterInput>;
  readonly type: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type ShoeInput = {
  readonly content: InputMaybe<Scalars['String']['input']>;
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly details: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly options: InputMaybe<ReadonlyArray<InputMaybe<ComponentEntityShoeOptionInput>>>;
  readonly price: InputMaybe<Scalars['Float']['input']>;
  readonly publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  readonly type: InputMaybe<Enum_Shoe_Type>;
};

export type ShoeRelationResponseCollection = {
  readonly __typename?: 'ShoeRelationResponseCollection';
  readonly data: ReadonlyArray<ShoeEntity>;
};

export type StringFilterInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains: InputMaybe<Scalars['String']['input']>;
  readonly containsi: InputMaybe<Scalars['String']['input']>;
  readonly endsWith: InputMaybe<Scalars['String']['input']>;
  readonly eq: InputMaybe<Scalars['String']['input']>;
  readonly eqi: InputMaybe<Scalars['String']['input']>;
  readonly gt: InputMaybe<Scalars['String']['input']>;
  readonly gte: InputMaybe<Scalars['String']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly lt: InputMaybe<Scalars['String']['input']>;
  readonly lte: InputMaybe<Scalars['String']['input']>;
  readonly ne: InputMaybe<Scalars['String']['input']>;
  readonly nei: InputMaybe<Scalars['String']['input']>;
  readonly not: InputMaybe<StringFilterInput>;
  readonly notContains: InputMaybe<Scalars['String']['input']>;
  readonly notContainsi: InputMaybe<Scalars['String']['input']>;
  readonly notIn: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly notNull: InputMaybe<Scalars['Boolean']['input']>;
  readonly null: InputMaybe<Scalars['Boolean']['input']>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly startsWith: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  readonly __typename?: 'UploadFile';
  readonly alternativeText: Maybe<Scalars['String']['output']>;
  readonly caption: Maybe<Scalars['String']['output']>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly ext: Maybe<Scalars['String']['output']>;
  readonly formats: Maybe<Scalars['JSON']['output']>;
  readonly hash: Scalars['String']['output'];
  readonly height: Maybe<Scalars['Int']['output']>;
  readonly mime: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly previewUrl: Maybe<Scalars['String']['output']>;
  readonly provider: Scalars['String']['output'];
  readonly provider_metadata: Maybe<Scalars['JSON']['output']>;
  readonly related: Maybe<ReadonlyArray<Maybe<GenericMorph>>>;
  readonly size: Scalars['Float']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly url: Scalars['String']['output'];
  readonly width: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  readonly __typename?: 'UploadFileEntity';
  readonly attributes: Maybe<UploadFile>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  readonly __typename?: 'UploadFileEntityResponse';
  readonly data: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  readonly __typename?: 'UploadFileEntityResponseCollection';
  readonly data: ReadonlyArray<UploadFileEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  readonly alternativeText: InputMaybe<StringFilterInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UploadFileFiltersInput>>>;
  readonly caption: InputMaybe<StringFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly ext: InputMaybe<StringFilterInput>;
  readonly folder: InputMaybe<UploadFolderFiltersInput>;
  readonly folderPath: InputMaybe<StringFilterInput>;
  readonly formats: InputMaybe<JsonFilterInput>;
  readonly hash: InputMaybe<StringFilterInput>;
  readonly height: InputMaybe<IntFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly mime: InputMaybe<StringFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<UploadFileFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UploadFileFiltersInput>>>;
  readonly previewUrl: InputMaybe<StringFilterInput>;
  readonly provider: InputMaybe<StringFilterInput>;
  readonly provider_metadata: InputMaybe<JsonFilterInput>;
  readonly size: InputMaybe<FloatFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly url: InputMaybe<StringFilterInput>;
  readonly width: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  readonly alternativeText: InputMaybe<Scalars['String']['input']>;
  readonly caption: InputMaybe<Scalars['String']['input']>;
  readonly ext: InputMaybe<Scalars['String']['input']>;
  readonly folder: InputMaybe<Scalars['ID']['input']>;
  readonly folderPath: InputMaybe<Scalars['String']['input']>;
  readonly formats: InputMaybe<Scalars['JSON']['input']>;
  readonly hash: InputMaybe<Scalars['String']['input']>;
  readonly height: InputMaybe<Scalars['Int']['input']>;
  readonly mime: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly previewUrl: InputMaybe<Scalars['String']['input']>;
  readonly provider: InputMaybe<Scalars['String']['input']>;
  readonly provider_metadata: InputMaybe<Scalars['JSON']['input']>;
  readonly size: InputMaybe<Scalars['Float']['input']>;
  readonly url: InputMaybe<Scalars['String']['input']>;
  readonly width: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  readonly __typename?: 'UploadFileRelationResponseCollection';
  readonly data: ReadonlyArray<UploadFileEntity>;
};

export type UploadFolder = {
  readonly __typename?: 'UploadFolder';
  readonly children: Maybe<UploadFolderRelationResponseCollection>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly files: Maybe<UploadFileRelationResponseCollection>;
  readonly name: Scalars['String']['output'];
  readonly parent: Maybe<UploadFolderEntityResponse>;
  readonly path: Scalars['String']['output'];
  readonly pathId: Scalars['Int']['output'];
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  readonly __typename?: 'UploadFolderEntity';
  readonly attributes: Maybe<UploadFolder>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  readonly __typename?: 'UploadFolderEntityResponse';
  readonly data: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  readonly __typename?: 'UploadFolderEntityResponseCollection';
  readonly data: ReadonlyArray<UploadFolderEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UploadFolderFiltersInput>>>;
  readonly children: InputMaybe<UploadFolderFiltersInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly files: InputMaybe<UploadFileFiltersInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<UploadFolderFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UploadFolderFiltersInput>>>;
  readonly parent: InputMaybe<UploadFolderFiltersInput>;
  readonly path: InputMaybe<StringFilterInput>;
  readonly pathId: InputMaybe<IntFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  readonly children: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly files: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly parent: InputMaybe<Scalars['ID']['input']>;
  readonly path: InputMaybe<Scalars['String']['input']>;
  readonly pathId: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  readonly __typename?: 'UploadFolderRelationResponseCollection';
  readonly data: ReadonlyArray<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  readonly __typename?: 'UsersPermissionsCreateRolePayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  readonly __typename?: 'UsersPermissionsDeleteRolePayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  readonly identifier: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
  readonly provider: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  readonly __typename?: 'UsersPermissionsLoginPayload';
  readonly jwt: Maybe<Scalars['String']['output']>;
  readonly user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  readonly __typename?: 'UsersPermissionsMe';
  readonly blocked: Maybe<Scalars['Boolean']['output']>;
  readonly confirmed: Maybe<Scalars['Boolean']['output']>;
  readonly email: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly role: Maybe<UsersPermissionsMeRole>;
  readonly username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  readonly __typename?: 'UsersPermissionsMeRole';
  readonly description: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly type: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  readonly __typename?: 'UsersPermissionsPasswordPayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  readonly __typename?: 'UsersPermissionsPermission';
  readonly action: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly role: Maybe<UsersPermissionsRoleEntityResponse>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  readonly __typename?: 'UsersPermissionsPermissionEntity';
  readonly attributes: Maybe<UsersPermissionsPermission>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  readonly action: InputMaybe<StringFilterInput>;
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  readonly role: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  readonly __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  readonly email: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
  readonly username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  readonly __typename?: 'UsersPermissionsRole';
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly name: Scalars['String']['output'];
  readonly permissions: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  readonly type: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly users: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  readonly __typename?: 'UsersPermissionsRoleEntity';
  readonly attributes: Maybe<UsersPermissionsRole>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  readonly __typename?: 'UsersPermissionsRoleEntityResponse';
  readonly data: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  readonly __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsRoleEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly description: InputMaybe<StringFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly name: InputMaybe<StringFilterInput>;
  readonly not: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  readonly permissions: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  readonly type: InputMaybe<StringFilterInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly users: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  readonly description: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly permissions: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly type: InputMaybe<Scalars['String']['input']>;
  readonly users: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  readonly __typename?: 'UsersPermissionsUpdateRolePayload';
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  readonly __typename?: 'UsersPermissionsUser';
  readonly blocked: Maybe<Scalars['Boolean']['output']>;
  readonly confirmed: Maybe<Scalars['Boolean']['output']>;
  readonly createdAt: Maybe<Scalars['DateTime']['output']>;
  readonly email: Scalars['String']['output'];
  readonly provider: Maybe<Scalars['String']['output']>;
  readonly role: Maybe<UsersPermissionsRoleEntityResponse>;
  readonly updatedAt: Maybe<Scalars['DateTime']['output']>;
  readonly username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  readonly __typename?: 'UsersPermissionsUserEntity';
  readonly attributes: Maybe<UsersPermissionsUser>;
  readonly id: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  readonly __typename?: 'UsersPermissionsUserEntityResponse';
  readonly data: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  readonly __typename?: 'UsersPermissionsUserEntityResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsUserEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  readonly and: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  readonly blocked: InputMaybe<BooleanFilterInput>;
  readonly confirmationToken: InputMaybe<StringFilterInput>;
  readonly confirmed: InputMaybe<BooleanFilterInput>;
  readonly createdAt: InputMaybe<DateTimeFilterInput>;
  readonly email: InputMaybe<StringFilterInput>;
  readonly id: InputMaybe<IdFilterInput>;
  readonly not: InputMaybe<UsersPermissionsUserFiltersInput>;
  readonly or: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  readonly password: InputMaybe<StringFilterInput>;
  readonly provider: InputMaybe<StringFilterInput>;
  readonly resetPasswordToken: InputMaybe<StringFilterInput>;
  readonly role: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly updatedAt: InputMaybe<DateTimeFilterInput>;
  readonly username: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  readonly blocked: InputMaybe<Scalars['Boolean']['input']>;
  readonly confirmationToken: InputMaybe<Scalars['String']['input']>;
  readonly confirmed: InputMaybe<Scalars['Boolean']['input']>;
  readonly email: InputMaybe<Scalars['String']['input']>;
  readonly password: InputMaybe<Scalars['String']['input']>;
  readonly provider: InputMaybe<Scalars['String']['input']>;
  readonly resetPasswordToken: InputMaybe<Scalars['String']['input']>;
  readonly role: InputMaybe<Scalars['ID']['input']>;
  readonly username: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  readonly __typename?: 'UsersPermissionsUserRelationResponseCollection';
  readonly data: ReadonlyArray<UsersPermissionsUserEntity>;
};

export type HeaderLinksListFragmentFragment = { readonly __typename?: 'LinkList', readonly title: string, readonly links: ReadonlyArray<{ readonly __typename?: 'ComponentElementsLinkItem', readonly id: string, readonly title: string, readonly link: ReadonlyArray<{ readonly __typename?: 'ComponentUiLink', readonly id: string, readonly label: string, readonly href: string }> }> };

export type ShoeFragmentFragment = { readonly __typename?: 'ShoeRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'ShoeEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Shoe', readonly name: string, readonly description: string, readonly content: string, readonly details: string, readonly price: number, readonly type: Enum_Shoe_Type, readonly options: ReadonlyArray<{ readonly __typename?: 'ComponentEntityShoeOption', readonly id: string, readonly color: string, readonly medias: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly id: string, readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly caption: string } } } }> } }> };

export type ShoeOptionsFragment = { readonly __typename?: 'ComponentEntityShoeOption', readonly id: string, readonly color: string, readonly medias: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly id: string, readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly caption: string } } } };

export type CardFragmentFragment = { readonly __typename?: 'ComponentUiFigure', readonly id: string, readonly caption: string, readonly linkButton: ReadonlyArray<{ readonly __typename?: 'ComponentUiLink', readonly id: string, readonly label: string, readonly href: string }>, readonly image: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly previewUrl: string } } } };

export type LinkFragmentFragment = { readonly __typename?: 'ComponentUiLink', readonly id: string, readonly label: string, readonly href: string };

export type LinkListFragmentFragment = { readonly __typename?: 'ComponentElementsLinkItem', readonly id: string, readonly title: string, readonly link: ReadonlyArray<{ readonly __typename?: 'ComponentUiLink', readonly id: string, readonly label: string, readonly href: string }> };

export type VideoFragmentFragment = { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly alternativeText: string, readonly caption: string, readonly width: number, readonly height: number, readonly formats: any, readonly hash: string, readonly ext: string, readonly mime: string, readonly size: number, readonly url: string, readonly previewUrl: string, readonly provider: string, readonly provider_metadata: any } } };

export type LayoutFooterAttributesFragmentFragment = { readonly __typename?: 'LayoutFooter', readonly title: string, readonly mainLinks: { readonly __typename?: 'ComponentElementsLinkItem', readonly id: string, readonly title: string, readonly link: ReadonlyArray<{ readonly __typename?: 'ComponentUiLink', readonly id: string, readonly label: string, readonly href: string }> }, readonly links: ReadonlyArray<{ readonly __typename?: 'ComponentElementsLinkItem', readonly id: string, readonly title: string, readonly link: ReadonlyArray<{ readonly __typename?: 'ComponentUiLink', readonly id: string, readonly label: string, readonly href: string }> }>, readonly supportLinks: { readonly __typename?: 'ComponentElementsLinkItem', readonly id: string, readonly title: string, readonly link: ReadonlyArray<{ readonly __typename?: 'ComponentUiLink', readonly id: string, readonly label: string, readonly href: string }> }, readonly socilas: ReadonlyArray<{ readonly __typename?: 'ComponentUiLink', readonly id: string, readonly label: string, readonly href: string } | { readonly __typename?: 'Error' }> };

export type LayoutSubFootersAttributeFragment = { readonly __typename?: 'LayoutSubFooter', readonly title: string, readonly links: ReadonlyArray<{ readonly __typename?: 'ComponentUiLink', readonly id: string, readonly label: string, readonly href: string }> };

export type PreHeaderAttributesFragmentFragment = { readonly __typename?: 'PreHeader', readonly title: string, readonly links: ReadonlyArray<{ readonly __typename?: 'ComponentUiLink', readonly id: string, readonly label: string, readonly href: string }> };

export type DiscountAttributesFragmentFragment = { readonly __typename?: 'ComponentUiDiscountCard', readonly id: string, readonly title: string, readonly description2: string };

export type SectionBannerAttributesFragmentFragment = { readonly __typename?: 'SectionBanner', readonly sectionTitle: string, readonly preSectionTitle: string, readonly subSectionTitle: string, readonly video: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly alternativeText: string, readonly caption: string, readonly width: number, readonly height: number, readonly formats: any, readonly hash: string, readonly ext: string, readonly mime: string, readonly size: number, readonly url: string, readonly previewUrl: string, readonly provider: string, readonly provider_metadata: any } } }, readonly linkButton: ReadonlyArray<{ readonly __typename?: 'ComponentUiLink', readonly id: string, readonly label: string, readonly href: string }> };

export type SectionMembershipAttributesFragment = { readonly __typename?: 'SectionMembership', readonly title: string, readonly card: ReadonlyArray<{ readonly __typename?: 'ComponentUiFigure', readonly id: string, readonly caption: string, readonly linkButton: ReadonlyArray<{ readonly __typename?: 'ComponentUiLink', readonly id: string, readonly label: string, readonly href: string }>, readonly image: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly previewUrl: string } } } }> };

export type GetHeaderLinkListQueryVariables = Exact<{
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type GetHeaderLinkListQuery = { readonly __typename?: 'Query', readonly linkLists: { readonly __typename?: 'LinkListEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'LinkListEntity', readonly attributes: { readonly __typename?: 'LinkList', readonly title: string, readonly links: ReadonlyArray<{ readonly __typename?: 'ComponentElementsLinkItem', readonly id: string, readonly title: string, readonly link: ReadonlyArray<{ readonly __typename?: 'ComponentUiLink', readonly id: string, readonly label: string, readonly href: string }> }> } }> } };

export type GetLayoutFooterQueryVariables = Exact<{
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type GetLayoutFooterQuery = { readonly __typename?: 'Query', readonly layoutFooter: { readonly __typename?: 'LayoutFooterEntityResponse', readonly data: { readonly __typename?: 'LayoutFooterEntity', readonly attributes: { readonly __typename?: 'LayoutFooter', readonly title: string, readonly mainLinks: { readonly __typename?: 'ComponentElementsLinkItem', readonly id: string, readonly title: string, readonly link: ReadonlyArray<{ readonly __typename?: 'ComponentUiLink', readonly id: string, readonly label: string, readonly href: string }> }, readonly links: ReadonlyArray<{ readonly __typename?: 'ComponentElementsLinkItem', readonly id: string, readonly title: string, readonly link: ReadonlyArray<{ readonly __typename?: 'ComponentUiLink', readonly id: string, readonly label: string, readonly href: string }> }>, readonly supportLinks: { readonly __typename?: 'ComponentElementsLinkItem', readonly id: string, readonly title: string, readonly link: ReadonlyArray<{ readonly __typename?: 'ComponentUiLink', readonly id: string, readonly label: string, readonly href: string }> }, readonly socilas: ReadonlyArray<{ readonly __typename?: 'ComponentUiLink', readonly id: string, readonly label: string, readonly href: string } | { readonly __typename?: 'Error' }> } } } };

export type GetLayoutSubFootersQueryVariables = Exact<{
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type GetLayoutSubFootersQuery = { readonly __typename?: 'Query', readonly layoutSubFooters: { readonly __typename?: 'LayoutSubFooterEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'LayoutSubFooterEntity', readonly attributes: { readonly __typename?: 'LayoutSubFooter', readonly title: string, readonly links: ReadonlyArray<{ readonly __typename?: 'ComponentUiLink', readonly id: string, readonly label: string, readonly href: string }> } }> } };

export type GetLocaleQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLocaleQuery = { readonly __typename?: 'Query', readonly i18NLocales: { readonly __typename?: 'I18NLocaleEntityResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'I18NLocaleEntity', readonly id: string, readonly attributes: { readonly __typename?: 'I18NLocale', readonly name: string, readonly code: string } }> } };

export type GetPageHomeQueryVariables = Exact<{
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type GetPageHomeQuery = { readonly __typename?: 'Query', readonly pageHome: { readonly __typename?: 'PageHomeEntityResponse', readonly data: { readonly __typename?: 'PageHomeEntity', readonly id: string, readonly attributes: { readonly __typename?: 'PageHome', readonly section_discount: { readonly __typename?: 'SectionDiscountEntityResponse', readonly data: { readonly __typename?: 'SectionDiscountEntity', readonly id: string, readonly attributes: { readonly __typename?: 'SectionDiscount', readonly items: ReadonlyArray<{ readonly __typename?: 'ComponentUiDiscountCard', readonly id: string, readonly title: string, readonly description2: string }> } } }, readonly SEO: { readonly __typename?: 'ComponentSharedSeo', readonly id: string, readonly metaTitle: string, readonly metaDescription: string, readonly keywords: string } } } } };

export type GetPageShoeQueryVariables = Exact<{
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type GetPageShoeQuery = { readonly __typename?: 'Query', readonly pageShoe: { readonly __typename?: 'PageShoeEntityResponse', readonly data: { readonly __typename?: 'PageShoeEntity', readonly id: string, readonly attributes: { readonly __typename?: 'PageShoe', readonly section_discount: { readonly __typename?: 'SectionDiscountEntityResponse', readonly data: { readonly __typename?: 'SectionDiscountEntity', readonly id: string, readonly attributes: { readonly __typename?: 'SectionDiscount', readonly items: ReadonlyArray<{ readonly __typename?: 'ComponentUiDiscountCard', readonly id: string, readonly title: string, readonly description2: string }> } } }, readonly SEO: { readonly __typename?: 'ComponentSharedSeo', readonly id: string, readonly metaTitle: string, readonly metaDescription: string, readonly keywords: string } } } } };

export type GetPreHeaderQueryVariables = Exact<{
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type GetPreHeaderQuery = { readonly __typename?: 'Query', readonly preHeader: { readonly __typename?: 'PreHeaderEntityResponse', readonly data: { readonly __typename?: 'PreHeaderEntity', readonly attributes: { readonly __typename?: 'PreHeader', readonly title: string, readonly links: ReadonlyArray<{ readonly __typename?: 'ComponentUiLink', readonly id: string, readonly label: string, readonly href: string }> } } } };

export type GetSectionBannerQueryVariables = Exact<{
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type GetSectionBannerQuery = { readonly __typename?: 'Query', readonly sectionBanner: { readonly __typename?: 'SectionBannerEntityResponse', readonly data: { readonly __typename?: 'SectionBannerEntity', readonly attributes: { readonly __typename?: 'SectionBanner', readonly sectionTitle: string, readonly preSectionTitle: string, readonly subSectionTitle: string, readonly video: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly alternativeText: string, readonly caption: string, readonly width: number, readonly height: number, readonly formats: any, readonly hash: string, readonly ext: string, readonly mime: string, readonly size: number, readonly url: string, readonly previewUrl: string, readonly provider: string, readonly provider_metadata: any } } }, readonly linkButton: ReadonlyArray<{ readonly __typename?: 'ComponentUiLink', readonly id: string, readonly label: string, readonly href: string }> } } } };

export type GetSectionDiscountQueryVariables = Exact<{
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type GetSectionDiscountQuery = { readonly __typename?: 'Query', readonly sectionDiscount: { readonly __typename?: 'SectionDiscountEntityResponse', readonly data: { readonly __typename?: 'SectionDiscountEntity', readonly attributes: { readonly __typename?: 'SectionDiscount', readonly items: ReadonlyArray<{ readonly __typename?: 'ComponentUiDiscountCard', readonly id: string, readonly title: string, readonly description2: string }> } } } };

export type GetSectionMembershipQueryVariables = Exact<{
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type GetSectionMembershipQuery = { readonly __typename?: 'Query', readonly sectionMembership: { readonly __typename?: 'SectionMembershipEntityResponse', readonly data: { readonly __typename?: 'SectionMembershipEntity', readonly attributes: { readonly __typename?: 'SectionMembership', readonly title: string, readonly card: ReadonlyArray<{ readonly __typename?: 'ComponentUiFigure', readonly id: string, readonly caption: string, readonly linkButton: ReadonlyArray<{ readonly __typename?: 'ComponentUiLink', readonly id: string, readonly label: string, readonly href: string }>, readonly image: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly attributes: { readonly __typename?: 'UploadFile', readonly name: string, readonly url: string, readonly previewUrl: string } } } }> } } } };

export type GetSectionShoeQueryVariables = Exact<{
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type GetSectionShoeQuery = { readonly __typename?: 'Query', readonly sectionShoe: { readonly __typename?: 'SectionShoeEntityResponse', readonly data: { readonly __typename?: 'SectionShoeEntity', readonly attributes: { readonly __typename?: 'SectionShoe', readonly title: string, readonly addToBagButton: { readonly __typename?: 'ComponentUiLink', readonly id: string, readonly label: string, readonly href: string }, readonly favoriteButton: { readonly __typename?: 'ComponentUiLink', readonly id: string, readonly label: string, readonly href: string }, readonly detailsButton: { readonly __typename?: 'ComponentUiLink', readonly id: string, readonly label: string, readonly href: string } } } } };

export type GetSectionTrendQueryVariables = Exact<{
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type GetSectionTrendQuery = { readonly __typename?: 'Query', readonly sectionTrend: { readonly __typename?: 'SectionTrendEntityResponse', readonly data: { readonly __typename?: 'SectionTrendEntity', readonly attributes: { readonly __typename?: 'SectionTrend', readonly sectionTitle: string, readonly shoes: { readonly __typename?: 'ShoeRelationResponseCollection', readonly data: ReadonlyArray<{ readonly __typename?: 'ShoeEntity', readonly id: string, readonly attributes: { readonly __typename?: 'Shoe', readonly name: string, readonly description: string, readonly content: string, readonly details: string, readonly price: number, readonly type: Enum_Shoe_Type, readonly options: ReadonlyArray<{ readonly __typename?: 'ComponentEntityShoeOption', readonly id: string, readonly color: string, readonly medias: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly id: string, readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly caption: string } } } }> } }> } } } } };

export type GetShoeQueryVariables = Exact<{
  id: InputMaybe<Scalars['ID']['input']>;
  locale: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type GetShoeQuery = { readonly __typename?: 'Query', readonly shoe: { readonly __typename?: 'ShoeEntityResponse', readonly data: { readonly __typename?: 'ShoeEntity', readonly attributes: { readonly __typename?: 'Shoe', readonly name: string, readonly description: string, readonly content: string, readonly details: string, readonly price: number, readonly type: Enum_Shoe_Type, readonly options: ReadonlyArray<{ readonly __typename?: 'ComponentEntityShoeOption', readonly id: string, readonly color: string, readonly medias: { readonly __typename?: 'UploadFileEntityResponse', readonly data: { readonly __typename?: 'UploadFileEntity', readonly id: string, readonly attributes: { readonly __typename?: 'UploadFile', readonly url: string, readonly name: string, readonly previewUrl: string } } } }> } } } };

export const LinkFragmentFragmentDoc = gql`
    fragment LinkFragment on ComponentUiLink {
  id
  label
  href
}
    `;
export const LinkListFragmentFragmentDoc = gql`
    fragment LinkListFragment on ComponentElementsLinkItem {
  id
  title
  link {
    ...LinkFragment
  }
}
    ${LinkFragmentFragmentDoc}`;
export const HeaderLinksListFragmentFragmentDoc = gql`
    fragment HeaderLinksListFragment on LinkList {
  title
  links {
    ...LinkListFragment
  }
}
    ${LinkListFragmentFragmentDoc}`;
export const ShoeOptionsFragmentDoc = gql`
    fragment ShoeOptions on ComponentEntityShoeOption {
  id
  medias {
    data {
      id
      attributes {
        url
        caption
      }
    }
  }
  color
}
    `;
export const ShoeFragmentFragmentDoc = gql`
    fragment ShoeFragment on ShoeRelationResponseCollection {
  data {
    id
    attributes {
      name
      description
      content
      details
      price
      options {
        ...ShoeOptions
      }
      type
    }
  }
}
    ${ShoeOptionsFragmentDoc}`;
export const LayoutFooterAttributesFragmentFragmentDoc = gql`
    fragment LayoutFooterAttributesFragment on LayoutFooter {
  title
  mainLinks {
    ...LinkListFragment
  }
  links {
    ...LinkListFragment
  }
  supportLinks {
    ...LinkListFragment
  }
  socilas {
    ... on ComponentUiLink {
      ...LinkFragment
    }
  }
}
    ${LinkListFragmentFragmentDoc}
${LinkFragmentFragmentDoc}`;
export const LayoutSubFootersAttributeFragmentDoc = gql`
    fragment LayoutSubFootersAttribute on LayoutSubFooter {
  title
  links {
    ...LinkFragment
  }
}
    ${LinkFragmentFragmentDoc}`;
export const PreHeaderAttributesFragmentFragmentDoc = gql`
    fragment PreHeaderAttributesFragment on PreHeader {
  title
  links {
    ...LinkFragment
  }
}
    ${LinkFragmentFragmentDoc}`;
export const DiscountAttributesFragmentFragmentDoc = gql`
    fragment DiscountAttributesFragment on ComponentUiDiscountCard {
  id
  title
  description2
}
    `;
export const VideoFragmentFragmentDoc = gql`
    fragment VideoFragment on UploadFileEntityResponse {
  data {
    attributes {
      name
      alternativeText
      caption
      width
      height
      formats
      hash
      ext
      mime
      size
      url
      previewUrl
      provider
      provider_metadata
    }
  }
}
    `;
export const SectionBannerAttributesFragmentFragmentDoc = gql`
    fragment SectionBannerAttributesFragment on SectionBanner {
  sectionTitle
  preSectionTitle
  subSectionTitle
  video {
    ...VideoFragment
  }
  linkButton {
    ...LinkFragment
  }
}
    ${VideoFragmentFragmentDoc}
${LinkFragmentFragmentDoc}`;
export const CardFragmentFragmentDoc = gql`
    fragment CardFragment on ComponentUiFigure {
  id
  caption
  linkButton {
    ...LinkFragment
  }
  image {
    data {
      attributes {
        name
        url
        previewUrl
      }
    }
  }
}
    ${LinkFragmentFragmentDoc}`;
export const SectionMembershipAttributesFragmentDoc = gql`
    fragment SectionMembershipAttributes on SectionMembership {
  title
  card {
    ...CardFragment
  }
}
    ${CardFragmentFragmentDoc}`;
export const GetHeaderLinkListDocument = gql`
    query GetHeaderLinkList($locale: I18NLocaleCode) {
  linkLists(locale: $locale) {
    data {
      attributes {
        ...HeaderLinksListFragment
      }
    }
  }
}
    ${HeaderLinksListFragmentFragmentDoc}`;
export const GetLayoutFooterDocument = gql`
    query GetLayoutFooter($locale: I18NLocaleCode) {
  layoutFooter(locale: $locale) {
    data {
      attributes {
        ...LayoutFooterAttributesFragment
      }
    }
  }
}
    ${LayoutFooterAttributesFragmentFragmentDoc}`;
export const GetLayoutSubFootersDocument = gql`
    query GetLayoutSubFooters($locale: I18NLocaleCode) {
  layoutSubFooters(locale: $locale) {
    data {
      attributes {
        ...LayoutSubFootersAttribute
      }
    }
  }
}
    ${LayoutSubFootersAttributeFragmentDoc}`;
export const GetLocaleDocument = gql`
    query GetLocale {
  i18NLocales {
    data {
      id
      attributes {
        name
        code
      }
    }
  }
}
    `;
export const GetPageHomeDocument = gql`
    query GetPageHome($locale: I18NLocaleCode) {
  pageHome(locale: $locale) {
    data {
      id
      attributes {
        section_discount {
          data {
            id
            attributes {
              items {
                id
                title
                description2
              }
            }
          }
        }
        SEO {
          id
          metaTitle
          metaDescription
          keywords
        }
      }
    }
  }
}
    `;
export const GetPageShoeDocument = gql`
    query GetPageShoe($locale: I18NLocaleCode) {
  pageShoe(locale: $locale) {
    data {
      id
      attributes {
        section_discount {
          data {
            id
            attributes {
              items {
                id
                title
                description2
              }
            }
          }
        }
        SEO {
          id
          metaTitle
          metaDescription
          keywords
        }
      }
    }
  }
}
    `;
export const GetPreHeaderDocument = gql`
    query GetPreHeader($locale: I18NLocaleCode) {
  preHeader(locale: $locale) {
    data {
      attributes {
        ...PreHeaderAttributesFragment
      }
    }
  }
}
    ${PreHeaderAttributesFragmentFragmentDoc}`;
export const GetSectionBannerDocument = gql`
    query GetSectionBanner($locale: I18NLocaleCode) {
  sectionBanner(locale: $locale) {
    data {
      attributes {
        ...SectionBannerAttributesFragment
      }
    }
  }
}
    ${SectionBannerAttributesFragmentFragmentDoc}`;
export const GetSectionDiscountDocument = gql`
    query GetSectionDiscount($id: ID, $locale: I18NLocaleCode) {
  sectionDiscount(id: $id, locale: $locale) {
    data {
      attributes {
        items {
          ...DiscountAttributesFragment
        }
      }
    }
  }
}
    ${DiscountAttributesFragmentFragmentDoc}`;
export const GetSectionMembershipDocument = gql`
    query GetSectionMembership($locale: I18NLocaleCode) {
  sectionMembership(locale: $locale) {
    data {
      attributes {
        ...SectionMembershipAttributes
      }
    }
  }
}
    ${SectionMembershipAttributesFragmentDoc}`;
export const GetSectionShoeDocument = gql`
    query GetSectionShoe($locale: I18NLocaleCode) {
  sectionShoe(locale: $locale) {
    data {
      attributes {
        title
        addToBagButton {
          ...LinkFragment
        }
        favoriteButton {
          ...LinkFragment
        }
        detailsButton {
          ...LinkFragment
        }
      }
    }
  }
}
    ${LinkFragmentFragmentDoc}`;
export const GetSectionTrendDocument = gql`
    query GetSectionTrend($locale: I18NLocaleCode) {
  sectionTrend(locale: $locale) {
    data {
      attributes {
        sectionTitle
        shoes {
          ...ShoeFragment
        }
      }
    }
  }
}
    ${ShoeFragmentFragmentDoc}`;
export const GetShoeDocument = gql`
    query GetShoe($id: ID, $locale: I18NLocaleCode) {
  shoe(id: $id, locale: $locale) {
    data {
      attributes {
        name
        description
        content
        details
        price
        options {
          id
          medias {
            data {
              id
              attributes {
                url
                name
                previewUrl
              }
            }
          }
          color
        }
        type
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetHeaderLinkList(variables?: GetHeaderLinkListQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetHeaderLinkListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHeaderLinkListQuery>(GetHeaderLinkListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetHeaderLinkList', 'query', variables);
    },
    GetLayoutFooter(variables?: GetLayoutFooterQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetLayoutFooterQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetLayoutFooterQuery>(GetLayoutFooterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetLayoutFooter', 'query', variables);
    },
    GetLayoutSubFooters(variables?: GetLayoutSubFootersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetLayoutSubFootersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetLayoutSubFootersQuery>(GetLayoutSubFootersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetLayoutSubFooters', 'query', variables);
    },
    GetLocale(variables?: GetLocaleQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetLocaleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetLocaleQuery>(GetLocaleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetLocale', 'query', variables);
    },
    GetPageHome(variables?: GetPageHomeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetPageHomeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPageHomeQuery>(GetPageHomeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetPageHome', 'query', variables);
    },
    GetPageShoe(variables?: GetPageShoeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetPageShoeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPageShoeQuery>(GetPageShoeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetPageShoe', 'query', variables);
    },
    GetPreHeader(variables?: GetPreHeaderQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetPreHeaderQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPreHeaderQuery>(GetPreHeaderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetPreHeader', 'query', variables);
    },
    GetSectionBanner(variables?: GetSectionBannerQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetSectionBannerQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSectionBannerQuery>(GetSectionBannerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetSectionBanner', 'query', variables);
    },
    GetSectionDiscount(variables?: GetSectionDiscountQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetSectionDiscountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSectionDiscountQuery>(GetSectionDiscountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetSectionDiscount', 'query', variables);
    },
    GetSectionMembership(variables?: GetSectionMembershipQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetSectionMembershipQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSectionMembershipQuery>(GetSectionMembershipDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetSectionMembership', 'query', variables);
    },
    GetSectionShoe(variables?: GetSectionShoeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetSectionShoeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSectionShoeQuery>(GetSectionShoeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetSectionShoe', 'query', variables);
    },
    GetSectionTrend(variables?: GetSectionTrendQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetSectionTrendQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSectionTrendQuery>(GetSectionTrendDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetSectionTrend', 'query', variables);
    },
    GetShoe(variables?: GetShoeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetShoeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetShoeQuery>(GetShoeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetShoe', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;