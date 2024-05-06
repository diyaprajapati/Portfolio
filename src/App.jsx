import Header from "./home/Head"
import Body from "./home/Body"
import Footer from "./home/Foot"

export default function App() {
  return (
    <>
    <div className="p-4 flex flex-col gap-16  font-inter bg-slate-200">
        <Header/>
        <Body/>
        <Footer/>
        
      </div>
    </>
  )
}
