### Docs
https://ncn-ends.github.io/ncn-utils/

### Info

- Using `Storybook` to develop components in isolation
- Using `jest` for unit tests
- Using `react-hooks-testing-library` to test custom hooks
- Using `swc` for the compiler because it's faster than babel and the default jest compiler
- Using `Typedoc` to generate documentation, but looking for better options

### Future Plans
#### Components
- `<FluidIncrementingNumber />`
  - Incrementally transitions the number, tapering off at the end

### Getting Started: Development

1. Install dependencies at project root
```
npm install
```

2. Initialize MSW
```
npm run msw:build
```

3. Start Storybook server
```
npm run storybook:run
```

4. Run tests
```
npm run test
```