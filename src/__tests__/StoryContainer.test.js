import { render, cleanup, screen } from "@testing-library/react";
import { storyIds, singularStory } from "../fixtures";
import { getStory, getStoryIds } from "../services/hnApi";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { STORY_INCREMENT } from "../constants";
import StoriesContainer from "../containers/StoriesContainer";

beforeEach(cleanup);

jest.mock("../hooks/useInfiniteScroll.js");

jest.mock("../services/hnApi", () => ({
  getStory: jest.fn(),
  getStoryIds: jest.fn(),
}));

test("renders the container with a story", async () => {
  useInfiniteScroll.mockImplementation(() => ({
    count: STORY_INCREMENT,
  }));
  getStory.mockImplementation(() => Promise.resolve(singularStory));
  getStoryIds.mockImplementation(() => Promise.resolve(storyIds));

  render(<StoriesContainer />);

  expect(screen.getByText("News Stories")).toBeTruthy();
  expect(await screen.findByText("It's an article")).toBeTruthy();
  expect(screen.queryByTestId("story-by").textContent).toEqual("By: Author");
});
