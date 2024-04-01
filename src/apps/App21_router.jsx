import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from '../pages/Home'

const router = createBrowserRouter({
  path : '/',
  element: <Root />,
  children:[
    {index: true, element: <Home />},
    {path: '/board', element: <Board />},
  ]
});

function App() {
  
  return (
   <RouterProvider router={router} />

  );
}

export default App;