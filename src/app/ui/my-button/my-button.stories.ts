import { moduleMetadata, Story } from '@storybook/angular';
import { MyButtonComponent } from 'src/app/ui/my-button/my-button.component';
import { MyButtonModule } from 'src/app/ui/my-button/my-button.module';

export default {
    title: 'Components/Button',
    decorators: [
        moduleMetadata({
            imports: [MyButtonModule]
        })
    ]
}

const Template = (args: MyButtonComponent) => ({
    component: MyButtonComponent,
    props: args
})


export const withText: Story<MyButtonComponent> = Template.bind({});
withText.args = {
    text: 'Hello world'
}

