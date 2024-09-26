import {
	StyleSheet,
	View,
	Image,
	Text,
	TouchableOpacity,
	Linking,
} from "react-native";
import countDownIcon from "@/assets/images/countdown-icon.png";
import whatsapp from "@/assets/images/whatsapp-icon.png";
import telegram from "@/assets/images/telegram-icon.png";
import tiktok from "@/assets/images/tiktok-icon.png";
import userGroup from "@/assets/images/friends-icon.png";
import logo from "@/assets/images/benefix-logo.png";

export default function Footer() {
	return (
		<View style={styles.container}>
			<View style={styles.pellet}>
				<Image
					source={countDownIcon}
					style={styles.icon}
					alt="countdown icon"
				/>
				<Text style={styles.text}>Join us</Text>
			</View>

			<View style={{marginTop: 20}}>
				<View style={{flexDirection: "row", columnGap: 10, justifyContent: "center"}}>
					<TouchableOpacity style={styles.footerIcon}>
						<Image source={whatsapp} resizeMode="contain" />
					</TouchableOpacity>
					<View style={styles.footerIcon}>
						<Image source={telegram} resizeMode="contain" />
					</View>
					<View
						style={styles.footerIcon}
					>
						<Image source={tiktok} resizeMode="contain" />
					</View>
					<View
						style={styles.footerIcon}
					>
						<Image source={userGroup} resizeMode="contain" />
					</View>
				</View>
			</View>

            <View style={styles.logoContainer}>
				<Image source={logo} style={styles.logo} alt="logo" />
			</View>


			<View style={{ alignItems: "center", justifyContent: "center", padding: 8 }}>
				<Text style={{ color: "white", textAlign: "center"}}>
					All rights reserved @Anchor 2024
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		marginTop: 80,
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
    logoContainer: {
		position: "relative",
		width: 150,
		height: 50,
		overflow: "hidden",
		// borderWidth: 1,
		// borderColor: "white"
        marginHorizontal: "auto",
        marginTop: 8
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
	image: {
		width: "100%",
		height: "100%",
		resizeMode: "cover",
	},
    footerIcon: {
        backgroundColor: "hsla(182, 71%, 9%, 0.5)",
        padding: 10,
        borderWidth: 1,
        borderColor: "hsla(182, 71%, 25%, 0.5)",
        borderRadius: 8
    }
});
