import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// Bootstrap 5 palette
const PRIMARY = "#0D6EFD";
const SUCCESS = "#198754";
const DARK = "#212529";
const MUTED = "#6C757D";
const BORDER = "#DEE2E6";

function Field({
  label,
  icon,
  ...props
}: {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
} & React.ComponentProps<typeof TextInput>) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrap}>
        <Ionicons name={icon} size={18} color="#ADB5BD" />
        <TextInput
          style={styles.input}
          placeholderTextColor="#ADB5BD"
          {...props}
        />
      </View>
    </View>
  );
}

export default function Register() {
  const router = useRouter();

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView keyboardShouldPersistTaps="handled">
        {/* Hero */}
        <View style={styles.hero}>
          <Text style={styles.brand}>Join MootsBo0k</Text>
          <Text style={styles.heroSub}>
            Create your free account in seconds
          </Text>
        </View>

        <View style={styles.card}>
          <Field
            label="Full name"
            icon="person-outline"
            placeholder="Khasmer Simbano"
            autoCapitalize="words"
          />
          <Field
            label="Email address"
            icon="mail-outline"
            placeholder="name@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Field
            label="Password"
            icon="lock-closed-outline"
            placeholder="Create a password"
            secureTextEntry
          />
          <Field
            label="Confirm password"
            icon="shield-checkmark-outline"
            placeholder="Repeat your password"
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.btnSuccess}
            activeOpacity={0.85}
            onPress={() => router.push("/home")}
          >
            <Text style={styles.btnText}>Register</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.small}>Already have an account? </Text>
            <Link href="/login" style={styles.link}>
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: "#F8F9FA" },
  hero: {
    backgroundColor: PRIMARY,
    alignItems: "center",
    paddingTop: 70,
    paddingBottom: 80,
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
  },
  brand: { fontSize: 30, fontWeight: "800", color: "#fff" },
  heroSub: { color: "#CFE2FF", fontSize: 15, marginTop: 4 },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: -44,
    marginBottom: 30,
    padding: 22,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: BORDER,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 5,
  },
  field: { marginBottom: 14 },
  label: { fontSize: 14, fontWeight: "600", color: DARK, marginBottom: 6 },
  inputWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    height: 48,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
  },
  input: { flex: 1, fontSize: 16, color: DARK },
  btnSuccess: {
    height: 48,
    backgroundColor: SUCCESS,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  btnText: { color: "#fff", fontSize: 16, fontWeight: "700" },
  footer: { flexDirection: "row", justifyContent: "center", marginTop: 20 },
  small: { fontSize: 14, color: MUTED },
  link: { fontSize: 14, color: PRIMARY, fontWeight: "600" },
});
