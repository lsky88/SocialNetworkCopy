// Imports ========================
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Profile from "./components/ProfilePage/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

// App ===========================
const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className="container">
                    <section className="sidebar">
                        <Navigation/>
                        <Footer/>
                    </section>
                    <main className="main">
                        <Route path="/dialogs" component={Dialogs}/>
                        <Route path="/profile" component={Profile}/>
                    </main>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
