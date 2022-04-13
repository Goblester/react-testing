import React from 'react';
import S from './App.module.css';
import Quote from "./components/Quote";


function App() {
    return (
        <main className={S.main}>
            {/*Header*/}
            {/*Converter form*/}
            <Quote/>
        </main>
    );
}

export default App;
