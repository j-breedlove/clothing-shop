import React from "react";
import {
  DirectoryItemContainer,
  BackgroundImageDiv,
  BodyDiv,
  TitleH2,
  SubtitleP,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  return (
    <DirectoryItemContainer>
      <BackgroundImageDiv imageUrl={category.imageUrl} />
      <BodyDiv>
        <TitleH2>{category.title}</TitleH2>
        <SubtitleP>Shop Now</SubtitleP>
      </BodyDiv>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
