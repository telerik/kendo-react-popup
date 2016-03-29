import * as React from 'react';

import util from './util';
import subUtil from './sub/util';

import styles from '@telerik/kendo-theme-default/styles/example/main';

export default function Component(props) {
    return (
        <div {...props} className={styles.example}>Kendo UI react component{util()} {subUtil()}</div>
    );
}
