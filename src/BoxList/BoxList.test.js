import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

//Smoke test
it("renders without crashing", function () {
    render(<BoxList />)
});

//Snapshot test
it("matches snapshot", function () {
    const { asFragment } = render(<BoxList />)
    expect(asFragment()).toMatchSnapshot();
});

test('adds and removes boxes', () => {
    const { container, getByLabelText, getByText } = render(<BoxList />);

    // Add a box
    fireEvent.change(getByLabelText('Color:'), { target: { value: 'red' } });
    fireEvent.change(getByLabelText('Width:'), { target: { value: '200' } });
    fireEvent.change(getByLabelText('Height:'), { target: { value: '200' } });
    fireEvent.click(getByText('Submit'));

    // Check if the box is added
    const addedBox = container.querySelector('.Box');
    expect(addedBox).toBeInTheDocument();

    // Remove the added box
    fireEvent.click(addedBox);

    // Check if the box is removed
    expect(addedBox).not.toBeInTheDocument();
});