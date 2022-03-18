import { useState, useEffect } from "react";
import { Story } from "../components/Story";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { getStoryIds } from "../services/hnApi";
import {
  GlobalStyle,
  StoriesContainerWrapper,
} from "../styles/StoriesContainerStyles";

export default function StoriesContainer() {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => data && setStoryIds(data));
  }, []);

  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper data-testid="stories-container">
        <h1>News Stories</h1>
        {storyIds.slice(0, count).map((storyId) => (
          <Story storyId={storyId} key={storyId} />
        ))}
      </StoriesContainerWrapper>
    </>
  );
}
