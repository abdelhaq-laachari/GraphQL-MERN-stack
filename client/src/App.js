import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Client from "./pages/Client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Client/>
      </ApolloProvider>
    </>
  );
}

export default App;
