import { render } from '@testing-library/react-native';

import { ServicesCarousel } from '../../components/Services.Carousel';
import { SERVICE_GROUPS } from '../../constants/content';

describe('<ServicesCarousel />', () => {
  let component: any = null;
  beforeEach(() => {
    component = render(<ServicesCarousel data={SERVICE_GROUPS} />);
  });

  it('renders correctly', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
