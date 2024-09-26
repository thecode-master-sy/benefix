import { View, Text, StyleSheet, Image } from "react-native";
import whoWeAre from "@/assets/images/benefix-who-we-are.jpg";

export default function AboutSection() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Who we are?</Text>
			<View style={styles.textContainer}>
				<Text style={styles.text}>
					At benefix we are poineers of the digital economy, commited to
					empowering individuals to achieve finacial freedom through the
					strategic use of social media.
				</Text>
				<Text style={styles.text}>
					Our team is made up of digital marketing experts, financial
					strategists, and technology ethusiats who understand the power of
					online platform in shaping finacial futures
				</Text>
				<Text style={styles.text}>
					We believe in the limitless potential of the digital world and we are
					here to guid our users in harnessing the potiential to create real
					sustainable income.
				</Text>
				<Text style={styles.text}>
					Our mission is to inspire, educate and equip our users with the tools
					and knowledge they need to thrive in the digital landscape. By
					leveraging the power and tiktok, facebook, and instagram, we aim to
					transform the way people think about earning online, turning eveeryday
					social media activities into profitable ventures
				</Text>
			</View>

			<View style={styles.imageContainer}>
				<Image source={whoWeAre} style={styles.image} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		marginTop: 80,
	},
	title: {
		fontSize: 40,
		fontWeight: "bold",
		color: "#fff",
	},
	textContainer: {
		backgroundColor: "hsla(182, 71%, 9%, 0.8)",
		borderRadius: 8,
		padding: 16,
		marginTop: 8,
	},
	text: {
		color: "#fff",
		marginTop: 10,
		lineHeight: 18,
		fontSize: 15,
	},
	imageContainer: {
		width: "100%",
		height: 400,
		marginTop: 80,
		borderRadius: 8,
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: "100%",
		resizeMode: "cover",
	},
});
