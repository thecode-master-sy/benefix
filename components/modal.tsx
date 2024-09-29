import {
	Modal,
	TouchableWithoutFeedback,
	StyleSheet,
	View,
	TouchableOpacity,
	Text,
	Image,
	Linking,
} from "react-native";
import whatsapp from "@/assets/images/whatsapp-icon.png";
import direction from "@/assets/images/direction.png";
import telegram from "@/assets/images/telegram-icon.png";
import tiktok from "@/assets/images/tiktok-icon.png";
import userGroup from "@/assets/images/friends-icon.png";

import { LinearGradient } from "expo-linear-gradient";

export function ModalComponent({
	modalVisible,
	setModalVisible,
}: {
	modalVisible: boolean;
	setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={modalVisible}
			onRequestClose={() => setModalVisible(false)}
		>
			<TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
				<View
					style={{
						flex: 1,
						justifyContent: "flex-end",
						backgroundColor: "hsla(182, 71%, 9%, 0.5)",
					}}
				>
					<View
						style={{
							backgroundColor: "#020C0D",
							padding: 20,
							borderTopRightRadius: 12,
							borderTopLeftRadius: 12,
						}}
					>
						<Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>
							Get Registered Now!
						</Text>
						<Text style={{ marginTop: 8, color: "white" }}>
							Message our Verified Agent on whatsapp for your Benefix
							Registration
						</Text>
						<View style={{ alignItems: "flex-start", marginTop: 28 }}>
							<TouchableOpacity
								onPress={() =>
									Linking.openURL(
										"https://wa.me/2349139943683?text=I+want+to+pay+for+Benefix+Registration"
									)
								}
							>
								<LinearGradient
									style={{
										paddingHorizontal: 16,
										paddingVertical: 16,
										borderRadius: 8,
										flexDirection: "row",
										alignItems: "center",
										rowGap: 8,
										minWidth: 200,
										justifyContent: "center",
									}}
									colors={["#FBA512", "#FB8412"]}
								>
									<Text>Register</Text>
								</LinearGradient>
							</TouchableOpacity>
						</View>
						<View style={{ marginTop: 16 }}>
							<Text style={{ color: "white" }}>
								it is also important for you to join our verified social handles
								for more information on how Benefix works
							</Text>
						</View>
						<View
							style={{
								flexDirection: "row",
								columnGap: 10,
								marginTop: 16,
							}}
						>
							<TouchableOpacity
								style={styles.footerIcon}
								onPress={() =>
									Linking.openURL(
										"https://wa.me/2349139943683?text=I+want+to+pay+for+Benefix+Registration"
									)
								}
							>
								<Image source={whatsapp} resizeMode="contain" />
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.footerIcon}
								onPress={() =>
									Linking.openURL("https://t.me/benefixofficialpage")
								}
							>
								<Image source={telegram} resizeMode="contain" />
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.footerIcon}
								onPress={() =>
									Linking.openURL(
										"https://www.tiktok.com/@benefixappofficialpage?_t=8q4LEBdv56r&_r=1"
									)
								}
							>
								<Image source={tiktok} resizeMode="contain" />
							</TouchableOpacity>
							<View style={styles.footerIcon}>
								<Image source={userGroup} resizeMode="contain" />
							</View>
						</View>
						<Text style={{ color: "white", marginTop: 8}}>
							Follow our backup account for more info on benefix
						</Text>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</Modal>
	);
}

const styles = StyleSheet.create({
	footerIcon: {
		backgroundColor: "hsla(182, 71%, 9%, 0.5)",
		padding: 10,
		borderWidth: 1,
		borderColor: "hsla(182, 71%, 25%, 0.5)",
		borderRadius: 8,
	},
});
