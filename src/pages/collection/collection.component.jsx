import React from "react";
import { connect } from "react-redux";
import Styled from "styled-components";

import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = ({ collection, className }) => {
  const { title, items } = collection;
  return (
    <div className={className}>
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

const StyledCollectionPage = Styled(CollectionPage)`
display: flex;
  flex-direction: column;

  .title {
    font-size: 38px;
    margin: 0 auto 30px;
  }

  .items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    & > div {
      margin-bottom: 30px;
    }
  }
`;

export default connect(mapStateToProps)(StyledCollectionPage);
