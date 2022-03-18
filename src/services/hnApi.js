export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStoryIds = () => {
  console.log("fetching");
  return fetch(newStoriesUrl).then((res) => res.json());
};

export const getStory = (storyId) => {
  return fetch(`${storyUrl + storyId}.json`).then((res) => res.json());
};
