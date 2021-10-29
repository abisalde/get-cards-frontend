/* Create A Reducer
 *
 * You need to create a reducer called "appReducer" that accepts two arguments:
 * - First, an array containing information about ice cream
 * - Second, an object with a 'DELETE_FLAVOR' `type` key
 * (i.e., the object contains information to delete the flavor from the state)
 *
 * The action your reducer will receive will look like this:
 * { type: 'DELETE_FLAVOR', flavor: 'Vanilla' }
 *
 * And the initial state will look something like this (as such, refrain
 * from passing in default values for any parameters!):
 * [{ flavor: 'Chocolate', count: 36 }, { flavor: 'Vanilla', count: 210 }];
 */

const appReducer = (state, action) => {
    if (typeof state === 'undefined') {
        return [];
    }
    if (action.type === 'DELETE_FLAVOR') {
        return Object.assign(
            [],
            state.filter((flavor) => flavor.flavor !== action.flavor)
        );
    }

    return state;
};

console.log(
    appReducer(
        [
            { flavor: 'Chocolate', count: 36 },
            { flavor: 'Vanilla', count: 210 },
        ],
        { type: 'DELETE_FLAVOR', flavor: 'Vanilla' }
    )
);
