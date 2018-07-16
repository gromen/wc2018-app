import React, { Component } from 'react';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <table className="table">
          <caption className="table__caption">
            <p className="table__caption__title">Group A</p>
          </caption>
          <thead>
            <tr>
              <th className="table__teamname"></th>
              <th className="table__matchplayed"><span className="th-text"><abbr title="Played">MP</abbr></span></th>
              <th className="table__win"><span className="th-text"><abbr title="Won">W</abbr></span></th>
              <th className="table__draw"><span className="th-text"><abbr title="Draw">D</abbr></span></th>
              <th className="table__lost"><span className="th-text"><abbr title="Lost">L</abbr></span></th>
              <th className="table__goalfor"><span className="th-text"><abbr title="Goals for">GF</abbr></span></th>
              <th className="table__goalagainst"><span className="th-text"><abbr title="Goals Against">GA</abbr></span></th>
              <th className="table__diffgoal"><span className="th-text"><abbr title="Goal Difference">+/-</abbr></span></th>
              <th className="table__pts"><span className="th-text"><abbr title="Points">Pts</abbr></span></th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="table__teamname">

                <div className="teamname__item">
                  <img src="//api.fifa.com/api/v1/picture/flags-fwc2018-4/pol" alt="pol" title="POL" className="pol"/>

                </div>
                <div className="teamname__item">
                  Polska
                </div>


              </td>
              <td className="table__matchplayed"><span className="text">3</span></td>
              <td className="table__win"><span className="text">3</span></td>
              <td className="table__draw"><span className="text">0</span></td>
              <td className="table__lost"><span className="text">0</span></td>
              <td className="table__goalfor"><span className="text">5</span></td>
              <td className="table__goalagainst"><span className="text">0</span></td>
              <td className="table__diffgoal"><span className="text">5</span></td>
              <td className="table__pts"><span className="text">9</span></td>

            </tr>

            <tr>
              <td className="table__teamname">

                <div className="teamname__item">
                  <img src="https://api.fifa.com/api/v1/picture/flags-fwc2018-4/bra" alt="bra" title="BRA" className="bra"/>
                </div>

                <span className="teamname__item">
                  Brazylia
                </span>


              </td>
              <td className="table__matchplayed"><span className="text">3</span></td>
              <td className="table__win"><span className="text">2</span></td>
              <td className="table__draw"><span className="text">0</span></td>
              <td className="table__lost"><span className="text">1</span></td>
              <td className="table__goalfor"><span className="text">8</span></td>
              <td className="table__goalagainst"><span className="text">4</span></td>
              <td className="table__diffgoal"><span className="text">4</span></td>
              <td className="table__pts"><span className="text">6</span></td>

            </tr>
            <tr>
              <td className="table__teamname">

                <div className="teamname__item">
                  <img src="https://api.fifa.com/api/v1/picture/flags-fwc2018-4/esp" alt="esp" title="ESP" className="esp"/>
                </div>

                <span className="teamname__item">
                  Hiszpania
                </span>


              </td>

              <td className="table__matchplayed"><span className="text">3</span></td>
              <td className="table__win"><span className="text">1</span></td>
              <td className="table__draw"><span className="text">0</span></td>
              <td className="table__lost"><span className="text">2</span></td>
              <td className="table__goalfor"><span className="text">2</span></td>
              <td className="table__goalagainst"><span className="text">7</span></td>
              <td className="table__diffgoal"><span className="text">-5</span></td>
              <td className="table__pts"><span className="text">3</span></td>

            </tr>
            <tr data-team-id="43855">
              <td className="table__teamname">

                <div className="teamname__item">
                  <img src="https://api.fifa.com/api/v1/picture/flags-fwc2018-4/ger" alt="ger" title="GER" className="ger"/>

                </div>
                <div className="teamname__item">
                  Niemcy
                </div>


              </td>
              <td className="table__matchplayed"><span className="text">3</span></td>
              <td className="table__win"><span className="text">0</span></td>
              <td className="table__draw"><span className="text">0</span></td>
              <td className="table__lost"><span className="text">3</span></td>
              <td className="table__goalfor"><span className="text">2</span></td>
              <td className="table__goalagainst"><span className="text">6</span></td>
              <td className="table__diffgoal"><span className="text">-4</span></td>
              <td className="table__pts"><span className="text">0</span></td>

            </tr>
          </tbody>
        </table>

      </div>
    );
  }
}

export default App;
