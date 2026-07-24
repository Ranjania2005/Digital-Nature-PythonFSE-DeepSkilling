# Hands-On 10 Task 3 - Vue Pinia Advanced Patterns


## Pinia Data Flow

Component

↓

Pinia Action

↓

API Call

↓

Update Store State

↓

Component Reactivity Update



## Framework State Management Comparison


| Framework | State Management | Features |
|----------|------------------|----------|
| React | Redux Toolkit | Uses slices, reducers, actions and middleware. More boilerplate but highly scalable. |
| Angular | NgRx | Follows Redux architecture with Actions, Reducers, Effects and Selectors. Strong structure for large applications. |
| Vue | Pinia | Lightweight and simple store solution with less boilerplate and better Vue integration. |



## React + Redux

- Uses createSlice and createAsyncThunk.
- Requires Provider setup.
- Suitable for large applications.
- More configuration required.



## Angular + NgRx

- Uses Actions, Reducers, Effects and Selectors.
- Effects handle API calls.
- Strong typing with TypeScript.
- More concepts to learn.



## Vue + Pinia

- Built specifically for Vue.
- Simple store creation.
- Supports reactive state directly.
- Less boilerplate compared to Redux and NgRx.



## Implementation Completed

- Async enrollment action
- API integration
- storeToRefs usage
- Reset store state using $reset()
- Global error handling