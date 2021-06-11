# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
    Context API makes it easier to share data across components without prop drilling, which is especially helpful for scalablilty and if you have deeply nested components. 

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Store is known as a single source of truth because it is where all the state is managed and it is immutable. To update state, reducers take in the current state and an action and return a copy of a new state. The action is what tells the reducer what to do to transition the state.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
    redux-thunk allows us to make asynchronous API calls in our action creators. redux-thunk gives our action-creators access to dispatch and intercepts the returned data and if it's an action it will pass it to the reducer, if it's a function (thunk) it will call it using the dispatch function. 

4. What is your favorite state management system you've learned and this sprint? Please explain why!
    My favorite state management system I learned this sprint is Redux. I like having the single source of truth for state, it makes sharing props easier, and the immutability helps keep changes to state predictable.