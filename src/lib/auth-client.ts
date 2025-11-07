import { expoClient } from "@better-auth/expo/client";
import { createAuthClient } from "better-auth/client";
import * as SecureStore from "expo-secure-store";
import Constants from "expo-constants";
import { apiKeyClient } from "better-auth/client/plugins"

export const authClient = createAuthClient({
	baseURL: Constants.expoConfig?.extra?.betterAuthUrl || "http://localhost:8081",
	disableDefaultFetchPlugins: true,
	plugins: [
		expoClient({
			scheme: "better-auth",
			storage: SecureStore,
		}),
		apiKeyClient()
	],
});
