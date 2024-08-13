import { Button } from 'react-native-paper';

export default function CustomButton() {
  return (
    <Button
      mode="contained"
      onPress={() => alert('Botão pressionado')}
    >
      Enviar
    </Button>
  );
}