import * as React from "react"; // to access JSX namespace
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import { Rule } from "@sanity/validation/src/Rule";

type DefaultSchemaTypes = 'array' | 'block' | 'boolean' | 'date' | 'datetime' | 'document' | 'file' | 'geopoint' | 'image' | 'number' | 'object' | 'reference' | 'slug' | 'string' | 'span' | 'text' | 'url';

//  SCHEMA TYPES

export interface SanitySchemaType {
  type: DefaultSchemaTypes;
  title?: string;
  name: string;
  hidden?: boolean;
  readOnly?: boolean;
  description?: string;
}

export interface SanityArrayType extends SanitySchemaType {
  type: 'array';
  of: ArrayContentTypes[];
  options?: {
    sortable?: boolean;
    layout?: 'tags' | 'grid';
    list?: { value: string, title: string }[];
    editModal?: 'dialog' | 'fullscreen' | 'popover';
  };
  // validation?: SanityValidationFunction<ArrayValidation>;
}

export interface SanityBlockType extends SanitySchemaType {
  type: 'block';
  styles?: BlockStyles[];
  lists?: BlockLists[];
  marks?: BlockMarks;
  of?: ArrayContentTypes[];
  icon?: JSX.Element;
  // validation?: SanityValidationFunction<BasicValidation>;
}

export interface SanityBooleanType extends SanitySchemaType {
  type: 'boolean';
  options?: {
    layout?: 'switch' | 'checkbox';
  };
  // validation?: SanityValidationFunction<BasicValidation>;
}

export interface SanityDateType extends SanitySchemaType {
  type: 'date';
  options?: DateOptions;
  // validation?: SanityValidationFunction<BasicValidation>;
}

export interface SanityDateTimeType extends SanitySchemaType {
  type: 'datetime';
  options?: DateTimeOptions;
  // validation?: SanityValidationFunction<BasicValidation>;
}

export interface SanityDocumentType extends SanitySchemaType {
  type: 'document';
  liveEdit?: boolean;
  orderings?: DocumentOrderings[];
  fields: SanityField[];
  fieldsets?: SanityFieldset[];
  preview?: SanityPreview;
}

export interface SanityFileType extends SanitySchemaType {
  type: 'file';
  fields?: SanityFields[];
  options?: {
    storeOriginalFilename: boolean;
    accept: string; // Note: any valid file type specifier
  }
  // validation?: SanityValidationFunction<BasicValidation>;
}

export interface SanityGeopointType extends SanitySchemaType {
  type: 'geopoint';
  // validation?: SanityValidationFunction<BasicValidation>;
}

export interface SanityImageType extends SanitySchemaType {
  type: 'image';
  fields?: SanityFields & { isHighlighted: boolean }[];
  options?: {
    metadata?: Array<'exif' | 'location' | 'lqip' | 'palette'>;
    hotspot?: boolean;
    storeOriginalFilename?: boolean;
    accept?: string; // Note: any valid file type specifier
    sources?: Array<string>;
  }
  // validation?: SanityValidationFunction<BasicValidation>;
  // validation?: (Rule: Rule) => Rule;
}

export interface SanityNumberType extends SanitySchemaType {
  type: 'number';
  options?: {
    list?: Array<number> | Array<{ value: number, title: string }>;

  }
  // validation?: SanityValidationFunction<NumberValidationRule>;
}

export interface SanityObjectType extends SanitySchemaType {
  type: 'object';
  fields: SanityField[];
  fieldsets?: SanityFieldset[];
  preview?: SanityPreview;
  inputComponent?: JSX.Element;
  options?: {
    collapsible?: boolean;
    collapsed?: boolean;
  }
  // validation?: SanityValidationFunction<BasicValidation>;
}

export interface SanityReferenceType extends SanitySchemaType {
  type: 'reference';
  to: Array<{ type: string; }>;
  weak?: boolean;
  options?: {
    filter?: string | (({ document, parent, parentPath }: { document: string; parent: string; parentPath: string; }) => { filter: string; params: { [key: string]: string } });
    filterParams?: {
      [key: string]: string;
    }
  }
  // validation?: SanityValidationFunction<BasicValidation>;
}

export interface SanitySlugType extends SanitySchemaType {
  type: 'slug';
  options?: {
    source?: string | ((object: any, options: any) => string); // TODO: supply the correct types to this function
    maxLength?: number;
    slugify?: (input: string, object: any) => string;
    isUnique?: (slug: string, options: any) => any;
  }
  // validation?: SanityValidationFunction<BasicValidation>;
}

export interface SanityStringType extends SanitySchemaType {
  type: 'string';
  options?: {
    list?: Array<string | { value: string; title: string }>;
    layout?: 'radio' | 'dropdown';
    direction?: 'horizontal' | 'vertical';
  }
  // validation?: SanityValidationFunction<StringValidationRule>;
  // validation?: (Rule: Rule) => Rule;
}

export interface SanityTextType extends SanitySchemaType {
  type: 'text';
  rows?: number;
  // validation?: SanityValidationFunction<StringValidationRule>;
}


export interface SanityURLType extends SanitySchemaType {
  type: 'url';
  // validation?: SanityValidationFunction<URLValidationRule>;
}

export type SanityContentTypesRecord = {
  array: SanityArrayType
  block: SanityBlockType
  boolean: SanityBooleanType
  date: SanityDateType
  datetime: SanityDateTimeType
  document: SanityDocumentType
  file: SanityFileType
  geopoint: SanityGeopointType
  image: SanityImageType
  number: SanityNumberType
  object: SanityObjectType
  reference: SanityReferenceType
  slug: SanitySlugType
  sring: SanityStringType
  text: SanityTextType
  url: SanityURLType
}

export type SanityContentTypes =
  SanityArrayType
  | SanityBlockType
  | SanityBooleanType
  | SanityDateType
  | SanityDateTimeType
  | SanityDocumentType
  | SanityFileType
  | SanityGeopointType
  | SanityImageType
  | SanityNumberType
  | SanityObjectType
  | SanityReferenceType
  | SanitySlugType
  | SanityStringType
  | SanityTextType
  | SanityURLType

// export type SanityField =
//   {
//     name: string;
//     fieldset?: string;
//   } &
//   (
//     | SanityArrayType
//     | SanityBlockType
//     | SanityBooleanType
//     | SanityDateType
//     | SanityDateTimeType
//     | SanityFileType
//     | SanityGeopointType
//     | SanityImageType
//     | SanityNumberType
//     | SanityObjectType
//     | SanityReferenceType
//     | SanitySlugType
//     | ({ type: 'string' } & Omit<SanityStringType, 'type'>)
//     | SanityTextType
//     | SanityURLType
//     | ({ type: string extends DefaultSchemaTypes ? never : string; } &
//       SanitySchemaType & { [key: string]: any })
//   )

type PropertiesFromType<T extends SanitySchemaType> = Exclude<T, 'type'>;

export type SanityField = StandardSanityField | CustomSanityField

export type StandardSanityField = {
  name: string;
  fieldset?: string;
} &
  (
    { type: 'array' } & PropertiesFromType<SanityArrayType>
    | { type: 'block' } & PropertiesFromType<SanityBlockType>
    | { type: 'boolean' } & PropertiesFromType<SanityBooleanType>
    | { type: 'date' } & PropertiesFromType<SanityDateType>
    | { type: 'datetime' } & PropertiesFromType<SanityDateTimeType>
    | { type: 'file' } & PropertiesFromType<SanityFileType>
    | { type: 'geopoint' } & PropertiesFromType<SanityGeopointType>
    | { type: 'image' } & PropertiesFromType<SanityImageType>
    | { type: 'number' } & PropertiesFromType<SanityNumberType>
    | { type: 'object' } & PropertiesFromType<SanityObjectType>
    | { type: 'reference' } & PropertiesFromType<SanityReferenceType>
    | { type: 'slug' } & PropertiesFromType<SanitySlugType>
    | { type: 'string' } & PropertiesFromType<SanityStringType>
    | { type: 'text' } & PropertiesFromType<SanityTextType>
    | { type: 'url' } & PropertiesFromType<SanityURLType>
  );

export type CustomSanityField = {
  name: string;
  fieldset?: string;
  type: string extends
  'array'
  | 'block'
  | 'boolean'
  | 'date'
  | 'datetime'
  | 'file'
  | 'geopoint'
  | 'image'
  | 'number'
  | 'object'
  | 'reference'
  | 'slug'
  | 'string'
  | 'text'
  | 'url'
  ? never
  : string;
}

//  Array specific types
type ArrayContentTypes =
  | { type: 'reference', to: { type: string, title?: string }[] }
  | { type: string extends 'reference' | 'block' ? never : string, title?: string, options?: any }
  | SanityBlockType;



//  Block specific types
type BlockStyles =
  | {
    title: string extends 'Normal' ? never : string; // normal represents unstyled text
    value: string extends 'normal' ? never : string;
    blockEditor?: BlockEditorOptions;
  } | (DefaultStyles & { blockEditor?: BlockEditorOptions });

type DefaultStyles =
  | { title: "Normal", value: "normal" }
  | { title: "H1", value: "h1" }
  | { title: "H2", value: "h2" }
  | { title: "H3", value: "h3" }
  | { title: "H4", value: "h4" }
  | { title: "H5", value: "h5" }
  | { title: "H6", value: "h6" }
  | { title: "Quote", value: "blockquote" }

type BlockLists =
  | { title: 'Numbered', value: 'number' }
  | { title: 'Bullet', value: 'bullet' };

interface BlockMarks {
  decorators?: {
    title: string
    value: string
    blockEditor?: BlockEditorOptions;
  }[] | (DefaultDecorators & { blockEditor?: BlockEditorOptions })[];
  annotations?: { title: "Link", value: 'link' }[] | CustomAnnotation[];
}

type DefaultDecorators =
  | { title: 'Strong', value: 'strong' }
  | { title: 'Emphasis', value: 'em' }
  | { title: 'Code', value: 'code' }
  | { title: 'Underline', value: 'underline' }
  | { title: 'Strike', value: 'strike-through' }

type CustomAnnotation =
  {
    title: string;
    name: string;
    type: string;
    fields?: SanityFields[];
    blockEditor?: BlockEditorOptions;
  }

interface BlockEditorOptions {
  icon?: (props: any) => JSX.Element;
  render?: (props: any) => JSX.Element;
}



//  Date specific types
interface DateOptions {
  dateFormat?: string; // Note: any valid moment.js format
  calendarTodayLabel?: string;
};

interface DateTimeOptions extends DateOptions {
  timeFormat?: string; // Note: any valid moment.js format
  timeStep?: number; // default is 15
}



// Document specific types
interface DocumentOrderings {
  title: string;
  name: string;
  by: {
    field: string, direction: 'desc' | 'asc'
  }[];
}

/* Field Types */
// type SanityFields = SanityContentTypes;
type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;
export type SanityFields = { fieldset?: string } & SanityContentTypes | Overwrite<SanityContentTypes, { type: string }> // required to allow custom types in field name

export interface SanityFieldset {
  name: string;
  title: string;
  options?: {
    collapsible?: boolean;
    collapsed?: boolean;
    columns?: number;
  }
}

//  Previews
export type SanityPreview =
  | {
    select: {
      title?: string;
      subtitle?: string;
      media?: string;
    }
  }
  | {
    select: {
      [key: string]: string;
    },
    prepare: (selection: { [key: string]: string }) => { title: string; subtitle?: string; media?: string | JSX.Element; };
  }

/* Validation Types */
interface Validation {
  (rule: Rule): Rule
}

// Result Types

export type SanityObjectResult<T extends SanityObjectType> = SanityObjectResultHelper<T, T['fields'][number]>

type SanityObjectResultHelper<T extends SanityObjectType, X extends SanityFields> = {
  _type: T['name'];
  _key?: string;
} &
  {
    [K in X['name']]: FieldResult<X & { name: K }>
  }


// Works
export type SanityDocumentResult<T extends SanityDocumentType> = SanityDocumentResultHelper<T, T['fields'][number]>

type SanityDocumentResultHelper<T extends SanityDocumentType, X extends SanityFields> = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
  _type: T['name'];
} &
  {
    [K in X['name']]: FieldResult<X & { name: K }>
  }

type FieldResult<T extends SanityFields> =
  T['type'] extends 'array' ? SanityFields[]
  : T['type'] extends 'boolean' ? boolean
  : T['type'] extends 'number' ? number
  : T extends (SanityStringType & { fieldset: string }) ? StringLiteral<T>
  : T['type'] extends 'string' ? string
  : any;


type StringLiteral<T extends SanityStringType> =
  T['options'] extends { list: Array<string | { value: string, title: string }>;[key: string]: any } ?
  T['options']['list'] extends Array<string> ? T['options']['list'][number] :
  string : string;

// Types for creation of content types when using Sanity static methods
type CreateArrayTypeSchema<T extends SanityArrayType> = {
  [K in keyof T]: T[K];
}

type CreateDocumentTypeSchema<T extends SanityDocumentType> = {
  [K in keyof T]: T[K];
} & {
  fields: Array<Readonly<T['fields'][number]>>;
}

type CreateObjectTypeSchema<T extends SanityObjectType> = {
  [K in keyof T]: T[K];
} & {
  fields: Array<Readonly<T['fields'][number]>>;
}

type SanityObjectTypeWithFieldsets = Overwrite<SanityObjectType, { fieldsets: SanityFieldset[] }>

type FieldsetHelper<T extends SanityObjectType> = T['fieldsets'] extends Array<SanityFieldset> ? Array<T['fieldsets'][number]> : undefined;

type CreateReferenceTypeSchema<T extends SanityReferenceType> = {
  [K in keyof T]: T[K];
} & {
  to: Array<Readonly<T['to'][number]>>
}


// Sanity class with methods to assist in creation of types
export default class Sanity {
  static createContentType<T extends keyof SanityContentTypesRecord>(schema: SanityContentTypesRecord[T]): object {
    return schema;
  }

  static createSchema<T extends SanityContentTypes[]>(name: string, schema: T): SchemaReturnType<typeof name, typeof schema> {
    return createSchema({
      name,
      types: schemaTypes.concat(schema)
    });
  }

  static createArrayType<T extends SanityArrayType>(schema: CreateArrayTypeSchema<T>): { [K in keyof typeof schema]: typeof schema[K] } {
    return { ...schema };
  }

  static createDocumentType<T extends SanityDocumentType>(schema: CreateDocumentTypeSchema<T>) {
    return { ...schema };
  }

  static createObjectType<T extends SanityObjectType>(schema: CreateObjectTypeSchema<T>) {

    return { ...schema }
  }


  static createReferenceType<T extends SanityReferenceType>(schema: CreateReferenceTypeSchema<T>): { [K in keyof typeof schema]: typeof schema[K] } {
    return { ...schema, to: schema.to };
  }

  static getStringLiteralValues(field: SanityFields) {
    if (isStringType(field)) {
      field.options?.list?.map(val => {
        if (typeof val === 'string') return val;
        return val.title;
      })
    }

    return field;
  }

}

export function isStringType(field: SanityFields): field is SanityStringType {
  return (field as SanityStringType).options !== undefined;
}

interface SchemaReturnType<N, T> {
  _source: {
    name: N,
    types: T
  }
}