import React from "react";

import CollectionItem from "../collection-item/collection-item.component";
import styled from "styled-components";

const CollectionPreview = ({ title, items, className }) => (
  <div className={className}>
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((items, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

const StyledCollectionPreview = styled(CollectionPreview)`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .title {
    font-size: 28px;
    margin-bottom: 25px;
  }

  .preview {
    display: flex;
    justify-content: space-between;
  }
`;

export default StyledCollectionPreview;
