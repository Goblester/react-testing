import React from 'react';
import S from './App.module.css';
import Quote from "./components/Quote";
import Converter from "./components/Converter";


function App() {
    return (
        <main className={S.main}>
            {/*Header*/}
            <Converter/>
            <Quote/>
        </main>
    );
}

export default App;
