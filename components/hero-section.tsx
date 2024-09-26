import { View, Image, StyleSheet } from "react-native";
import BenefixFixTap from "@/assets/images/benefix-fixtap.jpg";

export default function HeroSection() {
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image style={styles.image} source={BenefixFixTap} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		marginTop: 40,
	},
	imageContainer: {
		width: "100%",
		height: 400,

		borderRadius: 8,
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: "100%",
		resizeMode: "cover",
	},
});
