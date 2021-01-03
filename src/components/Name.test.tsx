import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Name from "./Name";

afterEach(() => {
  cleanup();
});

describe("Nameコンポーネントのテスト", () => {
  const name = "tomato";
  it("my name is が描画されていること", () => {
    render(<Name name={name} />);
    expect(screen.getByTestId("name")).toBeTruthy();
  });
  it("buttonをクリックするとsetAgeが動いて数字が増える", () => {
    render(<Name name={name} />);
    userEvent.click(screen.getByRole("button"));
    expect(screen.findAllByText("1")).toBeTruthy();
  });
});
