import './App.css';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className="container">
                <section className="sidebar">
                    <Navigation/>
                    <Footer/>
                </section>
                <main className="main">

                </main>
            </div>
        </div>
    );
}

export default App;
