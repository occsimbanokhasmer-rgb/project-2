import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Bootstrap 5 palette
const PRIMARY = "#0D6EFD";
const DARK = "#212529";
const MUTED = "#6C757D";
const BORDER = "#DEE2E6";

// Change your details here
const PROFILE = {
  name: "Khasmer Simbano",
  username: "@khasmersimbano",
  bio: "Mobile app developer. Always building something new. 🚀",
  avatar: require("../../../assets/images/me.jpg"),
  cover: "https://picsum.photos/id/1036/1000/500",
};

const STATS = [
  { label: "Posts", value: "128" },
  { label: "Friends", value: "1.2K" },
  { label: "Followers", value: "3.4K" },
];

const DETAILS: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
}[] = [
  { icon: "briefcase-outline", label: "Work", value: "Tech Company" },
  {
    icon: "school-outline",
    label: "Education",
    value: "Information Technology",
  },
  { icon: "location-outline", label: "Lives in", value: "Elsalvador City" },
  { icon: "heart-outline", label: "Status", value: "Single" },
  { icon: "mail-outline", label: "Email", value: "khasmersimbano@gmail.com" },
  { icon: "calendar-outline", label: "Joined", value: "November 15 2026" },
];

export default function Profile() {
  const router = useRouter();

  return (
    <ScrollView style={styles.flex} showsVerticalScrollIndicator={false}>
      {/* Cover + avatar */}
      <View>
        <Image source={{ uri: PROFILE.cover }} style={styles.cover} />
        <View style={styles.avatarWrap}>
          <Image source={PROFILE.avatar} style={styles.avatar} />
        </View>
      </View>

      {/* Name block */}
      <View style={styles.header}>
        <View style={styles.nameRow}>
          <Text style={styles.name}>{PROFILE.name}</Text>
          <Ionicons name="checkmark-circle" size={22} color={PRIMARY} />
        </View>
        <Text style={styles.username}>{PROFILE.username}</Text>
        <Text style={styles.bio}>{PROFILE.bio}</Text>

        {/* Buttons */}
        <View style={styles.btnRow}>
          <TouchableOpacity style={styles.btnPrimary} activeOpacity={0.85}>
            <Ionicons name="create-outline" size={18} color="#fff" />
            <Text style={styles.btnPrimaryText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnOutline} activeOpacity={0.85}>
            <Ionicons name="share-social-outline" size={18} color={MUTED} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        {STATS.map((s) => (
          <View key={s.label} style={styles.statCard}>
            <Text style={styles.statValue}>{s.value}</Text>
            <Text style={styles.statLabel}>{s.label}</Text>
          </View>
        ))}
      </View>

      {/* List group */}
      <View style={styles.listGroup}>
        <Text style={styles.listTitle}>Personal details</Text>
        {DETAILS.map((d, i) => (
          <View
            key={d.label}
            style={[
              styles.listItem,
              i === DETAILS.length - 1 && { borderBottomWidth: 0 },
            ]}
          >
            <View style={styles.iconBox}>
              <Ionicons name={d.icon} size={20} color={PRIMARY} />
            </View>
            <View style={styles.flex}>
              <Text style={styles.itemLabel}>{d.label}</Text>
              <Text style={styles.itemValue}>{d.value}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Logout */}
      <TouchableOpacity
        style={styles.logoutBtn}
        activeOpacity={0.85}
        onPress={() => router.replace("/login")}
      >
        <Ionicons name="log-out-outline" size={20} color="#DC3545" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const AVATAR = 120;

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: "#F8F9FA" },
  logoutBtn: {
    marginHorizontal: 16,
    marginTop: 16,
    height: 46,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#DC3545",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  logoutText: { color: "#DC3545", fontSize: 16, fontWeight: "700" },
  cover: { width: "100%", height: 180, backgroundColor: "#E9ECEF" },
  avatarWrap: {
    position: "absolute",
    bottom: -AVATAR / 2,
    alignSelf: "center",
  },
  avatar: {
    width: AVATAR,
    height: AVATAR,
    borderRadius: AVATAR / 2,
    borderWidth: 5,
    borderColor: "#fff",
    backgroundColor: "#ccc",
  },

  header: {
    alignItems: "center",
    paddingTop: AVATAR / 2 + 12,
    paddingHorizontal: 20,
  },
  nameRow: { flexDirection: "row", alignItems: "center", gap: 6 },
  name: { fontSize: 24, fontWeight: "800", color: DARK },
  username: { fontSize: 15, color: MUTED, marginTop: 2 },
  bio: {
    fontSize: 15,
    color: DARK,
    textAlign: "center",
    lineHeight: 21,
    marginTop: 10,
  },

  btnRow: { flexDirection: "row", gap: 8, marginTop: 16, width: "100%" },
  btnPrimary: {
    flex: 1,
    height: 44,
    backgroundColor: PRIMARY,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  btnPrimaryText: { color: "#fff", fontSize: 16, fontWeight: "700" },
  btnOutline: {
    width: 50,
    height: 44,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 8,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  statsRow: { flexDirection: "row", gap: 10, padding: 16 },
  statCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },
  statValue: { fontSize: 20, fontWeight: "800", color: PRIMARY },
  statLabel: { fontSize: 13, color: MUTED, marginTop: 2 },

  listGroup: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: BORDER,
    overflow: "hidden",
  },
  listTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: DARK,
    padding: 14,
    backgroundColor: "#F8F9FA",
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#E7F1FF",
    alignItems: "center",
    justifyContent: "center",
  },
  itemLabel: { fontSize: 12, color: MUTED },
  itemValue: { fontSize: 16, color: DARK, fontWeight: "600", marginTop: 1 },
});
