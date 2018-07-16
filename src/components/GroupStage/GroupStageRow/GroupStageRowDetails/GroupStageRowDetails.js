import React from 'react';

import styles from './../../../../index.scss';

const GroupStageRowDetails = (props) => {
    const { imgPrefix, name, played, win, draw, lost, goalfor, goalagainst, diffgoal, pts} = props;

    return (
        <tr>
            <td className={styles.table__teamname}>
                <div className="teamname__item">
                    <img src={'//api.fifa.com/api/v1/picture/flags-fwc2018-4/' + imgPrefix} alt={imgPrefix} title={imgPrefix} className="pol"/>
                </div>

                <div className="teamname__item">
                    {name}
                </div>
            </td>

            <td className="table__matchplayed">{played}</td>
            <td className="table__win">{win}</td>
            <td className="table__draw">{draw}</td>
            <td className="table__lost">{lost}</td>
            <td className="table__goalfor">{goalfor}</td>
            <td className="table__goalagainst">{goalagainst}</td>
            <td className="table__diffgoal">{diffgoal}</td>
            <td className="table__pts">{pts}</td>

        </tr>

    )
};

export default GroupStageRowDetails;