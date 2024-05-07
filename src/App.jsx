import Header from "./home/Head"
import Body from "./home/Body"
import Footer from "./home/Foot"
import Layout from "./Layout"

export default function App() {
  return (
    <>
      <Layout>
        <Header/>
        <Body/>
        <Footer/>
      </Layout>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 top-[40rem] left-[-35px] absolute fill-orange-600">
        <circle cx="50" cy="50" r="50" />
        </svg>
    </>
  )
}
