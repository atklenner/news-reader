import { render, cleanup, screen } from "@testing-library/react";
import { singularStory } from "../fixtures";
import { getStory } from "../services/hnApi";
import Story from "../components/Story";

beforeEach(() => {
  cleanup();
  jest.resetAllMocks();
});

jest.mock("../services/hnApi", () => ({
  getStory: jest.fn(),
}));

test("renders the component with content", async () => {
  getStory.mockImplementation(() => Promise.resolve(singularStory));

  render(<Story storyId={1} />);

  const paraElement = await screen.findByTestId("story-by");
  expect(await screen.findByTestId("story")).toBeTruthy();
  expect(await screen.findByText("It's an article")).toBeTruthy();
  expect(paraElement.textContent).toEqual("By: Author");
});
