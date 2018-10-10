import {Home} from '../navigator/home/Home';
import {Test} from '../navigator/test/Test'
export const homeNav = (state, action) => {
    const nextState = Home.router.getStateForAction(action, state);
    return nextState || state;
};
export const testNav = (state, action) => {
    const nextState = Test.router.getStateForAction(action, state);
    return nextState || state;
};