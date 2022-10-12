import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import CourseDetail from './components/CourseDetail/CourseDetail';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: '/courses/:coursesId',
          loader: async ({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.coursesId}`)
          },
          element: <CourseDetail></CourseDetail>
        },
        {
          path: '/statistics',
          
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    },
    {
      path: '*',
      element: <h4 className='text-center mt-5'> <span className='fs-1 fw-bold'>404</span><br />Oops! This route is not avilable</h4>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
