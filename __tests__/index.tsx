import IndexPage from "../src/pages/index"
import React from "react"
import renderer from "react-test-renderer"

describe("Header", () => {
    it("renders correctly", () => {
        const tree = renderer.create(<IndexPage />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
