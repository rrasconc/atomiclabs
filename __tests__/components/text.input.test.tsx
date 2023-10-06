import { render, screen } from '@testing-library/react-native';

import { TextInput } from '../../components/Text.Input';

describe('<TextInput />', () => {
  let component: any = null;
  beforeEach(() => {
    component = render(<TextInput label="Name" error="There is an error!" />);
  });

  it('renders correctly', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('shows label', () => {
    expect(screen.getByText(/name/i)).toBeDefined();
  });

  it('shows error message', () => {
    expect(screen.getByText(/there is an error/i)).toBeDefined();
  });
});
