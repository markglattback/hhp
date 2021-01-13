import * as React from "react"; // to access JSX namespace
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import { Rule } from "@sanity/validation/src/Rule";



/**********************************************************************
 **
 **    Sanity Schema Types
 **
 *********************************************************************/


type DefaultSchemaTypes = 'array' | 'block' | 'boolean' | 'date' | 'datetime' | 'document' | 'file' | 'geopoint' | 'image' | 'number' | 'object' | 'reference' | 'slug' | 'string' | 'span' | 'text' | 'url';

/*********************************************************************/

export interface SanitySchemaType {
  type: DefaultSchemaTypes;
  title?: string;
  name: string;
  hidden?: boolean;
  readOnly?: boolean;
  description?: string;
}

/*********************************************************************/

export interface SanityArrayType extends SanitySchemaType {
  type: 'array';
  of: ArrayContentTypes[];
  options?: {
    sortable?: boolean;
    layout?: 'tags' | 'grid';
    list?: { value: string, title: string }[];
    editModal?: 'dialog' | 'fullscreen' | 'popover';
  };
}

/*********************************************************************/
//  Array Specific Types

type ArrayContentTypes =
  | { type: 'reference', to: { type: string, title?: string }[] }
  | { type: string extends 'reference' | 'block' ? never : string, title?: string, options?: any }
  | SanityBlockType;

/*********************************************************************/

export interface SanityBlockType extends SanitySchemaType {
  type: 'block';
  styles?: BlockStyles[];
  lists?: BlockLists[];
  marks?: BlockMarks;
  of?: ArrayContentTypes[];
  icon?: JSX.Element;
}

/*********************************************************************/
//  Block Specific Types

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
    fields?: SanityField[];
    blockEditor?: BlockEditorOptions;
  }

interface BlockEditorOptions {
  icon?: (props: any) => JSX.Element;
  render?: (props: any) => JSX.Element;
}

/*********************************************************************/

export interface SanityBooleanType extends SanitySchemaType {
  type: 'boolean';
  options?: {
    layout?: 'switch' | 'checkbox';
  };
}

/*********************************************************************/

export interface SanityDateType extends SanitySchemaType {
  type: 'date';
  options?: DateOptions;
}

/*********************************************************************/
//  Date Specific Types

interface DateOptions {
  dateFormat?: string; // Note: any valid moment.js format
  calendarTodayLabel?: string;
};

/*********************************************************************/

export interface SanityDateTimeType extends SanitySchemaType {
  type: 'datetime';
  options?: DateTimeOptions;
}

/*********************************************************************/
//  DateTime Specific Types

interface DateTimeOptions extends DateOptions {
  timeFormat?: string; // Note: any valid moment.js format
  timeStep?: number; // default is 15
}

/*********************************************************************/

export interface SanityDocumentType extends SanitySchemaType {
  type: 'document';
  liveEdit?: boolean;
  orderings?: DocumentOrderings[];
  fields: SanityField[];
  fieldsets?: SanityFieldset[];
  preview?: SanityPreview;
  validation?: Validation;
}

/*********************************************************************/
//  Document Specific Types

interface DocumentOrderings {
  title: string;
  name: string;
  by: {
    field: string, direction: 'desc' | 'asc'
  }[];
}

/*********************************************************************/
//  Document and Object Preview Type
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

/*********************************************************************/

export interface SanityFileType extends SanitySchemaType {
  type: 'file';
  fields?: SanityField[];
  options?: {
    storeOriginalFilename: boolean;
    accept: string; // Note: any valid file type specifier
  }
}

/*********************************************************************/

export interface SanityGeopointType extends SanitySchemaType {
  type: 'geopoint';
}

/*********************************************************************/

export interface SanityImageType extends SanitySchemaType {
  type: 'image';
  fields?: SanityField & { isHighlighted: boolean }[];
  options?: {
    metadata?: Array<'exif' | 'location' | 'lqip' | 'palette'>;
    hotspot?: boolean;
    storeOriginalFilename?: boolean;
    accept?: string; // Note: any valid file type specifier
    sources?: Array<string>;
  }
}

/*********************************************************************/

export interface SanityNumberType extends SanitySchemaType {
  type: 'number';
  options?: {
    list?: Array<number> | Array<{ value: number, title: string }>;

  }
}

/*********************************************************************/

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
}

/*********************************************************************/

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
}

/*********************************************************************/

export interface SanitySlugType extends SanitySchemaType {
  type: 'slug';
  options?: {
    source?: string | ((object: any, options: any) => string); // TODO: supply the correct types to this function
    maxLength?: number;
    slugify?: (input: string, object: any) => string;
    isUnique?: (slug: string, options: any) => any;
  }
}

/*********************************************************************/

export interface SanityStringType extends SanitySchemaType {
  type: 'string';
  options?: {
    list?: Array<string | { value: string; title: string }>;
    layout?: 'radio' | 'dropdown';
    direction?: 'horizontal' | 'vertical';
  }
}

/*********************************************************************/

export interface SanityTextType extends SanitySchemaType {
  type: 'text';
  rows?: number;
}

/*********************************************************************/

export interface SanityURLType extends SanitySchemaType {
  type: 'url';
}

/*********************************************************************/

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

/*********************************************************************/

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


/**********************************************************************
 **
 **    Sanity Fields
 **
 *********************************************************************/

export type SanityField = StandardSanityField | CustomSanityField;

/*********************************************************************/

type PropertiesFromType<T extends SanitySchemaType> = Exclude<T, 'type'>;

/*********************************************************************/

export type StandardSanityField = {
  name: string;
  fieldset?: string;
  validation?: Validation;
} &
  (
    SanityArrayField
    | SanityBlockField
    | SanityBooleanField
    | SanityDateField
    | SanityDateTimeField
    | SanityFileField
    | SanityGeopointField
    | SanityImageField
    | SanityNumberField
    | SanityObjectField
    | SanityReferenceField
    | SanitySlugField
    | SanityStringField
    | SanityTextField
    | SanityURLField
  );

type SanityArrayField = { type: 'array' } & PropertiesFromType<SanityArrayType>;
type SanityBlockField = { type: 'block' } & PropertiesFromType<SanityStringType>;
type SanityBooleanField = { type: 'boolean' } & PropertiesFromType<SanityBooleanType>;
type SanityDateField = { type: 'date' } & PropertiesFromType<SanityDateType>;
type SanityDateTimeField = { type: 'datetime' } & PropertiesFromType<SanityDateTimeType>;
type SanityFileField = { type: 'file' } & PropertiesFromType<SanityFileType>;
type SanityGeopointField = { type: 'geopoint' } & PropertiesFromType<SanityGeopointType>;
type SanityImageField = { type: 'image' } & PropertiesFromType<SanityImageType>;
type SanityNumberField = { type: 'number' } & PropertiesFromType<SanityNumberType>;
type SanityObjectField = { type: 'object' } & PropertiesFromType<SanityObjectType>;
type SanityReferenceField = { type: 'reference' } & PropertiesFromType<SanityReferenceType>;
type SanitySlugField = { type: 'slug' } & PropertiesFromType<SanitySlugType>;
type SanityStringField = { type: 'string' } & PropertiesFromType<SanityStringType>;
type SanityTextField = { type: 'text' } & PropertiesFromType<SanityTextType>;
type SanityURLField = { type: 'url' } & PropertiesFromType<SanityURLType>;

/*********************************************************************/

export type CustomSanityField = {
  name: string;
  validation?: Validation;
  [key: string]: unknown;
}

/**********************************************************************
 **
 **    Validation
 **
 *********************************************************************/

interface Validation {
  (rule: Rule): Rule
}

/**********************************************************************
 **
 **    Utility Classes
 **
 *********************************************************************/

export type SanityObjectSchema = Omit<SanityObjectType, 'type'>;

/*********************************************************************/

export type InferredObjectSchema<T extends SanityObjectSchema> = {
  [K in keyof T]: T[K];
}
  & {
    //  The below provides typed unions instead of generic types
    fields: Array<Readonly<T['fields'][number]>>;
    fieldsets?: ConditionalFieldsets<T['fieldsets']>;
  }

// type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;

// export type InferredObjectSchema<T extends SanityObjectSchema> = Overwrite<Exclude<T, 'fields'>, {
//   [K in keyof T]: T[K];
// } & {
//   fields: Array<Readonly<T['fields'][number]>>
// }>;


/*********************************************************************/
//  For typing the fields that make up the query shape

type ExtractedObjectFields<T extends SanityField[]> = {
  [K in T[number]['name']]: FieldReturnType<T[number] & { name: K }>
}

type ReturnedQueryShape<F extends SanityField[], N extends string> = {
  _key?: string;
  _type: N;
} & ExtractedObjectFields<F>;

/*********************************************************************/
//  For typing the fieldsets during object creation

type ConditionalFieldsets<T extends SanityFieldset[] | undefined> = T extends SanityFieldset[] ? RequiredFieldsets<T> : undefined;
type RequiredFieldsets<T extends SanityFieldset[]> = ReadonlyArray<T[number]>;

/*********************************************************************/
//  Field query types
//  TODO: include all types

type FieldReturnType<T extends SanityField> =
  T['type'] extends 'boolean' ? boolean :
  T['type'] extends 'number' ? number :
  T['type'] extends 'string' | 'date' | 'datetime' ? string :
  T['type'] extends 'array' ? Array<any> :
  unknown;



/**********************************************************************
 **
 **    Helper Functions
 **
 *********************************************************************/

// Sanity class with methods to assist in creation of types
export default class Sanity {

  static defineObject<T extends SanityObjectSchema>(schema: InferredObjectSchema<T>) {

    const object = {
      ...schema,
    };

    let extractedFields: ExtractedObjectFields<typeof schema['fields']> = schema.fields.reduce((acc, field) => {
      // we're interested in the query shape here rather than the value    
      return { ...acc, [field.name]: null }
    }, {} as ExtractedObjectFields<typeof schema['fields']>);

    const query: ReturnedQueryShape<typeof schema['fields'], typeof schema['name']> = {
      _type: schema.name,
      ...extractedFields
    }

    return {
      object,
      query
    };
  }

  static createContentType<T extends keyof SanityContentTypesRecord>(schema: SanityContentTypesRecord[T]): object {
    return schema;
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

}



function isArrayField(field: StandardSanityField): field is SanityArrayField {
  return field.type === 'array';
}


function isStringField(field: StandardSanityField): field is SanityStringField {
  return field.type === 'string';
}





// type SanityFields = SanityContentTypes;
type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;

export type SanityFields = { fieldset?: string } & (SanityContentTypes | Overwrite<SanityContentTypes, { type: string }>) // required to allow custom types in field name

export interface SanityFieldset {
  name: string;
  title: string;
  options?: {
    collapsible?: boolean;
    collapsed?: boolean;
    columns?: number;
  }
}




// Result Types

export type SanityObjectResult<T extends SanityObjectType> = SanityObjectResultHelper<T, T['fields'][number]>

type SanityObjectResultHelper<T extends SanityObjectType, X extends SanityField> = {
  _type: T['name'];
  _key?: string;
} &
  {
    [K in X['name']]: FieldResult<X & { name: K }>
  }


// Works
export type SanityDocumentResult<T extends SanityDocumentType> = SanityDocumentResultHelper<T, T['fields'][number]>

type SanityDocumentResultHelper<T extends SanityDocumentType, X extends SanityField> = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
  _type: T['name'];
} &
  {
    [K in X['name']]: FieldResult<X & { name: K }>
  }

type FieldResult<T extends SanityField> =
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


export function isStringType(field: SanityField): field is SanityStringType {
  return (field as SanityStringType).options !== undefined;
}

interface SchemaReturnType<N, T> {
  _source: {
    name: N,
    types: T
  }
}