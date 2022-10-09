import { describe, expect, test, beforeEach } from "@jest/globals";
import Game from "./BowlingClass";

describe("Bowling Class", () => {
  let g: Game;
  beforeEach(() => {
    g = new Game();
  });

  function rollMany(n: number, pins: number) {
    for (let i = 0; i < n; i++) {
      g.roll(pins);
    }
  }

  function rollSpare() {
    g.roll(5);
    g.roll(5);
  }

  function rollStrike() {
    g.roll(10);
  }

  test("testGutterGame", () => {
    rollMany(20, 0);
    expect(g.score()).toBe(0);
  });

  test("testAllOnes", () => {
    rollMany(20, 1);
    expect(g.score()).toBe(20);
  });

  test("testOneSpare", () => {
    rollSpare(); // spare
    g.roll(3);
    rollMany(17, 0);
    expect(g.score()).toBe(16);
  });
  test("testOneStrike", () => {
    rollStrike(); // strike
    g.roll(3);
    g.roll(4);
    rollMany(16, 0);
    expect(g.score()).toBe(24);
  });

  test("testPerfektGame", () => {
    rollMany(12, 10);
    expect(g.score()).toBe(300);
  });
});
