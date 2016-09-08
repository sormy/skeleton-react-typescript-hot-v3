import * as React from 'react';

export function Layout(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      {props.children}
    </div>
  )
}
