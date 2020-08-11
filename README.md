# graphql-string-loader

Webpack loader that imports GraphQL queries as strings.

Works similar to graphql-tag/loader from Apollo except this imports the queries as strings instead of GraphQL AST.

### Example

```graphql
#import "./ContentDetailsFragment.graphql"

query Content($id: Int!) {
    content(id: $id) {
        id
        title
        ...ContentDetailsFragment
    }
}
```
