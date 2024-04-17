import { mkdir, writeFile } from 'fs/promises';

let [, , name] = process.argv;
name = name.charAt(0).toUpperCase() + name.slice(1);

/**
 * Templates
 */

const TEMPLATE_TYPES = Object.freeze({
  INDEX: Symbol('index'),
  COMPONENT: Symbol('component'),
  TEST: Symbol('test'),
  STORIES: Symbol('stories'),
});

/**
 * Get the template name and content
 * @param {TEMPLATE_TYPES} type The template type to use
 * @param {string} componentName The name of the React component
 * @returns {Array[filename, content]} An array with the filename and the template content
 */
const getTemplate = (type, componentName) => {
  switch (type.description) {
    case 'index':
      return [
        'index.ts',
        `export { default } from './${componentName}';
`,
      ];
    case 'component':
      return [
        `${componentName}.tsx`,
        `import { useTranslations } from 'next-intl';

type Props = {};

const ${componentName} = (props: Props) => {
  const t = useTranslations();
  
  return (
    <div>${componentName}</div>
  );
};

export default ${componentName};
`,
      ];
    case 'test':
      return [
        `${componentName}.test.tsx`,
        `import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { render } from '@/utils/testUtils';
import ${componentName} from '@/components/${componentName}';

describe('${componentName}', () => {
  it('should render without crashing', () => {
    const { asFragment } = render(<${componentName} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
`,
      ];
    case 'stories':
      return [
        `${componentName}.stories.tsx`,
        `import { Meta, StoryObj } from '@storybook/react';

import ${componentName} from '@/components/${componentName}';

const meta: Meta<typeof ${componentName}> = {
  title: '${componentName}',
  component: ${componentName},
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof ${componentName}>;
export const Primary: Story = {};
`,
      ];
    default:
      throw new Error('Unknown template type');
  }
};

/**
 * Create the component directory
 * @param {string} componentName The name of the React component
 */
async function createDirectory(componentName) {
  try {
    await mkdir(`./src/components/${componentName}`);
    console.log(`Directory ${componentName} created`);
  } catch (error) {
    throw new Error(error.message);
  }
}

/**
 * Create the component file based on a template
 * @param {TEMPLATE_TYPES} type The template type to use
 * @param {string} componentName The name of the React component
 */
async function createFile(type, componentName) {
  try {
    const [filename, content] = getTemplate(type, componentName);
    await writeFile(`./src/components/${componentName}/${filename}`, content);
    console.log(`File ${filename} created`);
  } catch (error) {
    console.error(error.message);
  }
}

console.log(`Starting to create the new React component ${name}...`);
createDirectory(name)
  .then(() => {
    Promise.all([
      createFile(TEMPLATE_TYPES.INDEX, name),
      createFile(TEMPLATE_TYPES.COMPONENT, name),
      createFile(TEMPLATE_TYPES.TEST, name),
      createFile(TEMPLATE_TYPES.STORIES, name),
    ])
      .then(() =>
        console.log(
          `The new React component ${name} has been created successfully`
        )
      )
      .catch(() => console.error(`Error creating new React component ${name}`));
  })
  .catch((error) => console.error(error.message));
