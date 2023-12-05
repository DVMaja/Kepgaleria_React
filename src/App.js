import './App.css';
import Kep from './komponensek/Kep';
import { kepLista } from './komponensek/KepLista';
import { useState } from 'react';//speciális függvények amelyekkel az állapotokat tudjuk kezelnoi
/**Spec react függvéányek, melyelkkel a   */

function App() {
  /**A react komponenseknek álapotaik vannak
   * ezeket statek-nben tárolják
   */
  const [aktKep, setAktKep] = useState(0);
  /**Az akt képnek beállítottuk az alap értékét 0-ra */
  /**A szülő komponens azon függvénye
   * amely megkapja a gyerektől az értéket */
  function kattintasKezeles(index) {
    /**Itt lesz egy paramétere és ezen keresztűl fogja megkapni az információt */
    console.log(index);
    setAktKep(index);

  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Képgaléria</h1>
      </header>

      <section>
        <Kep src={kepLista[aktKep]} index={aktKep}/>
      </section>

      <article>
        {kepLista.map((elem, index) => {
          return (<Kep src={elem} key={index} index={index}
            kattintasKezeles={kattintasKezeles} />)
          /**Átadjuk a methodust a propson keresztűl */
        })

        }

      </article>

      <footer>Dreilinger Vanessza Maja</footer>
    </div>
  );
}

export default App;
