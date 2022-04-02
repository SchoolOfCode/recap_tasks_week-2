import { JSDOM } from "jsdom";
import path from "path";
import { it, expect, jest, beforeAll } from "@jest/globals";
import "@testing-library/jest-dom";
import * as catApi from "./cat-api.js";
import { setImmediate } from "timers/promises";

const apiUrl = "https://api.thecatapi.com/v1/images/search";

/** @type {JSDOM["window"]} */
let window;

/** @type {JSDOM["window"]["document"]} */
let document;

const filePath = path.resolve("..", "..", "task-3", "index.html");

const json = jest.fn(async () => catApi.primaryResponse);
const fetch = jest.fn(async () => {
  return {
    ok: true,
    status: 200,
    json,
  };
});

beforeAll(async () => {
  const jsdom = await JSDOM.fromFile(filePath, {
    contentType: "text/html",
    runScripts: "dangerously",
    resources: "usable",
    beforeParse(window) {
      window.fetch = fetch;
    },
  });

  window = jsdom.window;
  document = window.document;

  await new Promise((resolve) => {
    document.addEventListener("load", resolve, { once: true });
  });
});

it("should contain a button", () => {
  const button = document.querySelector("button");
  expect(button).toBeInTheDocument();
});

it("should contain an image", () => {
  const image = document.querySelector("img");
  expect(image).toBeInTheDocument();
});

it("should call fetch with correct url", async () => {
  expect(fetch.mock.lastCall?.[0]).toBe(apiUrl);
});

it("should call fetch with correct http method", async () => {
  const methodUsed = fetch.mock.lastCall?.[1]?.method ?? "get";
  expect(methodUsed).toMatch(/^get$/i);
});

it("should set image source based on data fetched from API", async () => {
  const { url } = catApi.secondaryResponse[0];

  {
    const img = document.querySelector("img");
    expect(img.src).not.toBe(url);
  }

  {
    const button = document.querySelector("button");
    json.mockResolvedValueOnce(catApi.secondaryResponse);
    // Can probably use user event here instead.
    button.click();
    await setImmediate();
  }

  {
    const img = document.querySelector("img");
    expect(img.src).toBe(url);
  }
});

it.todo("index.html should pass linting checks");
it.todo("main.js should pass linting checks");
