# React Router DOM v6 Nested Routes Not Rendering

This repository demonstrates a common issue encountered when working with nested routes in React Router DOM v6.  The problem involves nested routes failing to render, even though the parent route is active.  The solution provided fixes this rendering issue by implementing the correct usage of `useParams` and the `Outlet` component.

## Problem

In the `bug.js` file, you'll find a React component using nested routes.  Despite the parent route being active, the nested route components will not render as expected. This is a frequent issue related to improper nested route configuration in React Router v6.

## Solution

The `bugSolution.js` file showcases a corrected implementation.  It uses `useParams` to access the dynamic segments of the path, and the `Outlet` component to render the nested routes.  This change correctly renders the nested route components.
