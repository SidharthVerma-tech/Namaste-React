**Namaste React**
# CODE SLOW
# Parcel
- Dev Build
- Local Server
- Hot module Replacement
- Image Optimazation
- Bundling
- Error Handling
# App Layot
- Header
    - Logo
    - Search
- Main
    - Restaurant Container

# Import Export
- Named Import {}
- Normal Import without {}
- export default 


# React Hooks
- Normal JS utility functions
- useState()
- useEffect()
    - First body is rendered
    - Then useEffect callback function will be called
- Whenever state variable updates , react re render its components

# IMPORTANT
- Whenever local state variable updates , react triggers a reconciliation cycle (re-renders) the whole componet

# React Component Life Cycle
- # MOUNTING
   - Parent Contsructor called
   - Parent Render Called
   - Child Constructor Called
   - set The User State
   - Child Render Called (With Dummy Data)
   - DidMount Called
   - API fetched (Data gets Updated)
 # UPDATE
   - Child Render Called (With updated Data)
   - Component Did update

# HIGHER ORDER COMPONENT
- Input => Functional Component => Enhanced Functional Component 

- A controlled component is the component whose value is controlled by react state. 
- We want parent to control the show items or control the state this is called controlled componennts

# PROPS DRILLING
- REACT CONTEXT IS A FEATURE WHICH ALLOWS US TO USE REACT COMPONENT AT ANY LEVEL, WITHOUT PASSING PROPS
- MANUALLY AT EVERY LEVEL


# REDUX
 - Install @reduxjs/toolkit and react-redux
 - Build our store
 - Connect our store to our app
 - Create Cart Slice
 - Dispatch an action
 - Read the data using selector
 - Slice Contai reducers
 - Our whole store contain one big reducer which contains small reducers
 
   