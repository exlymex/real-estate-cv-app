import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import icons from "@/constants/icons";
import images from "@/constants/images";

const SignIn = () => {
    const handleLogin = () => {
        console.log(1241)
    }
    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView contentContainerClassName="flex-1">
                <Image source={images.onboarding} className="w-full flex-1" resizeMode="contain"/>
            </ScrollView>
            <View className="px-10">
                <Text className="text-base text-center uppercase font-rubik text-black-200">
                    Welcome to ReState
                </Text>

                <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
                    Let's Get You Closer to {"\n"}
                    <Text className="text-primary-300">Your Ideal Home</Text>
                </Text>
                <Text className="text-lg font-rubik text-black-200 text-center mt-12">
                    Login to Restate with Google
                </Text>

                {/*<TouchableOpacity*/}
                {/*    onPress={handleLogin}*/}
                {/*    className="bg-primary-300 py-3 mt-4 rounded-lg">*/}
                {/*    <Text className="text-center text-white font-rubik text-lg">Sign In</Text>*/}
                {/*</TouchableOpacity>*/}

                <TouchableOpacity
                    onPress={handleLogin}
                    className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
                >
                    <View className="flex flex-row items-center justify-center">
                        <Image source={icons.google} className="w-5 h-5" resizeMode="contain"/>
                        <Text className="text=lg font-rubik-medium text-black-300 ml-2">
                            Continue with Google
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
};

export default SignIn;