/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, memo } from "react";
import { mapTime } from "../mappers/mapTime";
import { getStory } from "../services/hnApi";
import {
  StoryWrapper,
  StoryTitle,
  StoryMeta,
  StoryMetaElement,
} from "../styles/StoryStyles";
import { selectFields } from "../selectors/selectFields";

export const Story = memo(function Story({ storyId }) {
  const [story, setStory] = useState({});
  useEffect(() => {
    getStory(storyId).then(
      (data) => data && data.url && setStory(selectFields(data))
    );
  }, []);
  return story && story.url ? (
    <StoryWrapper data-testid="story">
      <StoryTitle>
        <a href={story.url}>{story.title}</a>
      </StoryTitle>

      <StoryMeta>
        <span className="story__by" data-testid="story-by">
          <StoryMetaElement color="black">By: </StoryMetaElement>
          {story.by}
        </span>
        <span className="story__time" data-testid="story-time">
          <StoryMetaElement color="black">Posted: </StoryMetaElement>{" "}
          {mapTime(story.time)}
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null;
});
