import './App.css';
import Map from "./Map.tsx";
import {Restaurant} from "./types/Restaurant.ts";
import * as jsonData from './data/michelin-3-star.json';

function App() {

    const restaurants : Restaurant[] = jsonData.data as Restaurant[];

    return (
        <div className="App">
            <Map restaurants={restaurants}/>
        </div>
    );
}

export default App;