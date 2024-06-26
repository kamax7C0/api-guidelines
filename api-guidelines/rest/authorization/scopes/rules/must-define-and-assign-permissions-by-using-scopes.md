# MUST define and assign permissions by using scopes

Endpoints must define permissions to protect access to their resources.
Each endpoint must define at least one OAuth 2.0 scope using the defined [naming conventions](./shoud-adhere-to-scope-naming-conventions.md).

## Granting permission to public resources

Resources can be classified as _public_.
This is in the responsibility of the resource owner.
The Home Inc. website can serve as a reference for public resources.
Data that can be accessed there without further login can be defined as public.

For example:

- Product data
- Deal of the day

However, even endpoints providing public resources [must be secured with OAuth 2.0](../../oauth/rules/must-secure-endpoints-with-oauth2.md).
To harmonize the access to public resources we defined the special scope `companyname.read`, which can be used to secure those resources.

::: warning Important
Every resource that **cannot be clearly** classified as public has to be considered as private and is not allowed to use the `companyname.read` scope.
:::
