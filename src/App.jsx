import NavBar from "./components/NavBar/NavBar"
import Home from "./Pages/Home/Home"

function App() {
  let navItems=[{url:"/home",content:"Home"},
    {url:"/about",content:"About Us"},
    {url:"/academics",content:"Academics"},
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
      <Home />
    </>
  )
}

export default App
