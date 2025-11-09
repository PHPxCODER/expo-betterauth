import type { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
	...config,
	name: "Better Auth",
	slug: "expo-betterauth",
	scheme: "better-auth",
	version: "0.1.0",
	orientation: "portrait",
	icon: "./assets/icon.png",
	owner: "rdp.datacenter",
	userInterfaceStyle: "automatic",
	splash: {
		image: "./assets/icon.png",
		resizeMode: "contain",
		backgroundColor: "#1F104A",
	},
	web: {
		output: "static",
		bundler: "metro",
	},
	updates: {
		fallbackToCacheTimeout: 0,
	},
	assetBundlePatterns: ["**/*"],
	ios: {
		bundleIdentifier: "your.bundle.identifier",
		supportsTablet: true,
	},
	android: {
		package: "your.bundle.identifier",
		adaptiveIcon: {
			foregroundImage: "./assets/icon.png",
			backgroundColor: "#1F104A",
		},
	},
	extra: {
	  eas: {
	    projectId: "d732bd68-36b7-437c-b5f6-ca5dadf93e53",
		betterauthSecret: process.env.BETTERAUTH_SECRET,
		betterAuthUrl: process.env.BETTER_AUTH_URL || "http://localhost:8081",
	  },
	},
	experiments: {
		tsconfigPaths: true,
		typedRoutes: true,
	},
	plugins: [
		[
			"expo-router",
			{
				origin: "http://localhost:8081",
			},
		],
		"expo-secure-store",
		"expo-font",
	],
});
