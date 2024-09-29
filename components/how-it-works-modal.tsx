import {
	Modal,
	TouchableWithoutFeedback,
	View,
	Text,
	TouchableOpacity,
} from "react-native";
import OrderedList from "./ordered-list";
import { LinearGradient } from "expo-linear-gradient";

const benefixList = [
	"For Engaging on TikTok and Facebook posts to earn ₦1,200 every day.",
	"Performing Simple social Tasks",
	" Working Advert Jobs for Foreign brands to earn every week.",
];

export default function HowItWorksModal({
	modalVisible,
	setModalVisible,
	setRegisterModal,
}: {
	modalVisible: boolean;
	setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
	setRegisterModal: React.Dispatch<React.SetStateAction<boolean>>;
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
							How It Works
						</Text>
						<Text style={{ marginTop: 8, marginBottom: 16, color: "white" }}>
							Benefix is simply a Social Media business Update that can pay you
							every week, for doing these👇🏽👇🏽
						</Text>

						<OrderedList data={benefixList} />

						<View style={{ marginTop: 10 }}>
							<Text style={{ color: "white" }}>
								The best part is that Benefix Has Partnered with FaceBook,
								Instagram and TikTok so that you can Monetise your social media
								accounts and get paid every week..
							</Text>

							<Text style={{ color: "white", marginTop: 8 }}>
								You can make as much as ₦60,000 or more every week once you
								register on Benefix.... And all you need for Benefix is your
								WhatsApp, or any other social media accounts you have...
								(Referral is Optional 💯)
							</Text>
						</View>

						<TouchableOpacity onPress={() => setRegisterModal(true)}>
							<LinearGradient
								colors={["#FBA512", "#FB8412"]}
								style={{
									paddingHorizontal: 16,
									paddingVertical: 10,
									minWidth: 250,
									borderRadius: 8,
									justifyContent: "center",
									alignItems: "center",
									marginTop: 10,
								}}
							>
								<Text style={{ fontWeight: "bold" }}>How it works</Text>
							</LinearGradient>
						</TouchableOpacity>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</Modal>
	);
}
