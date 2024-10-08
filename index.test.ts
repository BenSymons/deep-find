import deepFind from "./index";
import { nested, nestedArr } from "./data";

describe('handles a simple object', () => {
  const simpleObject = { id: 1, username: 'oceanblue', fullname: 'Jenna Blue'};
  test(`Given a simple object
        And the passed in username exists in the data
        Then true is returned`, () => {
    expect(deepFind(simpleObject, 'oceanblue')).toBe(true);
  });
  test(`Given a simple object
    And the passed in username does not exist in the data
    Then false is returned`, () => {
      expect(deepFind(simpleObject, 'trolston28')).toBe(false);
    });
  })
  
describe('handles a nested object', () => {
  test(`Given a nested object
        And the passed in username exists in the data
        Then true is returned`, () => {
    expect(deepFind(nested, 'sgrey')).toBe(true);
  });
  test(`Given a nested object
        And the passed in username does not exist
        Then false is returned`, () => {
    expect(deepFind(nested, 'uanderson29')).toBe(false);
  });
  test(`Given a nested object
        And the passed in username exists, but under a differnt key
        Then false is returned`, () => {
    expect(deepFind(nested, 'Lynn Brown')).toBe(false);
  });
});

describe('handles a nested array', () => {
  test(`Given a nested array
        And the passed in username exists in the data
        Then true is returned`, () => {
    expect(deepFind(nestedArr, 'stred01')).toBe(true);
  });
  test(`Given a nested array
        And the passed in username does not exist in the data
        Then false is returned`, () => {
    expect(deepFind(nestedArr, 'rose77')).toBe(false)
  });
  test(`Given a nested array
        And the passed in username exists, but under a differnt key
        Then false is returned`, () => {
    expect(deepFind(nestedArr, 'Manchester')).toBe(false);
  });
});