import * as React from 'react';
import styles from './Admonition.module.scss';
import { IAdmonitionProps } from './IAdmonitionProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Icon } from '@fluentui/react/lib/Icon';


export default class Admonition extends React.Component<IAdmonitionProps, {}> {
  public render(): React.ReactElement<IAdmonitionProps> {
    return (
      <div className={styles.admonition}>
        <Icon className={styles.alertIcon} iconName={this.props.icon} />
        <div className={styles.alertTitle}>{this.props.title}</div>
        <div className={styles.alertBody} dangerouslySetInnerHTML={{ __html: this.props.description }}></div>
      </div>
    );
  }
}
