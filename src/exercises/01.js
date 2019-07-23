// useState: counter

import React from 'react'

function Counter() {
  // 🐨 use React.useState here
  const [count, setCount] = React.useState(0)
  // 🐨 create an increment function that calls the state updater you get from
  //    React.useState to increment the count
  const increment = () => setCount(count + 1) // or: state.count = state.count +1
  // 🐨 render the count you get from React.useState inside the button and use
  //    your increment function as the onClick handler.
  return <button onClick={increment}>{count}</button>
}

//
// ### 💯 accept a step and initialCount
//
// Make the counter accept props called `step` and `initialCount` and make the
// counter increment by the given step and start at the given count.
// 
// function Counter({initialCount = 0, step = 1}) {
//   const [count, setCount] = React.useState(initialCount)
//   const increment = () => {
//     setCount(currentCount => currentCount + step)}
//   return <button onClick={increment}>{count}</button>
// }


////////////////////////////////////////////////////////////////////
//                                                                //
//                 Don't make changes below here.                 //
// But do look at it to see how your code is intended to be used. //
//                                                                //
////////////////////////////////////////////////////////////////////

function Usage() {
  return <Counter />
}
Usage.title = 'useState: counter'

export default Usage
