import AboutSection from "@/components/about-section";
import HeroSection from "@/components/hero-section";
import NavBarComponent from "@/components/navbar";
import RemainingBenefixSections from "@/components/remaining-sections";
import { Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Footer from "@/components/footer";
import { ModalComponent } from "@/components/modal";
import { useState, useEffect } from "react";
import { Audio } from "expo-av";

export default function Homescreen() {
	const [modalVisible, setModalVisible] = useState(false);
	const [sound, setSound] = useState<Audio.Sound | null>(null);

	async function playSound() {
		const { sound } = await Audio.Sound.createAsync(
			require("../assets/audio/sound.mp3"),
			{
				shouldPlay: true,
				isLooping: true,
			}
		);
		setSound(sound);

		await sound.playAsync();
	}

	useEffect(() => {
		playSound();

		return () => {
			if (sound) {
				sound.unloadAsync();
			}
		};
	}, []);
	return (
		<FlatList
			data={[{}]}
			renderItem={({ item }) => (
				<SafeAreaView style={Styles.container}>
					<ScrollView>
						<NavBarComponent setModalVisible={setModalVisible} />
						<HeroSection setRegisterModal={setModalVisible} />
						<AboutSection />
						<ModalComponent
							modalVisible={modalVisible}
							setModalVisible={setModalVisible}
						/>
						<RemainingBenefixSections setModalVisible={setModalVisible} />
						<Footer />
					</ScrollView>
					<StatusBar translucent backgroundColor="transparent" />
				</SafeAreaView>
			)}
			keyExtractor={(item, index) => index.toString()}
			showsVerticalScrollIndicator={false}
		/>
	);
}

const Styles = StyleSheet.create({
	container: {
		minHeight: "100%",
		backgroundColor: "#020C0D",
	},
});
