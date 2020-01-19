import { formatTime } from "./utils";

describe("utils", () => {
  test("formatTime", () => {
    const TEST_DATA = [
      { time: 1579192881, now: 1579202252201, formattedTime: "2 hours" },
      { time: 1579161292, now: 1579202252284, formattedTime: "11 hours" },
      { time: 1579199525, now: 1579202257193, formattedTime: "45 minutes" }
    ];

    for (const { time, now, formattedTime } of TEST_DATA) {
      expect(formatTime(time, now)).toEqual(formattedTime);
    }
  });
});
