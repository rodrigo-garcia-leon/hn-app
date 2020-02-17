import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import ListView from "./components/ListView";
import "./App.css";

const client = new ApolloClient({
  uri: "https://hn-api.rodrigogarcia.me/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <main>
        <ListView></ListView>
      </main>
    </ApolloProvider>
  );
}

export default App;
