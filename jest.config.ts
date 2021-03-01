import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  globals: {
      "ts-jest": {
        "tsconfig": "tsconfig.jest.json"
      }
    },
    transform: {
      ".(ts|tsx)": "ts-jest"
    },
    testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
    moduleFileExtensions: [
      "ts",
      "tsx",
      "js",
      "json"
    ]
};
export default config;
