import { View, StyleSheet } from 'react-native';

import { PrimaryButton } from './Primary.Button';
import { Text } from './Text';
import { TextInput } from './Text.Input';
import { globalStyles } from '../constants/styles';
import { SPACING } from '../constants/theme';
import { NameFormProps } from '../constants/types';

export function NameForm({
  errors,
  handleChange,
  values: { name, lastname },
  handleSubmit,
  loading,
}: NameFormProps) {
  const isFormPending = !name || !lastname;
  const hasErrors = errors.name !== undefined || errors.lastname !== undefined;

  return (
    <View style={styles.container}>
      <Text style={globalStyles.label}>
        Queremos saber que eres tú, por favor ingresa los siguientes datos:
      </Text>
      <TextInput
        error={errors.name ?? ''}
        onChangeText={handleChange('name')}
        value={name}
        label="Nombre (s)"
      />
      <TextInput
        error={errors.lastname ?? ''}
        onChangeText={handleChange('lastname')}
        value={lastname}
        label="Apellidos (s)"
      />
      <PrimaryButton
        disabled={isFormPending || hasErrors || loading}
        onPress={() => handleSubmit()}
        text="Enviar"
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
