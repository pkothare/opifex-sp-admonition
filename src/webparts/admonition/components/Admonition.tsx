import * as React from 'react';
import styles from './Admonition.module.scss';
import { IAdmonitionProps } from './IAdmonitionProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Icon } from '@fluentui/react/lib/Icon';


export default class Admonition extends React.Component<IAdmonitionProps, {}> {
  public render(): React.ReactElement<IAdmonitionProps> {
    return (
      <div className={styles.admonition}>
        <Icon className={styles.alertIcon} iconName="Info" />
        <div className={styles.alertTitle}>Important</div>
        <div className={styles.alertBody}>Trusting the developer certificate is required. This is a one-time process and is only required when you run your first SharePoint Framework project on a new workstation. You don't need to do this for every SharePoint Framework project.<br />If you didn't trust the dev cert, follow the steps outlined on this page: <a href="../../set-up-your-development-environment#trusting-the-self-signed-developer-certificate" data-linktype="relative-path">Set up your development environment: Trusting the self-signed developer certificate</a>.</div>
      </div>
    );
  }
}
