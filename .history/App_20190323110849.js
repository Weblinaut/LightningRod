import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';

Mapbox.setAccessToken(
	'pk.eyJ1Ijoid2VibGluYXV0IiwiYSI6ImNqdGxtb2ZzcDBlYzE0NG8yN2E4ZndlN2wifQ.Fg-IDJv6fyGo-hlR9mvo1Q'
);
export default class MyComponent extends Component {
	renderAnnotations() {
		return (
			<Mapbox.PointAnnotation
				key="pointAnnotation"
				id="pointAnnotation"
				coordinate={[11.254, 43.772]}>
				<View style={styles.annotationContainer}>
					<View style={styles.annotationFill} />
				</View>
				<Mapbox.Callout title="An annotation here!" />
			</Mapbox.PointAnnotation>
		);
	}

	render() {
		return (
			<View style={styles.container}>
				<Mapbox.MapView
					styleURL={Mapbox.StyleURL.Street}
					zoomLevel={15}
					centerCoordinate={[11.256, 43.77]}
					style={styles.container}>
					{this.renderAnnotations()}
				</Mapbox.MapView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	map: {
		height: 400,
		marginTop: 80
	},
	annotationContainer: {
		width: 30,
		height: 30,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
		borderRadius: 15
	},
	annotationFill: {
		width: 30,
		height: 30,
		borderRadius: 15,
		backgroundColor: 'blue',
		transform: [{ scale: 0.6 }]
	}
});