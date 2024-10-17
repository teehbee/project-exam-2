import { Header, Footer } from "../components/navigation";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
    <Header/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default MainLayout;