import { mountStory } from '@jscutlery/cypress-angular/mount';
import { Args, Story } from '@storybook/angular';
import { MyButtonComponent } from './my-button.component';
import * as stories from './my-button.stories';

describe(MyButtonComponent.name, () => {
  beforeEach(() => {
    mountStory(stories.withText as Story<Args>);
  });

  it('should change text when clicked', () => {
    cy.get('button').click();
    cy.get('button').contains('Changed!');
  });
});
