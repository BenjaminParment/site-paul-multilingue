import IndexPage from '../src/pages'
import React from "react"
import renderer from "react-test-renderer"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<IndexPage />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})