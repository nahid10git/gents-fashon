import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Main from './Layouts/Main';

function App() {
  const route = createBrowserRouter([
    {
      path :'/',
      element: <Main></Main>,
      children:[
        {
          loader: () => fetch("tshart.json"),
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/orders',
          element: <Orders></Orders>
        }
      ]
      
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
      
    </div>
  );
}

export default App;
