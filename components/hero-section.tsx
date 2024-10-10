import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BenefixFixTap from "@/assets/images/benefix-fixtap.jpg";
import HowItWorksModal from "./how-it-works-modal";
import { useState } from "react";

export default function HeroSection({
	setRegisterModal,
}: {
	setRegisterModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image style={styles.image} source={BenefixFixTap} />
				<LinearGradient
					colors={["transparent", "#020C0D"]}
					style={styles.gradient}
				/>
				<TouchableOpacity
					onPress={() => setModalVisible(true)}
					style={{ position: "absolute", bottom: 16, left: 16 }}
				>
					<LinearGradient
						colors={["#FBA512", "#FB8412"]}
						style={{
							paddingHorizontal: 25,
							paddingVertical: 15,
							minWidth: 250,
							borderRadius: 8,
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Text style={{ fontWeight: "bold" }}>How it works</Text>
					</LinearGradient>
				</TouchableOpacity>
			</View>
			<HowItWorksModal
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
				setRegisterModal={setRegisterModal}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		position: "relative",
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
	gradient: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		height: "70%",
	},
});
