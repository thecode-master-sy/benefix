import AboutSection from "@/components/about-section";
import HeroSection from "@/components/hero-section";
import NavBarComponent from "@/components/navbar";
import RemainingBenefixSections from "@/components/remaining-sections";
import { Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Footer from "@/components/footer";

export default function Homescreen() {
	return (
		<FlatList
			data={[{}]}
			renderItem={({ item }) => (
				<SafeAreaView style={Styles.container}>
					<ScrollView>
						<NavBarComponent />
						<HeroSection />
						<AboutSection />
						<RemainingBenefixSections />
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
