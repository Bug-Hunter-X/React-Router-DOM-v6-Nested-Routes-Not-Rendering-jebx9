```javascript
import { BrowserRouter, Routes, Route, useParams, Outlet } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/parent/:id" element={<Parent />} />
        {/* ...other routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}

function Parent() {
  let { id } = useParams();
  return (
    <div>
      <h2>Parent {id}</h2>
      <Outlet />
    </div>
  );
}

function Child() {
  return <div>Child</div>;
}

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/parent/:id" element={<Parent/>}>
          <Route path=":id/child" element={<Child/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
```