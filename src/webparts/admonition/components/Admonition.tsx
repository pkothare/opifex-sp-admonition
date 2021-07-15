import * as React from 'react';
import styles from './Admonition.module.scss';
import { IAdmonitionProps } from './IAdmonitionProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Icon } from '@fluentui/react/lib/Icon';
import { RichText } from "@pnp/spfx-controls-react/lib/RichText";


export default class Admonition extends React.Component<IAdmonitionProps, {}> {

  public render(): React.ReactElement<IAdmonitionProps> {
    return (
      <div className={styles.admonition}>
        <Icon className={styles.alertIcon} iconName={this.props.icon} />
        <div className={styles.alertTitle}>{this.props.title}</div>
        <RichText className={styles.alertBody} value={this.props.description} onChange={(text) => this.props.onTextChange(text)} />
      </div>
    );
  }
}
