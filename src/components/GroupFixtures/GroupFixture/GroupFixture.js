import React from 'react';

import styles from './../fixtures.scss';

const GroupFixture = (props) => {
    const { teamAway, teamHome, prefixHome, prefixAway, changeHome, changeAway} = props;

    return  <div className={styles.fixture}>
                <div className={styles.home}>
                    <span>{teamHome}</span>
                    <img className={styles.img} src={'//api.fifa.com/api/v1/picture/flags-fwc2018-4/' + prefixHome} alt={prefixHome} />
                </div>
                <div className={styles.score}>
                <div className="match__score--home"><input type="number" onChange={changeHome} min="0"  /></div>
                    <div className="match__score--away"><input type="number" onChange={changeAway} min="0" /></div>
                </div>
                <div className={styles.away}>
                    <img className={styles.img} src={'//api.fifa.com/api/v1/picture/flags-fwc2018-4/' + prefixAway} alt={prefixAway} />
                    <span>{teamAway}</span>
                </div>
            </div>
};

export default GroupFixture;