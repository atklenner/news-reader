import { useState, useEffect } from "react";
import { getStoryIds } from "./services/hnApi";

export default function App() {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
  }, []);

  return <div>{JSON.stringify(storyIds)}</div>;
}
