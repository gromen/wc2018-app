import React, { Component } from 'react';

import GroupStage from './../components/GroupStage/GroupStage';
import GroupFixtures from './../components/GroupFixtures/GroupFixtures';

class App extends Component {
    state = {
        teams: [
            { name: 'Polska', prefix: 'pol', played: 4, win: 1, draw: 0, lost: 2, goalfor: 3, goalagainst: 1, diffgoal: 3, pts: 9 },
            { name: 'Niemcy', prefix: 'ger', played: 4, win: 1, draw: 0, lost: 2, goalfor: 3, goalagainst: 1, diffgoal: 2, pts: 6 },
            { name: 'Brazylia', prefix: 'bra', played: 4, win: 1, draw: 0, lost: 2, goalfor: 3, goalagainst: 1, diffgoal: 1, pts: 3 },
            { name: 'Hiszpania', prefix: 'esp', played: 4, win: 1, draw: 0, lost: 2, goalfor: 3, goalagainst: 1, diffgoal: 4, pts: 0 },
        ],
        fixtures: [
            { teamHome: 'Polska', prefixHome: 'pol', teamAway: 'Niemcy', prefixAway: 'ger', scoreHome: null, scoreAway: null },
            { teamHome: 'Brazylia', prefixHome: 'bra', teamAway: 'Hiszpania', prefixAway: 'esp', scoreHome: null, scoreAway: null },
            { teamHome: 'Polska', prefixHome: 'pol', teamAway: 'Brazylia', prefixAway: 'bra', scoreHome: null, scoreAway: null },
            { teamHome: 'Hiszpania', prefixHome: 'esp', teamAway: 'Niemcy', prefixAway: 'ger', scoreHome: null, scoreAway: null },
            { teamHome: 'Polska', prefixHome: 'pol', teamAway: 'Hiszpania', prefixAway: 'esp', scoreHome: null, scoreAway: null },
            { teamHome: 'Niemcy', prefixHome: 'ger', teamAway: 'Brazylia', prefixAway: 'bra', scoreHome: null, scoreAway: null }
        ]
    }

    render () {
        return (
            <div className="App">
                <GroupStage
                    teams={this.state.teams} />

                <GroupFixtures
                    fixtures={this.state.fixtures}/>

            </div>
        );
    }
}

export default App;
