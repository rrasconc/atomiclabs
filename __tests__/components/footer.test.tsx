import { render, screen } from '@testing-library/react-native';

import { Footer } from '../../components/Footer';

describe('<Footer />', () => {
  let component: any = null;
  beforeEach(() => {
    component = render(<Footer />);
  });

  it('renders correctly', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('shows copyright label', () => {
    expect(screen.getByText(/atomicLabs. todos los derechos reservados/i)).toBeDefined();
  });

  it('shows privacy policy', () => {
    expect(screen.getByText(/aviso de privacidad/i)).toBeDefined();
  });
});
