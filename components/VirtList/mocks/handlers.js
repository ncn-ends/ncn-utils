import {rest} from 'msw';
import {resolveGetBuilds} from "./resolvers";

export const handlers = [
    rest.get('/builds', resolveGetBuilds)
]