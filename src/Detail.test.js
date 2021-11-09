import React from 'react';
import { render } from '@testing-library/react';
import Detail from './Detail';
import { Route } from 'react-router';

describe("Trying to identify if the hooks can be effectively tested via component", () => {

    fetch.mockResponseOnce(JSON.stringify(
        {
            "products": [{
            "id": 1,
            "category": "shoes",
            "image": "shoe1.jpg",
            "name": "Hiker",
            "price": 94.95,
            "skus": [
                { "sku": "17", "size": 7 },
                { "sku": "18", "size": 8 }
            ],
            "description": "This rugged boot will get you up the mountain safely."
            }]
        }
    ));

    it("renders without an explosion", () => {
        const props = {
            
        };
        const { container } = render(
            <Route path="/:category/:id">
                <Detail {...props} />
            </Route>,
            {
                route: '/shoes/1'
            }
        );
        console.log(container)
        const header = container.querySelector("<h1></h1>");
        console.log(header)
        expect(header).not.toBe(null);
    });
});