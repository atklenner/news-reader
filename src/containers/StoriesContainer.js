import { useState, useEffect } from "react";
import { getStory, getStoryIds } from "../services/hnApi";

export default function StoriesContainer() {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
    getStory("30716968").then((data) => console.log(data));
  }, []);

  return <>{JSON.stringify(storyIds)}</>;
}
