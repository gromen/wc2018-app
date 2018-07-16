import React from 'react';

const GroupStageHeader = () => (
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
);

export default GroupStageHeader;