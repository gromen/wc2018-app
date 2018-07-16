import React from 'react';

import styles from './../fixtures.scss';

const GroupFixtures = (props) => (
    <div className={styles.fixtures}>
        <div className={styles.fixture}>
            <div className={styles.home}>
                <span>Polska</span>
                <img className={styles.img} src="//api.fifa.com/api/v1/picture/flags-fwc2018-4/pol" alt="pol" />
            </div>
            <div className={styles.score}>
                <div className="match__score--home"><input type="number" min="0"/></div>
                <div className="match__score--away"><input type="number"min="0"/></div>
            </div>
            <div className={styles.away}>
                <img className={styles.img} src="//api.fifa.com/api/v1/picture/flags-fwc2018-4/ger" alt="ger" />
                <span>Niemcy</span>
            </div>
        </div>

        <div className={styles.fixture}>
            <div className={styles.home}>
                <span>Polska</span>
                <img className={styles.img} src="//api.fifa.com/api/v1/picture/flags-fwc2018-4/bra" alt="bra" />
            </div>
            <div className={styles.score}>
                <div className="match__score--home">0</div>
                <div className="match__score--away">1</div>
            </div>
            <div className={styles.away}>
                <img className={styles.img} src="//api.fifa.com/api/v1/picture/flags-fwc2018-4/esp" alt="esp" />
                <span>Niemcy</span>
            </div>
        </div>

        <div className={styles.fixture}>
            <div className={styles.home}>
                <span>Polska</span>
                <img className={styles.img} src="//api.fifa.com/api/v1/picture/flags-fwc2018-4/pol" alt="pol" />
            </div>
            <div className={styles.score}>
                <div className="match__score--home">0</div>
                <div className="match__score--away">1</div>
            </div>
            <div className={styles.away}>
                <img className={styles.img} src="//api.fifa.com/api/v1/picture/flags-fwc2018-4/bra" alt="bra" />
                <span>Niemcy</span>
            </div>
        </div>

        <div className={styles.fixture}>
            <div className={styles.home}>
                <span>Polska</span>
                <img className={styles.img} src="//api.fifa.com/api/v1/picture/flags-fwc2018-4/esp" alt="esp" />
            </div>
            <div className={styles.score}>
                <div className="match__score--home">0</div>
                <div className="match__score--away">1</div>
            </div>
            <div className={styles.away}>
                <img className={styles.img} src="//api.fifa.com/api/v1/picture/flags-fwc2018-4/ger" alt="ger" />
                <span>Niemcy</span>
            </div>
        </div>

        <div className={styles.fixture}>
            <div className={styles.home}>
                <span>Polska</span>
                <img className={styles.img} src="//api.fifa.com/api/v1/picture/flags-fwc2018-4/pol" alt="pol" />
            </div>
            <div className={styles.score}>
                <div className="match__score--home">0</div>
                <div className="match__score--away">1</div>
            </div>
            <div className={styles.away}>
                <img className={styles.img} src="//api.fifa.com/api/v1/picture/flags-fwc2018-4/esp" alt="esp" />
                <span>Niemcy</span>
            </div>
        </div>

        <div className={styles.fixture}>
            <div className={styles.home}>
                <span>Polska</span>
                <img className={styles.img} src="//api.fifa.com/api/v1/picture/flags-fwc2018-4/ger" alt="ger" />
            </div>
            <div className={styles.score}>
                <div className="match__score--home">0</div>
                <div className="match__score--away">1</div>
            </div>
            <div className={styles.away}>
                <img className={styles.img} src="//api.fifa.com/api/v1/picture/flags-fwc2018-4/bra" alt="bra" />
                <span>Niemcy</span>
            </div>
        </div>

    </div>
);

export default GroupFixtures;