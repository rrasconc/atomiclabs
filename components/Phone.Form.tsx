import { View, StyleSheet } from 'react-native';

import { PrimaryButton } from './Primary.Button';
import { Text } from './Text';
import { TextInput } from './Text.Input';
import { globalStyles } from '../constants/styles';
import { SPACING } from '../constants/theme';
import { PhoneFormProps } from '../constants/types';

export function PhoneForm({
  errors,
  handleChange,
  values: { phoneNumber },
  handleSubmit,
  loading,
}: PhoneFormProps) {
  return (
    <View style={styles.container}>
      <Text style={globalStyles.label}>Necesitamos validar tu número para continuar</Text>
      <Text style={globalStyles.label}>
        Ingresa tu número a 10 dígitos y te enviaremos un código SMS
      </Text>

      <TextInput
        error={errors.phoneNumber ?? ''}
        onChangeText={handleChange('phoneNumber')}
        value={phoneNumber}
        label="Número de celular"
      />
      <PrimaryButton
        disabled={!phoneNumber || errors.phoneNumber !== undefined || loading}
        onPress={() => handleSubmit()}
        text="Continuar"
        loading={loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: SPACING.large,
  },
});
