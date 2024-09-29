import { View, Text, Image, StyleSheet } from "react-native";
import countDownIcon from "@/assets/images/countdown-icon.png";
import benefixTiktok from "@/assets/images/benefix-tiktok.jpg";
import multiNational from "@/assets/images/benefix-multinational.jpg";
import earningModel from "@/assets/images/benefix-earning-model.jpg";
import benefixCac from "@/assets/images/benefix-cac.jpg";
import HowYouEarn from "./how-you-earn";
import React from "react";

export default function RemainingBenefixSections({
	setModalVisible,
}: {
	setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	return (
		<View style={styles.container}>
			<View>
				<View style={styles.pellet}>
					<Image
						source={countDownIcon}
						style={styles.icon}
						alt="countdown icon"
					/>
					<Text style={styles.text}>waitlist</Text>
				</View>

				<View style={styles.imageContainer}>
					<Image
						source={benefixTiktok}
						alt="benefix tiktok"
						style={styles.image}
					/>
				</View>
			</View>
			<HowYouEarn setModalVisible={setModalVisible}/>
			<View>
				<View style={styles.pellet}>
					<Image
						source={countDownIcon}
						style={styles.icon}
						alt="countdown icon"
					/>
					<Text style={styles.text}>we are multinational</Text>
				</View>

				<View style={styles.imageContainer}>
					<Image
						source={multiNational}
						alt="benefix multinational"
						style={styles.image}
					/>
				</View>
			</View>
			<View>
				<View style={styles.pellet}>
					<Image
						source={countDownIcon}
						style={styles.icon}
						alt="countdown icon"
					/>
					<Text style={styles.text}>see our earning model</Text>
				</View>

				<View
					style={{
						...styles.imageContainer,
						...styles.earningModelImageContainer,
					}}
				>
					<Image
						source={earningModel}
						alt="benefix earning model"
						style={styles.image}
					/>
				</View>
			</View>
			<View>
				<View style={styles.pellet}>
					<Image
						source={countDownIcon}
						style={styles.icon}
						alt="countdown icon"
					/>
					<Text style={styles.text}>we are registered</Text>
				</View>

				<View style={styles.imageContainer}>
					<Image
						source={benefixCac}
						alt="benefix earning model"
						style={styles.image}
					/>
				</View>

				<View style={styles.pelletSecondary}>
					<Text style={styles.text}>
						Benefix is registered and safe for every user
					</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 80,
		paddingHorizontal: 16,
		rowGap: 80,
	},
	icon: {
		width: 20,
		height: 20,
	},
	text: {
		color: "white",
	},
	pellet: {
		backgroundColor: "hsla(182, 71%, 9%, 0.5)",
		maxWidth: 200,
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 16,
		paddingVertical: 13,
		flexDirection: "row",
		borderRadius: 999,
		gap: 8,
		borderWidth: 1,
		borderColor: "hsla(182, 71%, 25%, 0.5)",
		marginHorizontal: "auto",
	},
	imageContainer: {
		width: "100%",
		height: 400,
		marginTop: 40,
		borderRadius: 8,
		overflow: "hidden",
	},
	earningModelImageContainer: {
		height: 450,
	},
	image: {
		width: "100%",
		height: "100%",
		resizeMode: "cover",
	},
	pelletSecondary: {
		backgroundColor: "hsla(182, 71%, 9%, 0.5)",
		padding: 16,
		marginTop: 20,
		borderRadius: 8,
	},
	footer: {},
});
