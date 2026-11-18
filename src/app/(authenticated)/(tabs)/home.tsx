import { Ionicons } from "@expo/vector-icons";
import {
  FlatList,
  Image,
  ImageSourcePropType,
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

const AVATARS: Record<string, ImageSourcePropType> = {
  me: require("../../../assets/images/me.jpg"), // small picture by "What's on your mind?"
  aldrin: require("../../../assets/images/aldrin.jpg"),
  bensoy: require("../../../assets/images/bensoydes.jpg"),
  baldo: require("../../../assets/images/baldo.jpg"),
  benhard: require("../../../assets/images/benhard.jpg"),
};

const MY_AVATAR = AVATARS.me;

type Post = {
  id: string;
  username: string;
  handle: string;
  time: string;
  avatar: ImageSourcePropType;
  text: string;
  image?: ImageSourcePropType;
  likes: number;
  comments: number;
  tag: string;
};

const POSTS: Post[] = [
  {
    id: "1",
    username: "Aldrin Abonachita",
    handle: "@aldrin",
    time: "2h",
    avatar: AVATARS.aldrin,
    text: "Sleepless night but so proud! 🔥",
    image: { uri: "https://picsum.photos/id/1018/800/600" },
    likes: 248,
    comments: 32,
    tag: "Travel",
  },
  {
    id: "2",
    username: "Bensoydes Abonitalla",
    handle: "@bensoydes",
    time: "5h",
    avatar: AVATARS.bensoy,
    text: "Bensoydes programmer 💻🔥",
    likes: 112,
    comments: 18,
    tag: "Tech",
  },
  {
    id: "3",
    username: "Baldo Butong",
    handle: "@balbalds",
    time: "1d",
    avatar: AVATARS.baldo,
    text: "Weekend vibes at the beach with the best butong in the world. 🏖️",
    image: { uri: "https://picsum.photos/id/1015/800/600" },
    likes: 530,
    comments: 76,
    tag: "Lifestyle",
  },
  {
    id: "4",
    username: "Parokya ni Benhard",
    handle: "@BenhardPalautog",
    time: "2d",
    avatar: AVATARS.benhard,
    text: "Abacá coffee first, then conquer the world. ☕",
    image: { uri: "https://picsum.photos/id/1060/800/600" },
    likes: 87,
    comments: 9,
    tag: "Food",
  },
];

function Composer() {
  return (
    <View style={styles.card}>
      <View style={styles.composerRow}>
        <Image source={MY_AVATAR} style={styles.avatarSm} />
        <TextInput
          style={styles.composerInput}
          placeholder="What's on your mind?"
          placeholderTextColor="#ADB5BD"
        />
      </View>
      <View style={styles.composerActions}>
        <View style={styles.chip}>
          <Ionicons name="image" size={16} color="#198754" />
          <Text style={styles.chipText}>Photo</Text>
        </View>
        <View style={styles.chip}>
          <Ionicons name="happy" size={16} color="#FFC107" />
          <Text style={styles.chipText}>Feeling</Text>
        </View>
        <View style={styles.chip}>
          <Ionicons name="location" size={16} color="#DC3545" />
          <Text style={styles.chipText}>Place</Text>
        </View>
      </View>
    </View>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <View style={styles.card}>
      {/* Card header */}
      <View style={styles.postHeader}>
        <Image source={post.avatar} style={styles.avatar} />
        <View style={styles.flex1}>
          <Text style={styles.username}>{post.username}</Text>
          <Text style={styles.meta}>
            {post.handle} · {post.time}
          </Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{post.tag}</Text>
        </View>
      </View>

      {/* Card body */}
      <Text style={styles.postText}>{post.text}</Text>

      {/* Card image */}
      {post.image && <Image source={post.image} style={styles.postImage} />}

      {/* Card footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.btnOutline}>
          <Ionicons name="heart-outline" size={16} color={PRIMARY} />
          <Text style={styles.btnOutlineText}>{post.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnOutline}>
          <Ionicons name="chatbubble-outline" size={16} color={PRIMARY} />
          <Text style={styles.btnOutlineText}>{post.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnOutline}>
          <Ionicons name="share-social-outline" size={16} color={PRIMARY} />
          <Text style={styles.btnOutlineText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function Home() {
  return (
    <View style={styles.flex1}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <View style={styles.brandRow}>
          <Ionicons name="chatbubbles" size={24} color="#fff" />
          <Text style={styles.brand}>MootsBo0k</Text>
        </View>
        <View style={styles.navIcons}>
          <Ionicons name="search" size={22} color="#fff" />
          <Ionicons name="notifications" size={22} color="#fff" />
        </View>
      </View>

      <FlatList
        data={POSTS}
        keyExtractor={(i) => i.id}
        ListHeaderComponent={Composer}
        renderItem={({ item }) => <PostCard post={item} />}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flex1: { flex: 1, backgroundColor: "#F8F9FA" },
  navbar: {
    backgroundColor: PRIMARY,
    paddingTop: 50,
    paddingBottom: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  brandRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  brand: { color: "#fff", fontSize: 22, fontWeight: "800" },
  navIcons: { flexDirection: "row", gap: 18 },

  list: { padding: 12, gap: 12 },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: BORDER,
    overflow: "hidden",
  },

  composerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 12,
  },
  avatarSm: { width: 40, height: 40, borderRadius: 20 },
  composerInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 20,
    paddingHorizontal: 14,
    fontSize: 15,
    backgroundColor: "#F8F9FA",
  },
  composerActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: BORDER,
    paddingVertical: 10,
  },
  chip: { flexDirection: "row", alignItems: "center", gap: 6 },
  chipText: { fontSize: 14, color: MUTED, fontWeight: "600" },

  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 12,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    borderWidth: 2,
    borderColor: PRIMARY,
  },
  username: { fontSize: 16, fontWeight: "700", color: DARK },
  meta: { fontSize: 13, color: MUTED, marginTop: 1 },
  badge: {
    backgroundColor: "#CFE2FF",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeText: { color: "#084298", fontSize: 12, fontWeight: "700" },

  postText: {
    fontSize: 16,
    lineHeight: 22,
    color: DARK,
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  postImage: { width: "100%", height: 260, backgroundColor: "#E9ECEF" },

  footer: {
    flexDirection: "row",
    gap: 8,
    padding: 12,
    backgroundColor: "#F8F9FA",
    borderTopWidth: 1,
    borderTopColor: BORDER,
  },
  btnOutline: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderWidth: 1,
    borderColor: PRIMARY,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  btnOutlineText: { color: PRIMARY, fontSize: 14, fontWeight: "600" },
});
