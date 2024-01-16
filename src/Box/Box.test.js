import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Box from "./Box";

//Smoke test
it("renders without crashing", function () {
    const styles = {
        backgroundColor: 'red',
        width: '200px',
        height: '200px'
    }
    render(<Box
                key={1}
                id={1}
                style={styles}
                className="Box" />
            )
});

//Snapshot test
it("matches snapshot", function () {
    const { asFragment } = render(<Box />)
    expect(asFragment()).toMatchSnapshot();
});