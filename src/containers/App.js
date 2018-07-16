import React, { Component } from 'react';

import GroupStage from './../components/GroupStage/GroupStage';
import GroupFixtures from './../components/GroupFixtures/GroupFixtures';

class App extends Component {
  state = {
    teams: [
      { name: 'Polska', countryPrefix: 'pol', played: 4, win: 1, draw: 0, lost: 2, goalfor: 3, goalagainst: 1, diffgoal: 3, pts: 9},
      { name: 'Niemcy', countryPrefix: 'ger', played: 4, win: 1, draw: 0, lost: 2, goalfor: 3, goalagainst: 1, diffgoal: 2, pts: 6},
      { name: 'Brazylia', countryPrefix: 'bra', played: 4, win: 1, draw: 0, lost: 2, goalfor: 3, goalagainst: 1, diffgoal: 1, pts: 3},
      { name: 'Hiszpania', countryPrefix: 'esp', played: 4, win: 1, draw: 0, lost: 2, goalfor: 3, goalagainst: 1, diffgoal: 4, pts: 0},
    ]
  }

  render() {
    return (
      <div className="App">
        <GroupStage
          teams={this.state.teams}/>

        <GroupFixtures/>

      </div>
    );
  }
}

export default App;
