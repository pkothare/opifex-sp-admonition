import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'AdmonitionWebPartStrings';
import Admonition from './components/Admonition';
import { IAdmonitionProps } from './components/IAdmonitionProps';
import { initializeIcons } from '@fluentui/font-icons-mdl2';

export interface IAdmonitionWebPartProps {
  description: string;
}

export default class AdmonitionWebPart extends BaseClientSideWebPart<IAdmonitionWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IAdmonitionProps> = React.createElement(
      Admonition,
      {
        description: this.properties.description
      }
    );

    initializeIcons();
    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
