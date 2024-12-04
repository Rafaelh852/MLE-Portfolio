import "./output.css"
import TopBar from "./components/topbar"
import Hero from "./components/hero"
import About from "./components/about"
import Footer from "./components/footer"

function App(){

    return (   
        <>
        <TopBar/>
        <div class="relative isolate px-6 pt-14 lg:px-8">
            <Hero/>
            <About/>
            <Footer/>
        </div>
        </>
        
    
)
}

export default App