import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { TextEncoder, TextDecoder } from 'util'; // polyfill for enzyme
import { enableFetchMocks } from 'jest-fetch-mock';

Enzyme.configure({ adapter: new Adapter() });

enableFetchMocks();

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
global.__API__ = 'foobar';
