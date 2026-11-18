import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
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
const DARK = "#212529";
const MUTED = "#6C757D";
const BORDER = "#DEE2E6";

export default function Login() {
  const router = useRouter();

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView keyboardShouldPersistTaps="handled">
        {/* Hero */}
        <View style={styles.hero}>
          <View style={styles.logoCircle}>
            <Ionicons name="chatbubbles" size={34} color={PRIMARY} />
          </View>
          <Text style={styles.brand}>MootsBo0k</Text>
          <Text style={styles.heroSub}>Share moments with people you love</Text>
        </View>

        {/* Card overlapping the hero */}
        <View style={styles.card}>
          <Text style={styles.title}>Welcome back</Text>
          <Text style={styles.subtitle}>Sign in to continue</Text>

          <Text style={styles.label}>Email address</Text>
          <TextInput
            style={styles.input}
            placeholder="name@example.com"
            placeholderTextColor="#ADB5BD"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#ADB5BD"
            secureTextEntry
          />

          <View style={styles.row}>
            <View style={styles.checkRow}>
              <View style={styles.checkbox} />
              <Text style={styles.small}>Remember me</Text>
            </View>
            <Text style={styles.link}>Forgot password?</Text>
          </View>

          <TouchableOpacity
            style={styles.btnPrimary}
            activeOpacity={0.85}
            onPress={() => router.push("/home")}
          >
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.small}>Don't have an account? </Text>
            <Link href="/register" style={styles.link}>
              Register
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
    paddingTop: 80,
    paddingBottom: 90,
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
  },
  logoCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  brand: { fontSize: 34, fontWeight: "800", color: "#fff" },
  heroSub: { color: "#CFE2FF", fontSize: 15, marginTop: 4 },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: -50,
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
  title: { fontSize: 24, fontWeight: "700", color: DARK },
  subtitle: { fontSize: 14, color: MUTED, marginTop: 2, marginBottom: 18 },
  label: { fontSize: 14, fontWeight: "600", color: DARK, marginBottom: 6 },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 8,
    paddingHorizontal: 14,
    fontSize: 16,
    color: DARK,
    backgroundColor: "#fff",
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  checkRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ADB5BD",
  },
  small: { fontSize: 14, color: MUTED },
  link: { fontSize: 14, color: PRIMARY, fontWeight: "600" },
  btnPrimary: {
    height: 48,
    backgroundColor: PRIMARY,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: { color: "#fff", fontSize: 16, fontWeight: "700" },
  footer: { flexDirection: "row", justifyContent: "center", marginTop: 20 },
});
