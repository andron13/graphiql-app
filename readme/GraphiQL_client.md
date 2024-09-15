## GraphiQL client, which includes:

- text input for the endpoint url
- request editor
- variables editor
- headers editor
- text input for the endpoint which is used for getting the documentation (sdl)
- documentation explorer
- response section

## GraphiQL

- This route should be private.
- Header should be visible.
- Endpoint (url) input.
- SDL endpoint (url) input which will be used for the documentation. By default will duplicate the value provided in the main url input, and will add "?sdl" to the end. User should be able to modify this url if the api uses another endpoint for the documentation.
- Query editor. The query editor should support prettifying. You CAN use one editor for GraphiQL and the RESTfull client, but mind the support of the GraphQL syntax.
- Response section / JSON viewer. JSON viewer should be read-only, it will be used in the response section. Should contain information about HTTP response code and the response status. You SHOULD reuse the one from the RESTfull client.
- Variables editor section. You CAN reuse the one from the RESTfull client.
- Headers editor section (If you are making a CORS request each added header should be supported on the backend, please, consider that). You CAN reuse the one from the RESTfull client.
- Documentation section, should be visible only when the app receives a successfull response with the schema definition from the API.

## GraphiQL template

```
+----------------------------------------------------+
|                      Header                        |
|  +----------------------------------------------+  |
|  | [Logo] | Language Toggle | [Sign Out] |      |  |
|  +----------------------------------------------+  |
+----------------------------------------------------+
|                                                    |
|   +------------------ GraphiQL Client -----------+ |
|   | Endpoint URL: [URL Input]                    | |
|   | SDL URL: [URL Input]                         | |
|   | Headers: [Add Header Button]                 | |
|   | +-----------------------------------------+  | |
|   | | Header Key | Header Value               |  | |
|   | +-----------------------------------------+  | |
|   | Query: [GraphQL Query Editor]                | |
|   | Variables: [Variables Editor]                | |
|   +----------------------------------------------+ |
|                                                    |
|   +----------------- Response -------------------+ |
|   | Status: [HTTP Status Code]                   | |
|   | Body: [Read-Only JSON Viewer]                | |
|   +--------------------------------------------+   |
|   Documentation: [Visible if SDL Response Success] |
+----------------------------------------------------+
|                      Footer                        |
|    [GitHub Link] | Year | [Course Logo]            |
+----------------------------------------------------+
```

## Routing on GraphiQL client

Similar to the RESTfull client, the request infromation should be provided via the url, with the only exception - all the GraphQL queries are POST queries, so to distinguish it from the usual REST queries, you should use GRAPHQL as a first route parameter:
`http://localhost:5137/GRAPHQL/{endpointUrlBase64encoded}/{bodyBase64encoded}?header1=header1value&header2=header2value...`
