import type { FontAwesome } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { FormikErrors, FormikHandlers } from 'formik';
import type { ReactNode } from 'react';
import type {
  ImageSourcePropType,
  TextInputProps as DefaultTextInputProps,
  TouchableOpacityProps,
  ScrollViewProps,
  ColorValue,
  LayoutChangeEvent,
} from 'react-native';

export interface ServiceGroup {
  title: string;
  services: string[];
  image: ImageSourcePropType;
}

export interface ServiceGroupCardProps extends ServiceGroup {
  width: number;
}

export interface TeamMember {
  id: number;
  avatar: string;
  name: string;
  position: string;
}

export type TeamMemberCardProps = Pick<TeamMember, 'avatar' | 'name' | 'position'>;

export interface TeamMembersProps {
  data: TeamMember[];
  loading: boolean;
  error: any;
}

type FontawesomeIcon = keyof typeof FontAwesome.glyphMap;

export interface SocialMediaButtonProps {
  icon: FontawesomeIcon;
  url: string;
}

export interface ScrollDownButtonProps extends TouchableOpacityProps {
  text: string;
}

type RootStackParamList = {
  Home: undefined;
  SignUp: undefined;
};

export type ScreenProps = NativeStackScreenProps<RootStackParamList>;

export type StepStatus = 'pending' | 'inProgress' | 'completed';

export interface StepDotProps {
  status: StepStatus;
  size?: 'small' | 'large';
  number: number;
  color?: ColorValue;
}

export interface TextInputProps extends DefaultTextInputProps {
  label: string;
  error: string;
}

export interface ButtonProps extends TouchableOpacityProps {
  text: string;
  loading?: boolean;
}

export interface StepperProps {
  children: ReactNode;
  progress: number;
}

export interface SignUpFormValues {
  name: string;
  lastname: string;
  phoneNumber: string;
}

export interface GenericForm {
  loading?: boolean;
}

export interface NameFormProps
  extends GenericForm,
    Pick<FormikHandlers, 'handleSubmit' | 'handleChange'> {
  errors: FormikErrors<SignUpFormValues>;
  values: SignUpFormValues;
}

export interface PhoneFormProps
  extends GenericForm,
    Pick<FormikHandlers, 'handleSubmit' | 'handleChange'> {
  errors: FormikErrors<SignUpFormValues>;
  values: SignUpFormValues;
}

export interface GallaxyScrollViewProps extends ScrollViewProps {
  renderBgImages: () => ReactNode;
}

export interface ServicesProps {
  data: ServiceGroup[];
  onLayout: (e: LayoutChangeEvent) => void;
}

export interface ServiceCarouselProps {
  data: ServiceGroup[];
}
