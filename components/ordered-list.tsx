import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const OrderedList = ({ data }: { data: string[] }) => {
	return (
		<FlatList
			data={data}
			renderItem={({ item, index }) => (
				<View style={styles.item}>
					<Text style={styles.index}>{index + 1}. </Text>
					<Text style={styles.text}>{item}</Text>
				</View>
			)}
			keyExtractor={(item, index) => index.toString()}
		/>
	);
};

const styles = StyleSheet.create({
	item: {
		flexDirection: "row",
		marginBottom: 10,
	},
	index: {
		fontWeight: "bold",
		color: "white",
	},
	text: {
		fontSize: 15,
		color: "white",
		lineHeight: 18
	},
});

export default OrderedList;
