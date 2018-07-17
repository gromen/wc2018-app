import React from 'react';

import GroupFixture from './GroupFixture/GroupFixture';

const GroupFixtures = (props) => props.fixtures.map((fixture, index) => {
    return  <GroupFixture
                key={index + 1}
                teamHome={fixture.teamHome}
                prefixHome={fixture.prefixHome}
                teamAway={fixture.teamAway}
                prefixAway={fixture.prefixAway}
                scoreAway={fixture.scoreAway}
                scoreHome={fixture.scoreHome}
                />

});

export default GroupFixtures;