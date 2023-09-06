import { FlatList } from "react-native";
import React from "react";

const OptimizedList = ({ listItems, renderList }) => {
  return (
      <FlatList
        data={listItems}
        renderItem={renderList}
        keyExtractor={(item) => item.id}
      />

  );
};

export default OptimizedList;
