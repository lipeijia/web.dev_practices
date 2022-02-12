import loadable from '@loadable/component';

/* 
open up Network tab in dev tools to see code splitting
*/

const AnotherComponent = loadable(() => import('./CodeSplitting'), {
  fallback: <div>Loading...</div>,
});

function LoadableComponent() {
  return <AnotherComponent />;
}

export default LoadableComponent;

// https://loadable-components.com/docs/getting-started/
