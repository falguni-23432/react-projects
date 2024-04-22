import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import Store from './Store/Store'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import { AuthLayout } from './Components/Index';
import Signup from './Pages/Signup'
import AllPost from './Pages/AllPost';
import AddPost from './Pages/AddPost';
import EditPost from './Pages/EditPost';
import Post from './Pages/Post';
import Login from './Components/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element:(
          <AuthLayout authentication={false}>
            <Login/>
            </AuthLayout>
        )
      },
      {
        path: "/signup",
        element:(
          <AuthLayout authentication={false}>
            
            <Signup/>
            </AuthLayout>
        )
      },
      {
        path: "/all-posts",
        element: (
            <AuthLayout authentication>
                {" "}
                <AllPost/>
            </AuthLayout>
        ),
    },
    {
        path: "/add-post",
        element: (
            <AuthLayout authentication>
                {" "}
                <AddPost/>
            </AuthLayout>
        ),
    },
    {
        path: "/edit-post/:slug",
        element: (
            <AuthLayout authentication>
                {" "}
                <EditPost/>
            </AuthLayout>
        ),
    },
    {
        path: "/post/:slug",
        element: <Post/>,
    },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store ={Store} >
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

