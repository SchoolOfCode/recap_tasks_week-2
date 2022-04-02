import { JSDOM } from "jsdom";
import path from "path";
import {
  it,
  expect,
  beforeAll,
  afterAll,
  jest,
  beforeEach,
} from "@jest/globals";
import "@testing-library/jest-dom/extend-expect";

/** @type {JSDOM["window"]} */
let window;

/** @type {JSDOM["window"]["document"]} */
let document;

/** @type {HTMLParagraphElement} */
let p;

const filePath = path.resolve("..", "..", "task-2", "index.html");

beforeAll(async () => {
  jest.useFakeTimers();

  const jsdom = await JSDOM.fromFile(filePath, {
    contentType: "text/html",
    // Not ideal, could maybe pass a custom resources loader (see: https://github.com/jsdom/jsdom#advanced-configuration).
    // Would allow for whitelisting of urls.
    runScripts: "dangerously",
    resources: "usable",
    beforeParse(window) {
      // TODO: might be a cleaner way (than to mutate objects we don't own).
      // The reason for overwriting window's properties is to use
      // jest's fake timers (instead of having to wait for real time to elapse).
      // Supposedly, jest.useFakeTimers() is meant to cover jsdom timers,
      // but couldn't get it all to work. Seems easier to keep testEnvironment=node and
      // import/set up JSDOM in the test.
      window.setTimeout = global.setTimeout;
      window.setInterval = global.setInterval;
      window.clearInterval = global.clearInterval;
      window.clearTimeout = global.clearTimeout;
      jest.spyOn(window, "setInterval");
      jest.spyOn(window, "clearInterval");
      jest.spyOn(window.document, "querySelector");
    },
  });

  window = jsdom.window;
  document = jsdom.window.document;

  await new Promise((resolve) => {
    document.addEventListener("load", resolve, { once: true });
  });
});

afterAll(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

beforeEach(() => {
  p = document.querySelector("#count");
});

it("should call setInterval", () => {
  expect(window.setInterval).toHaveBeenCalled();
});

it("should pass a function and 1000 as arguments to setInterval", () => {
  const expectedArguments = [expect.any(Function), 1_000];
  expect(window.setInterval).toHaveBeenCalledWith(...expectedArguments);
});

it("should display 0 in paragraph element to begin with", () => {
  expect(p).toHaveTextContent("0");
});

it.each([
  ["1", 1],
  ["2", 2],
  ["3", 3],
  ["4", 4],
  ["5", 5],
  ["6", 6],
  ["7", 7],
  ["8", 8],
  ["9", 9],
  ["10", 10],
  ["11", 11],
  ["12", 12],
])("should display %s in paragraph element after %d second(s)", (expected) => {
  jest.advanceTimersByTime(1_000);
  expect(p).toHaveTextContent(expected);
});

it("should call clearInterval after 12 seconds", () => {
  jest.advanceTimersByTime(1_000);
  expect(window.clearInterval).toHaveBeenCalled();
});

it("should call clearInterval with the value returned from setInterval", () => {
  const intervalId = window.setInterval.mock.results?.[0].value;
  expect(window.clearInterval).toHaveBeenCalledWith(intervalId);
});

it("should still display 12 in paragraph element after an hour", () => {
  jest.advanceTimersByTime(3_600_000);
  expect(p).toHaveTextContent("12");
});

it.todo("should not use 'innerText' for updating displayed count");
it.todo("should not use 'innerHTML' for updating displayed count");
it.todo("should not use 'outerHTML' for updating displayed count");
it.todo("index.html should pass linting checks");
it.todo("main.js should pass linting checks");
