import { Card, Title, Paragraph } from 'react-native-paper';

export default function CustomCard () {
  return (
    <Card style={{ marginBottom: 20, marginTop:20 }}>
    <Card.Content>
      <Title>Card</Title>
      <Paragraph>Este é um exemplo de um card usando React Native Paper.</Paragraph>
    </Card.Content>
  </Card>
  );
}