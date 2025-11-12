export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
};

export type Query = {
  __typename?: 'Query';
  addTwoNumbers?: Maybe<Scalars['Int']['output']>;
};


export type QueryAddTwoNumbersArgs = {
  a: Scalars['Int']['input'];
  b: Scalars['Int']['input'];
};

// Generated GraphQL SDK (auto-generated – do not edit)

import type { EnumPlan, EnumValueInput, FieldPlan, InputFieldPlan, GrafastSchemaConfig, InputObjectPlan, InterfacePlan, ObjectPlan, ScalarPlan, Step, UnionPlan } from 'grafast';
import { makeGrafastSchema } from 'grafast';
import type { Overrides } from './schema-manual-types.ts';

type NoArguments = Record<string, never>;
type NonNullStep<TStep extends Step> = TStep & Step<TStep extends Step<infer U> ? NonNullable<U> : any>;
type ListOfStep<TStep extends Step> = TStep extends Step<infer U> ? Step<ReadonlyArray<U> | null | undefined> : TStep;

type Get<
  TTypeName extends string,
  TProp extends string,
  TFallback = any,
> = TTypeName extends keyof Overrides
  ? TProp extends keyof Overrides[TTypeName]
    ? NonNullable<Overrides[TTypeName][TProp]>
    : TFallback
  : TFallback;

export interface TypedGrafastSchemaSpec extends Omit<GrafastSchemaConfig, 'objects' | 'interfaces' | 'unions' | 'inputObjects' | 'scalars' | 'enums'> {
  objects?: {
    Query?: Omit<ObjectPlan<Get<"Query", "source", NonNullStep<Get<"Query", "nullable", Step>>>>, 'plans'> & {
      plans?: {
        addTwoNumbers?: FieldPlan<Get<"Query", "source", NonNullStep<Get<"Query", "nullable", Step>>>, QueryAddTwoNumbersArgs, Get<"Int", "nullable", Step>>;
      }
    };
  }
  interfaces?: {
  }
  unions?: {
  }
  inputObjects?: {
  }
  scalars?: {
  }
  enums?: {
  }
};

export function typedMakeGrafastSchema(spec: TypedGrafastSchemaSpec) {
  return makeGrafastSchema(spec);
}
