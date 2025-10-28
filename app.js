import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';

export default function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');

  // Handle angka
  const handleNumberInput = (num) => {
    if (displayValue === '0') {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  // Handle operator
  const handleOperatorInput = (op) => {
    setOperator(op);
    setFirstValue(displayValue);
    setDisplayValue('0');
  };

  // Handle clear
  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
  };

  // Handle equals
  const handleEquals = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);
    
    if (operator === '+') {
      setDisplayValue((num1 + num2).toString());
    } else if (operator === '-') {
      setDisplayValue((num1 - num2).toString());
    } else if (operator === '*') {
      setDisplayValue((num1 * num2).toString());
    } else if (operator === '/') {
      setDisplayValue((num1 / num2).toString());
    }
    
    setOperator(null);
    setFirstValue('');
  };

  // Handle decimal
  const handleDecimal = () => {
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Display */}
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{displayValue}</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        {/* Row 1 */}
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, styles.buttonFunction]} onPress={handleClear}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonFunction]} onPress={() => setDisplayValue(displayValue.slice(0, -1) || '0')}>
            <Text style={styles.buttonText}>⌫</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonFunction]} onPress={() => setDisplayValue((parseFloat(displayValue) / 100).toString())}>
            <Text style={styles.buttonText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonOperator]} onPress={() => handleOperatorInput('/')}>
            <Text style={styles.buttonText}>÷</Text>
          </TouchableOpacity>
        </View>

        {/* Row 2 */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(7)}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(8)}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(9)}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonOperator]} onPress={() => handleOperatorInput('*')}>
            <Text style={styles.buttonText}>×</Text>
          </TouchableOpacity>
        </View>

        {/* Row 3 */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(4)}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(5)}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(6)}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonOperator]} onPress={() => handleOperatorInput('-')}>
            <Text style={styles.buttonText}>−</Text>
          </TouchableOpacity>
        </View>

        {/* Row 4 */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(1)}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(2)}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(3)}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonOperator]} onPress={() => handleOperatorInput('+')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Row 5 */}
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, styles.buttonZero]} onPress={() => handleNumberInput(0)}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleDecimal}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonEquals]} onPress={handleEquals}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    paddingTop: 50,
  },
  displayContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  displayText: {
    fontSize: 70,
    color: '#fff',
    fontWeight: '300',
  },
  buttonContainer: {
    flex: 3,
    padding: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    backgroundColor: '#333',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    elevation: 3,
  },
  buttonZero: {
    flex: 2,
  },
  buttonFunction: {
    backgroundColor: '#a6a6a6',
  },
  buttonOperator: {
    backgroundColor: '#ff9500',
  },
  buttonEquals: {
    backgroundColor: '#ff9500',
  },
  buttonText: {
    fontSize: 32,
    color: '#fff',
    fontWeight: '500',
  },
});