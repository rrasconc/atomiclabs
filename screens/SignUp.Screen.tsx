import { useFormik } from 'formik';
import { useState } from 'react';
import { Alert, Image, LayoutAnimation, StyleSheet, View } from 'react-native';

import { Footer } from '../components/Footer';
import { GallaxyContentContainer } from '../components/Gallaxy.Content.Container';
import { GallaxyScrollView } from '../components/Gallaxy.Scroll.View';
import { HeaderText } from '../components/Header.Text';
import { NameForm } from '../components/Name.Form';
import { PhoneForm } from '../components/Phone.Form';
import { StepDot } from '../components/Step.Dot';
import { Stepper } from '../components/Stepper';
import { Text } from '../components/Text';
import { api } from '../constants/api';
import { IMAGES } from '../constants/files';
import { globalStyles } from '../constants/styles';
import { COLORS, SPACING } from '../constants/theme';
import type { SignUpFormValues, StepStatus } from '../constants/types';
import { signUpSchema } from '../constants/validations';

const initialValues = {
  name: '',
  lastname: '',
  phoneNumber: '',
};

export function SignUpScreen() {
  const [currentStep, setCurrentStep] = useState<{ step: number; status: StepStatus }>({
    step: 1,
    status: 'inProgress',
  }); // if step is 0 we asume the whole process has been completed and successful
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (values: SignUpFormValues) => {
    setLoading(true);
    //do post request
    try {
      //display success screen
      await api.post('/form', values);
      setCurrentStep({ ...currentStep, step: 0 });
    } catch {
      /*this alert should be replaced with a prettier component and have different content
        depending of the status code
      */
      Alert.alert('Algo salió mal :(', 'Intente de nuevo más tarde');
    } finally {
      setLoading(false);
    }
  };

  const handleNameSubmit = () => {
    setLoading(true);

    //fake delay to cause a better UX
    setTimeout(() => {
      setLoading(false);

      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setCurrentStep({
        step: 2,
        status: 'inProgress',
      });
    }, 800);
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    onSubmit,
    initialValues,
    validationSchema: signUpSchema,
  });

  const renderBgImages = () => (
    <>
      <Image source={IMAGES.gallaxy2} />
      <Image source={IMAGES.gallaxy3} />
    </>
  );

  return (
    <GallaxyScrollView renderBgImages={renderBgImages}>
      <GallaxyContentContainer>
        {currentStep.step !== 0 && (
          <Stepper progress={currentStep.step === 1 ? 0.35 : 1}>
            <StepDot number={1} status={currentStep.step === 1 ? 'inProgress' : 'completed'} />
            <StepDot
              number={2}
              status="pending"
              color={currentStep.step === 1 ? COLORS.white : COLORS.orange}
            />
          </Stepper>
        )}

        {currentStep.step === 1 && (
          <>
            <View style={styles.titleContainer}>
              <StepDot number={1} status="inProgress" size="large" />
              <HeaderText style={styles.title} adjustsFontSizeToFit={false} numberOfLines={2}>
                TE QUEREMOS <HeaderText style={globalStyles.highlightText}>CONOCER</HeaderText>
              </HeaderText>
            </View>

            <NameForm
              values={values}
              errors={errors}
              handleChange={handleChange}
              handleSubmit={handleNameSubmit}
              loading={loading}
            />
          </>
        )}

        {currentStep.step === 2 && (
          <>
            <View style={styles.titleContainer}>
              <StepDot number={2} status="inProgress" size="large" />
              <HeaderText style={styles.title} adjustsFontSizeToFit={false} numberOfLines={2}>
                VALIDA TU{'\n'}
                <HeaderText style={[globalStyles.highlightText, styles.title]}>CELULAR</HeaderText>
              </HeaderText>
            </View>

            <PhoneForm
              values={values}
              errors={errors}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              loading={loading}
            />
          </>
        )}

        {currentStep.step === 0 && (
          <>
            <View>
              <HeaderText>TUS DATOS</HeaderText>
              <HeaderText>
                HAN SIDO <HeaderText style={globalStyles.highlightText}>ENVIADOS</HeaderText>
              </HeaderText>
              <HeaderText style={globalStyles.highlightText}>CON ÉXITO</HeaderText>
            </View>

            <Text style={globalStyles.label}>
              En breve recibirás un correo de confirmación por parte del equipo de AtomicLabs
            </Text>
            <Text style={globalStyles.label}>
              Recuerda revisar tu bandeja de SPAM ¡Esperamos verte pronto!
            </Text>
          </>
        )}

        {currentStep.step !== 0 && (
          <Image resizeMode="contain" style={styles.img} source={IMAGES.astro3} />
        )}
        {currentStep.step === 0 && (
          <Image resizeMode="contain" style={styles.img} source={IMAGES.astro2} />
        )}

        <Footer />
      </GallaxyContentContainer>
    </GallaxyScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: -SPACING.medium,
    alignItems: 'center',
  },
  title: {
    textAlign: 'left',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  img: {
    alignSelf: 'center',
    width: '100%',
    marginTop: -SPACING.large,
  },
});
