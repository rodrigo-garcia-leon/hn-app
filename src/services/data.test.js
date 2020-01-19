import { BASE_URL, fetchItem, fetchList } from "./data";
import { LIST_TOP } from "../components/ListView.js";
import { TEST_ITEM_22069310 } from "./__mocks__/data";

const TEST_ITEM_22069310_URL = `${BASE_URL}item/${TEST_ITEM_22069310.id}.json`;

export const TEST_ITEM_22089546 = {
  by: "matt_d",
  descendants: 14,
  id: 22089546,
  kids: [22089792, 22089957],
  score: 67,
  time: 1579409698,
  title: "GCC: C++ coroutines – Initial implementation pushed to master",
  type: "story",
  url: "https://gcc.gnu.org/ml/gcc-patches/2020-01/msg01096.html"
};
export const TEST_ITEM_22089166 = {
  by: "pseudolus",
  descendants: 30,
  id: 22089166,
  kids: [22089854, 22090026, 22089526, 22089414, 22089463],
  score: 66,
  time: 1579403758,
  title: "Maine's giant spinning ice disc looks like it's reforming",
  type: "story",
  url:
    "https://www.theguardian.com/us-news/2020/jan/19/maines-giant-spinning-ice-disc-looks-like-its-reforming"
};

export const TEST_LIST = [
  TEST_ITEM_22069310.id,
  TEST_ITEM_22089546.id,
  TEST_ITEM_22089166.id
];
const TEST_LIST_URL = "https://hacker-news.firebaseio.com/v0/topstories.json";

export const NETWORK_ERROR_MESSAGE = "network error";

export function setupFetchListOkMock() {
  return jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue(TEST_LIST)
  });
}

export function setupFetchItemOkMock() {
  return jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue(TEST_ITEM_22069310)
  });
}

export function setupFetchErrorMock() {
  return jest.spyOn(global, "fetch").mockRejectedValue(NETWORK_ERROR_MESSAGE);
}

describe("fetchList", () => {
  let mockFetch;

  afterEach(() => {
    mockFetch.mockRestore();
  });

  test("ok", async () => {
    mockFetch = setupFetchListOkMock();

    await expect(fetchList(LIST_TOP)).resolves.toBe(TEST_LIST);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(TEST_LIST_URL);
  });

  test("error", async () => {
    mockFetch = setupFetchErrorMock();

    await expect(fetchList(LIST_TOP)).rejects.toThrow(NETWORK_ERROR_MESSAGE);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(TEST_LIST_URL);
  });
});

describe("fetchItem", () => {
  let mockFetch;

  afterEach(() => {
    mockFetch.mockRestore();
  });

  test("ok", async () => {
    mockFetch = setupFetchItemOkMock();

    await expect(fetchItem(TEST_ITEM_22069310.id)).resolves.toBe(
      TEST_ITEM_22069310
    );
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(TEST_ITEM_22069310_URL);
  });

  test("error", async () => {
    mockFetch = setupFetchErrorMock();

    await expect(fetchItem(TEST_ITEM_22069310.id)).rejects.toThrow(
      NETWORK_ERROR_MESSAGE
    );
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(TEST_ITEM_22069310_URL);
  });
});
