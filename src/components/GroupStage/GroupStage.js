import React from 'react';
import styles from './../../index.scss';

import GroupStageHeader from './../GroupStage/GroupStageHeader/GroupStageHeader';
import GroupStageRow from './../GroupStage/GroupStageRow/GroupStageRow';

const groupStage = (props) => (
    <table className={styles.table}>
        <GroupStageHeader />
        <tbody>
            <GroupStageRow
                teams={props.teams}/>
        </tbody>
    </table>
);

export default groupStage;