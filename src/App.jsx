import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import About from "./Pages/About"
import Academy from "./Pages/Academy"
import Home from "./Pages/Home"
import Footer from "./components/Footer/Footer"
import AcademyPart from "./Pages/AcademyPart/AcademyPart"

function App() {
  let navItems=[{url:"/",content:"Home"},
    {url:"/about",content:"About Us"},
    {url:"/academy",content:"Academics"},
    {url:"/admissions",content:"Admessions"},
    {url:"/studentlife",content:"Student Life"},
    {url:"/contact",content:"Contact"}
  ]
  return (
    <>
      <NavBar image={{source:"/assets/img/icons/Logo.svg",
        alternative:"Logo icon"
      }}
      title="Little Learners"
      items={navItems}
      />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/academy" element={<Academy/>}>
          <Route path=":name" element={<AcademyPart/>}/>
        </Route>
      </Routes>
      <Footer/>

    </>
  )
}

export default App
