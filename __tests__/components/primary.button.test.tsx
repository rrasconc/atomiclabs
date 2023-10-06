import { render, screen } from '@testing-library/react-native';

import { PrimaryButton } from '../../components/Primary.Button';

describe('<PrimaryButton loading />', () => {
  let component: any = null;
  beforeEach(() => {
    component = render(<PrimaryButton loading text="Enviar" />);
  });

  it('renders correctly', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('shows activity indicator', () => {
    expect(screen.queryByText(/enviar/i)).toBeNull();
  });
});

describe('<PrimaryButton />', () => {
  let component: any = null;
  beforeEach(() => {
    component = render(<PrimaryButton text="Enviar" />);
  });

  it('renders correctly', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('shows text', () => {
    expect(screen.getByText(/enviar/i)).toBeDefined();
  });
});
