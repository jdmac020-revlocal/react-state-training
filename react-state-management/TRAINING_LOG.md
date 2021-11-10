# Welcome to my training notes

The goal of this document is to capture learnings and more important continuing education questions.

## Next training topics

As of 11/10/2021...

- Continue state management exploration into 3rd party options such as redux and react-query
- Explore API call / management options such as fetch/axios/react-query
- Dig into newer React testing strategies [encouraged by Testing Library](https://testing-library.com/docs/guiding-principles)
  - Using Screen rather than render
  - Using events and state change?
- Explore [Storybook](https://storybook.js.org/docs/react/workflows/unit-testing) as part of testing arsenal

## Learnings 10/10/2021

By general category...

### Testing

The components used in this course did not lend themselves to easy unit testing (or my 
understanding of them and the testing tools is weak). No tests were including in the 
course. Some less-than-successful testing efforts are included in the code.

React hooks that change multiple pieces of state (like the useFetch one in the code) appear 
to be particularly problematic to test.

React hooks that are dynamic (like the useFetch one in the code) are also difficult to test
as their need for a parameter appears to break common testing convention and tools.

At least from where I sit at the end of this day and a half this looks like a sticky problem to be solved.

### React State

State => "app data that may change over time."

EnvVars built into create-react-app

State options
  - URL
    - Current app location/settings
    - Supports deep linking
    - Store in URL, don't duplicate in state
    - React Router is a 3rd party tool
  - Web Storage (browser)
    - Persists between reloads
    - Cookies, localStorage, IndexedDB
    - Tied to a single browser
    - Shouldn't be sensitive
    - Shopping cart, partially complete forms
  - Local State
    - Inside component
      - Used by a single component
  - Lifted State
    - State inside a parent component
    - Passed down via props
    - When related components need the same state
      - Does not duplicate in sibling components/keeps synced
  - Derived state
    - Derive from existing state or props rather than store
    - Can update with each render
    - Length of an array
    - Keeps things in sync
    - Simpler code
  - Refs
    - DOM reference
      - Good for uncontrolled/non-react components or libraries
    - State that isn't displayed
      - If component is mounted
      - Hold timer
      - Previous state value
  - Context
    - Global/broad state or functions
    - Avoids prop drilling
    - Examples…
      - Logged in user
      - Authorization details
      - Theming
  - 3rd Party Library
    - Redux, Mobx, Recoil
    - Remote state
      - React-query
      - Swr
      - Apollo
      - Relay

### JavaScript Data Structures

Structures
  - Primitives (immutable)
      - Boolean
      - String
      - Number
      - BigInt
      - Symbol
  - Collections (mutable)
	  - Objects (properties)
	  - Array (list)
	  - Map (key/value)
	  - Set (unique values)
		  - Weak versions get garbage collected if empty
			
Assign a key to element generated while iterating over an array

### React Hooks

Hooks
  - Only for function components
  - Start with "use"
  - Only can be called at top level
	  - In a consistent order
		  - All hooks called in the same order on each render
	  - Can't be called inside functions, conditions, or loops
		  - Hooks that need to be run conditionally should have the condition inside the hook
			
React Dev Tools
  - Shows hooks in the order they were run
	  - Multiple state properties? Only identified by the order they were run
		
useEffect
  - Runs after each render
  - Or as configured
  - Similar to lifestyle functions in class components
  - First arg is the function to execute when run
  - Second (optional) arg is dependency array, with list of reasons to re-run
	  - Empty array means run once and never again
	  - Include state or props items that, when changed, will cause this useEffect to run

To use async/await…
  - We have to put the async inside the function -- nest an async function instead the hook

TESTING
  - https://github.com/testing-library/react-hooks-testing-library
  - https://kentcdodds.com/blog/how-to-test-custom-react-hooks

Mocking Fetch…
  - https://www.npmjs.com/package/jest-fetch-mock#using-with-create-react-app

### Synthetic Events

React synthetic events "override" existing browser events
  - Can identify because of camel casing ("onClick" instead of "onclick")
	
Useful for ensuring consistent behavior across browsers

Allows React to optimize performance by deciding on event handler binding

### React Component Rendering

4 situations cause a component to render
  - State change
  - Prop change
  - Parent render

Context change (as in, the state management Context API)

### API Calls

Options for calls
  - Inline within the component
	  - Bad consistency & reusability
  - Centralized functions
	  - Import function from another file
	  - Good re-use/consistency
  - Custom hook (demo'd in code)
  - 3rd party library

### Error Boundary

Wraps the App component in the Index file

Does not catch errors from
  - Event handlers
  - Async code
  - Server side rendering
  - Errors thrown from inside the boundary component itself

[Standard error boundary file](https://reactjs.org/docs/error-boundaries.html)

### Routing

Using react-router-dom, wrap the App component in Index.js and define routes in app or a separate file

Routes can be used to define variables in the URL that can be used by their target component (example in code)

Link component
  - Overrides the click handler to navigate without reloading page
NavLink component
  - Allows setting an active style (to tell which link one is currently on, etc)