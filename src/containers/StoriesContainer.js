import { useState, useEffect } from "react";
import Story from "../components/Story";
import { getStoryIds } from "../services/hnApi";
import {
  GlobalStyle,
  StoriesContainerWrapper,
} from "../styles/StoriesContainerStyles";

export default function StoriesContainer() {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => data && setStoryIds(data));
  }, []);

  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper data-testid="stories-container">
        <h1>News Stories</h1>
        {storyIds.map((storyId) => (
          <Story storyId={storyId} key={storyId} />
        ))}
      </StoriesContainerWrapper>
    </>
  );
}
