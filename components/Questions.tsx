import React, { ForwardedRef, forwardRef, useImperativeHandle } from "react";
import { StyleSheet, Text, View } from "react-native";

export type QuestionHandle = {
  run: () => string;
};

export const Question1 = forwardRef(function Question1(
  _props: object,
  ref: ForwardedRef<QuestionHandle>
) {
  const code =
    "const arr = ['a', 'b', 'c'];\nfor (const el in arr) { \n \u00A0\u00A0console.log(el); \n}";

  useImperativeHandle(ref, () => ({
    run: () => {
      return ["0", "1", "2"].join("\n");
    },
  }));

  return (
    <View style={styles.container}>
      <Text selectable style={styles.code}>
        {code}
      </Text>
    </View>
  );
});

export const Question2 = forwardRef(function Question2(
  _props: object,
  ref: ForwardedRef<QuestionHandle>
) {
  const code =
    "function factorial(n) {\n \u00A0\u00A0return ( n === 0 ? 1 : n * factorial(n - 1))\n}";

  useImperativeHandle(ref, () => ({
    run: () => {
      const factorial = (n: number): number =>
        n === 0 ? 1 : n * factorial(n - 1);
      return String(factorial(-1)); // пример
    },
  }));

  return (
    <View style={styles.container}>
      <Text selectable style={styles.code}>
        {code}
      </Text>
    </View>
  );
});

export const Question3 = forwardRef(function Question3(
  _props: object,
  ref: ForwardedRef<QuestionHandle>
) {
  const code =
    "let a = { value: 10 };\nlet b = a;\nb.value = 20;\nconsole.log(a.value);";

  useImperativeHandle(ref, () => ({
    run: () => {
      return "20";
    },
  }));

  return (
    <View style={styles.container}>
      <Text selectable style={styles.code}>
        {code}
      </Text>
    </View>
  );
});

export const Question4 = forwardRef(function Question4(
  _props: object,
  ref: ForwardedRef<QuestionHandle>
) {
  const code =
    "Promise.resolve()\n.then(\n\u00A0\u00A0() => { throw new Error('Oops');}\n)\n.then(\n\u00A0\u00A0() => console.log('Then after error')\n)\n .catch(\n\u00A0\u00A0() => console.log('Caught!')\n)\n.then(\n\u00A0\u00A0() => console.log('After catch')\n);";

  useImperativeHandle(ref, () => ({
    run: () => {
      return ["Caught!", "After catch"].join("\n");
    },
  }));

  return (
    <View style={styles.container}>
      <Text selectable style={styles.code}>
        {code}
      </Text>
    </View>
  );
});

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
