// @generated by protoc-gen-es v0.1.1 with parameter "target=js+dts"
// @generated from file prometheus/v1/prometheus.proto (package prometheus.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3} from "@bufbuild/protobuf";

/**
 * @generated from message prometheus.v1.QueryRequest
 */
export declare class QueryRequest extends Message<QueryRequest> {
  /**
   * @generated from field: string query = 1;
   */
  query: string;

  /**
   * @generated from field: int64 time = 2;
   */
  time: bigint;

  constructor(data?: PartialMessage<QueryRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "prometheus.v1.QueryRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryRequest;

  static equals(a: QueryRequest | PlainMessage<QueryRequest> | undefined, b: QueryRequest | PlainMessage<QueryRequest> | undefined): boolean;
}

/**
 * @generated from message prometheus.v1.QueryResponse
 */
export declare class QueryResponse extends Message<QueryResponse> {
  /**
   * @generated from field: repeated string warnings = 1;
   */
  warnings: string[];

  /**
   * @generated from oneof prometheus.v1.QueryResponse.options
   */
  options: {
    /**
     * @generated from field: prometheus.v1.SamplePair scalar = 2;
     */
    value: SamplePair;
    case: "scalar";
  } | {
    /**
     * @generated from field: prometheus.v1.Vector vector = 3;
     */
    value: Vector;
    case: "vector";
  } | {
    /**
     * @generated from field: prometheus.v1.Matrix matrix = 4;
     */
    value: Matrix;
    case: "matrix";
  } | {
    /**
     * @generated from field: prometheus.v1.String string = 5;
     */
    value: String;
    case: "string";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<QueryResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "prometheus.v1.QueryResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryResponse;

  static equals(a: QueryResponse | PlainMessage<QueryResponse> | undefined, b: QueryResponse | PlainMessage<QueryResponse> | undefined): boolean;
}

/**
 * @generated from message prometheus.v1.QueryRangeRequest
 */
export declare class QueryRangeRequest extends Message<QueryRangeRequest> {
  /**
   * @generated from field: string query = 1;
   */
  query: string;

  /**
   * @generated from field: int64 start = 2;
   */
  start: bigint;

  /**
   * @generated from field: int64 end = 3;
   */
  end: bigint;

  /**
   * @generated from field: int64 step = 4;
   */
  step: bigint;

  constructor(data?: PartialMessage<QueryRangeRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "prometheus.v1.QueryRangeRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryRangeRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryRangeRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryRangeRequest;

  static equals(a: QueryRangeRequest | PlainMessage<QueryRangeRequest> | undefined, b: QueryRangeRequest | PlainMessage<QueryRangeRequest> | undefined): boolean;
}

/**
 * @generated from message prometheus.v1.QueryRangeResponse
 */
export declare class QueryRangeResponse extends Message<QueryRangeResponse> {
  /**
   * @generated from field: repeated string warnings = 1;
   */
  warnings: string[];

  /**
   * @generated from oneof prometheus.v1.QueryRangeResponse.options
   */
  options: {
    /**
     * @generated from field: prometheus.v1.SamplePair scalar = 2;
     */
    value: SamplePair;
    case: "scalar";
  } | {
    /**
     * @generated from field: prometheus.v1.Vector vector = 3;
     */
    value: Vector;
    case: "vector";
  } | {
    /**
     * @generated from field: prometheus.v1.Matrix matrix = 4;
     */
    value: Matrix;
    case: "matrix";
  } | {
    /**
     * @generated from field: prometheus.v1.String string = 5;
     */
    value: String;
    case: "string";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<QueryRangeResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "prometheus.v1.QueryRangeResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryRangeResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryRangeResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryRangeResponse;

  static equals(a: QueryRangeResponse | PlainMessage<QueryRangeResponse> | undefined, b: QueryRangeResponse | PlainMessage<QueryRangeResponse> | undefined): boolean;
}

/**
 * Vector is basically only an alias for Samples, but the
 * contract is that in a Vector, all Samples have the same timestamp.
 *
 * @generated from message prometheus.v1.Vector
 */
export declare class Vector extends Message<Vector> {
  /**
   * @generated from field: repeated prometheus.v1.Sample samples = 1;
   */
  samples: Sample[];

  constructor(data?: PartialMessage<Vector>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "prometheus.v1.Vector";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Vector;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Vector;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Vector;

  static equals(a: Vector | PlainMessage<Vector> | undefined, b: Vector | PlainMessage<Vector> | undefined): boolean;
}

/**
 * Sample is a sample pair associated with a metric.
 *
 * @generated from message prometheus.v1.Sample
 */
export declare class Sample extends Message<Sample> {
  /**
   * @generated from field: int64 time = 1;
   */
  time: bigint;

  /**
   * @generated from field: double value = 2;
   */
  value: number;

  /**
   * @generated from field: map<string, string> metric = 3;
   */
  metric: { [key: string]: string };

  constructor(data?: PartialMessage<Sample>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "prometheus.v1.Sample";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Sample;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Sample;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Sample;

  static equals(a: Sample | PlainMessage<Sample> | undefined, b: Sample | PlainMessage<Sample> | undefined): boolean;
}

/**
 * Matrix is a list of time series.
 *
 * @generated from message prometheus.v1.Matrix
 */
export declare class Matrix extends Message<Matrix> {
  /**
   * @generated from field: repeated prometheus.v1.SampleStream samples = 1;
   */
  samples: SampleStream[];

  constructor(data?: PartialMessage<Matrix>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "prometheus.v1.Matrix";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Matrix;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Matrix;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Matrix;

  static equals(a: Matrix | PlainMessage<Matrix> | undefined, b: Matrix | PlainMessage<Matrix> | undefined): boolean;
}

/**
 * SampleStream is a stream of Values belonging to an attached COWMetric.
 *
 * @generated from message prometheus.v1.SampleStream
 */
export declare class SampleStream extends Message<SampleStream> {
  /**
   * @generated from field: repeated prometheus.v1.SamplePair values = 1;
   */
  values: SamplePair[];

  /**
   * @generated from field: map<string, string> metric = 2;
   */
  metric: { [key: string]: string };

  constructor(data?: PartialMessage<SampleStream>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "prometheus.v1.SampleStream";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SampleStream;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SampleStream;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SampleStream;

  static equals(a: SampleStream | PlainMessage<SampleStream> | undefined, b: SampleStream | PlainMessage<SampleStream> | undefined): boolean;
}

/**
 * SamplePair pairs a SampleValue with a Timestamp.
 *
 * @generated from message prometheus.v1.SamplePair
 */
export declare class SamplePair extends Message<SamplePair> {
  /**
   * @generated from field: int64 time = 1;
   */
  time: bigint;

  /**
   * @generated from field: double value = 2;
   */
  value: number;

  constructor(data?: PartialMessage<SamplePair>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "prometheus.v1.SamplePair";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SamplePair;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SamplePair;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SamplePair;

  static equals(a: SamplePair | PlainMessage<SamplePair> | undefined, b: SamplePair | PlainMessage<SamplePair> | undefined): boolean;
}

/**
 * String is a string value evaluated at the set timestamp.
 *
 * @generated from message prometheus.v1.String
 */
export declare class String extends Message<String> {
  /**
   * @generated from field: int64 time = 1;
   */
  time: bigint;

  /**
   * @generated from field: string value = 2;
   */
  value: string;

  constructor(data?: PartialMessage<String>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "prometheus.v1.String";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): String;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): String;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): String;

  static equals(a: String | PlainMessage<String> | undefined, b: String | PlainMessage<String> | undefined): boolean;
}

