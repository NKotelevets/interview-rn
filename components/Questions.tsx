import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function Question1() {
  const code =
    "const arr = ['a', 'b', 'c'];\nfor (const el in arr) { \n \u00A0\u00A0console.log(el); \n}";

  return (
    <View style={styles.container}>
      <Text selectable style={styles.code}>
        {code}
      </Text>
    </View>
  );
}

export function Question2() {
  const code =
    "function factorial(n) {\n \u00A0\u00A0return ( n === 0 ? 1 : n * factorial(n - 1))\n}";

  return (
    <View style={styles.container}>
      <Text selectable style={styles.code}>
        {code}
      </Text>
    </View>
  );
}

export function Question3() {
  const code =
    "let a = { value: 10 };\nlet b = a;\nb.value = 20;\nconsole.log(a.value);";

  return (
    <View style={styles.container}>
      <Text selectable style={styles.code}>
        {code}
      </Text>
    </View>
  );
}

export function Question4() {
  const code =
    "Promise.resolve()\n.then(\n\u00A0\u00A0() => { throw new Error('Oops');}\n)\n.then(\n\u00A0\u00A0() => console.log('Then after error')\n)\n .catch(\n\u00A0\u00A0() => console.log('Caught!')\n)\n.then(\n\u00A0\u00A0() => console.log('After catch')\n);";

  return (
    <View style={styles.container}>
      <Text selectable style={styles.code}>
        {code}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  code: {
    fontFamily: "SpaceMono",
    fontSize: 12,
    lineHeight: 20,
    color: "green",
  },
});
