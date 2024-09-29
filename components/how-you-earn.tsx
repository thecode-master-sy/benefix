import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import OrderedList from "./ordered-list";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";

const earningsList = [
	"Once you get Registered, you receive an Enrollment Cashback of ₦5,000, which you can withdraw anytime.",
	"You can do the Daily TikTok Social Job to get an extra ₦1,200 daily.",
	"You can play Anchor games and win up to ₦25,000 weekly.",
	"You can participate in daily Spillover Earnings, daily Anchor Tenacious Rewards, Spin to Win, and Weekly TikTok challenge to win amazing prizes 😍",
];

export default function HowYouEarn({
	setModalVisible,
}: {
	setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>
				Here's how you can earn on benefix, once you get registered
			</Text>

			<OrderedList data={earningsList} />

			<Text style={styles.text}>
				WITHDRAWAL IS THREE TIMES A WEEK WITH MINIMUM OF ₦10, 000
			</Text>

			<Text style={styles.text}>
				Now, Registration fee is a One-time payement of ₦7, 000...And after
				REGISTRATION, YOU WILL GET ADDED TO HOW TO MAKE ₦60k to ₦80k WEEKLY.
			</Text>

			<TouchableOpacity onPress={() => setModalVisible(true)}>
				<LinearGradient colors={["#FBA512", "#FB8412"]} style={styles.button}>
					<Text style={{ ...styles.text, ...styles.buttonText }}>
						Click here to register
					</Text>
				</LinearGradient>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		rowGap: 10,
		paddingHorizontal: 16,
	},
	title: {
		fontSize: 20,
		fontWeight: "900",
		color: "#fff",
	},
	text: {
		marginTop: 10,
		color: "#fff",
	},
	button: {
		paddingVertical: 8,
		borderRadius: 8,
		alignItems: "center",
		marginTop: 8,
	},
	buttonText: {
		fontSize: 18,
		color: "black",
		fontWeight: "700",
	},
});
