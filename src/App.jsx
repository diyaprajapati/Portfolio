import Header from "./home/Head"
import Body from "./home/Body"
import Footer from "./home/Foot"

export default function App() {
  return (
    <>
    <div className="p-4 flex flex-col gap-12 font-inter">
        <Header/>
        <Body/>
        <Footer/>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 right-200">
        <circle cx="50" cy="50" r="50" />
        </svg>
      </div>
    </>
  )
}
