import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import Logo from "@/assets/images/benefix-logo.png";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";

export default function NavBarComponent() {
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image source={Logo} style={styles.logo} alt="logo" />
			</View>

			<Link href="/register" asChild>
				<TouchableOpacity>
					<LinearGradient colors={["#FBA512", "#FB8412"]} style={styles.button}>
						<Text style={styles.text}>Register</Text>
					</LinearGradient>
				</TouchableOpacity>
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 30,
		paddingTop: 30,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	imageContainer: {
		position: "relative",
		width: 120,
		height: 50,
		overflow: "hidden",
		// borderWidth: 1,
		// borderColor: "white"
	},
	logo: {
		width: "100%",
		height: 100,
		resizeMode: "cover",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: [{ translateX: -60 }, { translateY: -45 }],
	},
	text: {
		color: "black",
		fontWeight: "800",
	},
	button: {
		paddingHorizontal: 20,
		paddingVertical: 8,
		borderRadius: 8,
	},
});
