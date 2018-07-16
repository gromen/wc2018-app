import React from 'react';

import GroupStageRowDetails from './GroupStageRowDetails/GroupStageRowDetails';

const GroupStageRow = (props) => props.teams.map((team, index) => {
    return <GroupStageRowDetails
            key={index + 1}
            imgPrefix={team.countryPrefix}
            name={team.name}
            played={team.played}
            win={team.win}
            draw={team.draw}
            lost={team.lost}
            goalfor={team.goalfor}
            goalagainst={team.goalagainst}
            diffgoal={team.diffgoal}
            pts={team.pts}
            />
});


export default GroupStageRow;