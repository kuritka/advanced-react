import React from 'react';
import ArticleList from '../ArticleList';
import renderer from 'react-test-renderer';

describe('ArticleList', () => {

    const testProps = {
        articles: {
            a: {id: 'a'},
            b: {id: 'b'}
        },
        articleActions: {
            //jest.fn creates faked object
            lookupAuthor: jest.fn(() => ({}))
        }
    }

    it('renders correctly', () => {
        const tree = renderer.create(
            <ArticleList 
               {...testProps}
            />
        ).toJSON();

        console.log(tree);
        expect(tree.children.length).toBe(2);
        //this creates __snapshots__ subfolder and saves snapshot there. If something change,
        // test framework asks me neither test failed or snapshot should be updated
        expect(tree).toMatchSnapshot();
    });


});