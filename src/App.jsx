import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider
} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import JobPage, { jobLoader } from './pages/JobPage'
import NotFoundPage from './pages/NotFoundPage'
import AddJobPage from './pages/AddJobPage'

const App = () => {
  // add job
  const addJob = async (newJob) => {
    await fetch('/api/jobs', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })
  }

  // delete job
  const deleteJob = async (id) => {
    await fetch(`/api/jobs/${id}`, {
      method:'DELETE',
    })
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path='/job/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  )

  return <RouterProvider router={router}/>
}

export default App