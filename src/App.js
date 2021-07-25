import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Side from './component/Sidebar';
import Detail from './pages/Detail';

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Side />
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/about" component={About} />
                <Route path="/movie/:id" component={Detail} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
