# Home Inc. API Guidelines

With these guidelines, we aim to establish a set of best practices and standards for designing, developing, documenting, and maintaining APIs.

Skip to:

- [Purpose](#purpose)
- [How to read the guidelines](#how-to-read-the-guidelines)
- [API linting](#api-linting)

## Purpose

We consider API guidelines essential to ensure that our APIs are consistent, reliable, secure, and easy to use.

Our APIs are a valuable part of our business assets, as with APIs we generate the corresponding operating values.
Ideally, by applying the API guidelines, all APIs look as if they were created by a single team, thus providing API consumers with a homogeneous, easy-to-use product.
This facilitates a great developer experience and the ability to quickly compose complex business processes.
With this in mind, we trust that our teams build APIs that are:

- self-explanatory
- easy to use and robust
- of high quality
- consistent
- transparently versioned
- RESTful with respect to REST APIs.

## How to read the guidelines

These guidelines include rules for REST and asynchronous APIs and are supplemented by rules applicable to both types of APIs.
It is a living document and will be revised over time as new rules are added or existing rules are modified.

The guidelines are structured into individual rules that use the key words <Badge type="danger">MUST</Badge>,<Badge type="danger">MUST NOT</Badge>,<Badge type="warning">SHOULD</Badge>,<Badge type="warning">SHOULD NOT</Badge>,<Badge type="tip">MAY</Badge>.
These keywords are to be interpreted as described in [RFC2119](https://www.ietf.org/rfc/rfc2119.txt).
In this document, such keywords are highlighted at the beginning of each section in uppercase letters and are color-coded.

> **_Disclaimer:_**  Code examples may be incomplete and/or may violate the rules described in the guidelines. Examples are intentionally kept simple to make them more accessible and easier to comprehend. They are always correct in their context, but not necessarily outside of it. Common examples for this are omitted headers such as Authorization or omitted (mandatory) properties in JSON responses.

## API linting

Our APIs can be validated using *** (Anypoint API Governance?).
By automating the verification of APIs againgst our guidelines, we enable our developers to get a much quicker view of where API design needs to be adjusted.
