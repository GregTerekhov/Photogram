// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { CreatePost, Posts, Profile } from "tabScreens";
// import { LinkGoBack, LinkLogOut } from "components";
// import PostsIcon from "assets/svg/grid.svg";
// import CreatePostsIcon from "assets/svg/add.svg";
// import ProfileIcon from "assets/svg/user.svg";
// import { View } from "react-native";
// import styles from "styles/screens/tabBar";

// const Tab = createBottomTabNavigator();

// const TabStack = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="Posts"
//       screenOptions={{
//         headerTitleAlign: "center",
//         headerStyle: {
//           borderBottomWidth: 1,
//           borderBottomColor: "#b3b3b3",
//         },
//         tabBarShowLabel: false,
//         tabBarStyle: [
//           {
//             height: 71,
//             borderTopWidth: 1,
//             borderTopColor: "#b3b3b3",
//           },
//         ],
//       }}
//     >
//       <Tab.Screen
//         name="Posts"
//         component={Posts}
//         options={{
//           title: "Публікації",
//           headerRight: () => <LinkLogOut />,
//           tabBarIcon: () => <PostsIcon width={24} height={24} fill="#212121" />,
//         }}
//       />
//       <Tab.Screen
//         name="CreatePost"
//         component={CreatePost}
//         options={({ route }) => ({
//           tabBarStyle: { display: "none" },
//           title: "Створити публікацію",
//           headerLeft: () => <LinkGoBack />,
//           tabBarIcon: () => (
//             <View
//               style={
//                 route.name === "Posts"
//                   ? styles.activeTabBarIconContainer
//                   : styles.tabBarIconContainer
//               }
//             >
//               <CreatePostsIcon
//                 width={13}
//                 height={13}
//                 fill={route.name === "Posts" ? "#fff" : "#212121"}
//               />
//             </View>
//           ),
//         })}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           title: "Профіль",
//           headerShown: false,
//           tabBarIcon: ({ focused }) => (
//             <View
//               style={
//                 focused
//                   ? styles.activeTabBarIconContainer
//                   : styles.tabBarIconContainer
//               }
//             >
//               <ProfileIcon
//                 width={24}
//                 height={24}
//                 fill={focused ? "#fff" : "#212121"}
//               />
//             </View>
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default TabStack;
