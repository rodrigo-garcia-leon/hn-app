import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import List from "./List";

const LIST_TOP_PAGE_1 = gql`
  {
    list(id: "top", page: 1) {
      stories {
        id
        by
        score
        time
        title
      }
    }
  }
`;

function ListView() {
  const { loading, error, data } = useQuery(LIST_TOP_PAGE_1);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <List items={data.list.stories} />;
}

export default ListView;
