
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Index() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (!isNaN(numA) && !isNaN(numB)) {
      setResult(numA + numB);
    } else {
      setResult(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kalkulator Sederhana</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Angka pertama"
        value={a}
        onChangeText={setA}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Angka kedua"
        value={b}
        onChangeText={setB}
      />
      <Button title="Jumlahkan" onPress={handleCalculate} />
      {result !== null && (
        <Text style={styles.result}>Hasil: {result}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 8,
    fontSize: 16,
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    color: 'green',
  },
});
