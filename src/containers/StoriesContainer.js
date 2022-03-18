import { useState, useEffect } from "react";
import Story from "../components/Story";
import { getStoryIds } from "../services/hnApi";

export default function StoriesContainer() {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => data && setStoryIds(data));
  }, []);

  return (
    <>
      <h1>News Stories</h1>
      {storyIds.map((storyId) => (
        <Story storyId={storyId} key={storyId} />
      ))}
    </>
  );
}
