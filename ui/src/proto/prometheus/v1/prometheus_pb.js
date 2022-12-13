// @generated by protoc-gen-es v0.1.1 with parameter "target=js+dts"
// @generated from file prometheus/v1/prometheus.proto (package prometheus.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {proto3} from "@bufbuild/protobuf";

/**
 * @generated from message prometheus.v1.QueryRequest
 */
export const QueryRequest = proto3.makeMessageType(
  "prometheus.v1.QueryRequest",
  () => [
    { no: 1, name: "query", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "time", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message prometheus.v1.QueryResponse
 */
export const QueryResponse = proto3.makeMessageType(
  "prometheus.v1.QueryResponse",
  () => [
    { no: 1, name: "warnings", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "scalar", kind: "message", T: SamplePair, oneof: "options" },
    { no: 3, name: "vector", kind: "message", T: Vector, oneof: "options" },
    { no: 4, name: "matrix", kind: "message", T: Matrix, oneof: "options" },
    { no: 5, name: "string", kind: "message", T: String, oneof: "options" },
  ],
);

/**
 * @generated from message prometheus.v1.QueryRangeRequest
 */
export const QueryRangeRequest = proto3.makeMessageType(
  "prometheus.v1.QueryRangeRequest",
  () => [
    { no: 1, name: "query", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "start", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "end", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "step", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message prometheus.v1.QueryRangeResponse
 */
export const QueryRangeResponse = proto3.makeMessageType(
  "prometheus.v1.QueryRangeResponse",
  () => [
    { no: 1, name: "warnings", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "scalar", kind: "message", T: SamplePair, oneof: "options" },
    { no: 3, name: "vector", kind: "message", T: Vector, oneof: "options" },
    { no: 4, name: "matrix", kind: "message", T: Matrix, oneof: "options" },
    { no: 5, name: "string", kind: "message", T: String, oneof: "options" },
  ],
);

/**
 * Vector is basically only an alias for Samples, but the
 * contract is that in a Vector, all Samples have the same timestamp.
 *
 * @generated from message prometheus.v1.Vector
 */
export const Vector = proto3.makeMessageType(
  "prometheus.v1.Vector",
  () => [
    { no: 1, name: "samples", kind: "message", T: Sample, repeated: true },
  ],
);

/**
 * Sample is a sample pair associated with a metric.
 *
 * @generated from message prometheus.v1.Sample
 */
export const Sample = proto3.makeMessageType(
  "prometheus.v1.Sample",
  () => [
    { no: 1, name: "time", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "value", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 3, name: "metric", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ],
);

/**
 * Matrix is a list of time series.
 *
 * @generated from message prometheus.v1.Matrix
 */
export const Matrix = proto3.makeMessageType(
  "prometheus.v1.Matrix",
  () => [
    { no: 1, name: "samples", kind: "message", T: SampleStream, repeated: true },
  ],
);

/**
 * SampleStream is a stream of Values belonging to an attached COWMetric.
 *
 * @generated from message prometheus.v1.SampleStream
 */
export const SampleStream = proto3.makeMessageType(
  "prometheus.v1.SampleStream",
  () => [
    { no: 1, name: "values", kind: "message", T: SamplePair, repeated: true },
    { no: 2, name: "metric", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ],
);

/**
 * SamplePair pairs a SampleValue with a Timestamp.
 *
 * @generated from message prometheus.v1.SamplePair
 */
export const SamplePair = proto3.makeMessageType(
  "prometheus.v1.SamplePair",
  () => [
    { no: 1, name: "time", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "value", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
  ],
);

/**
 * String is a string value evaluated at the set timestamp.
 *
 * @generated from message prometheus.v1.String
 */
export const String = proto3.makeMessageType(
  "prometheus.v1.String",
  () => [
    { no: 1, name: "time", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

