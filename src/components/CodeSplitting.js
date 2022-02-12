/* 
  Open up the Network tab in your browser's developer tools.
  and you'll see lodash.sortby load when click button
*/

function CodeSplitting() {
  const handleClick = () => {
    import(/* webpackChunkName: "lodash.sortby" */ 'lodash.sortby')
      .then((module) => module.default)
      .then((sortBy) => {
        console.log(sortBy([2, 1000, 99, -3, 444]));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <button onClick={handleClick}>click</button>
    </>
  );
}

export default CodeSplitting;

// https://web.dev/codelab-code-splitting/
