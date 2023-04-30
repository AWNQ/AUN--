import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const IPhone13ProMax4 = () => {
  return (
    <View style={styles.iphone13ProMax4}>
      <Image
        style={[styles.bg3Icon, styles.bg3IconPosition]}
        resizeMode="cover"
        source={require("../assets/bg-2.png")}
      />
      <Image
        style={styles.alarmIcon}
        resizeMode="cover"
        source={require("../assets/alarm.png")}
      />
      <View style={[styles.iphone13ProMax4Child, styles.bg3IconPosition]} />
      <View style={[styles.elementsTimefalsetrue, styles.elementsFlexBox]} />
      <Image
        style={styles.cellularConnectionIcon}
        resizeMode="cover"
        source={require("../assets/cellular-connection.png")}
      />
      <View style={[styles.elementsBatterynormaltrue, styles.elementsPosition]}>
        <View style={[styles.border, styles.childPosition1]} />
        <Image
          style={[styles.capIcon, styles.childPosition]}
          resizeMode="cover"
          source={require("../assets/cap.png")}
        />
        <View style={styles.capacity} />
      </View>
      <View style={[styles.elementsConnection5gtrue, styles.elementsPosition]}>
        <Text style={[styles.g, styles.gFlexBox]}>5G</Text>
      </View>
      <View style={[styles.elementsTimetruetrue, styles.listParentPosition]}>
        <Text style={[styles.time, styles.gFlexBox]}>9:41</Text>
        <Text style={[styles.icon, styles.gFlexBox]}>􀋒</Text>
      </View>
      <Text style={styles.yourAssignmentIs}>Your assignment is ready!</Text>
      <View style={styles.view}>
        <View style={[styles.viewChild, styles.childPosition]} />
        <Text style={styles.view1}>View</Text>
      </View>
      <View style={[styles.listParent, styles.listParentPosition]}>
        <View style={styles.list}>
          <View style={[styles.listChild, styles.childPosition]} />
          <Text style={[styles.settings, styles.settingsTypo]}>Settings</Text>
        </View>
        <View style={styles.list}>
          <View style={[styles.listChild, styles.childPosition]} />
          <Text style={[styles.settings, styles.settingsTypo]}>Account</Text>
        </View>
        <View style={styles.list}>
          <View style={[styles.listChild, styles.childPosition]} />
          <Text style={[styles.settings2, styles.settingsTypo]}>News</Text>
        </View>
        <View style={styles.list}>
          <View style={[styles.listChild, styles.childPosition]} />
          <Text style={[styles.settings3, styles.settingsTypo]}>Home</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg3IconPosition: {
    left: 0,
    width: 428,
    position: "absolute",
  },
  elementsFlexBox: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: -454,
    top: "50%",
  },
  elementsPosition: {
    height: 13,
    top: 11,
    position: "absolute",
  },
  childPosition1: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  childPosition: {
    right: "0%",
    position: "absolute",
  },
  gFlexBox: {
    textAlign: "center",
    color: Color.white,
  },
  listParentPosition: {
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  settingsTypo: {
    fontFamily: FontFamily.montserratBold,
    top: "34.38%",
    fontSize: FontSize.size_base,
    fontWeight: "700",
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  bg3Icon: {
    marginTop: -463,
    width: 428,
    top: "50%",
    left: 0,
    height: 926,
  },
  alarmIcon: {
    top: 290,
    left: 157,
    width: 114,
    height: 114,
    position: "absolute",
  },
  iphone13ProMax4Child: {
    top: 0,
    height: 34,
    backgroundColor: Color.black,
    width: 428,
  },
  elementsTimefalsetrue: {
    marginLeft: -198,
    left: "50%",
    position: "absolute",
  },
  cellularConnectionIcon: {
    width: 20,
    height: 12,
  },
  border: {
    width: "91.47%",
    right: "8.53%",
    borderRadius: Border.br_9xs,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    opacity: 0.4,
    position: "absolute",
  },
  capIcon: {
    height: "30.77%",
    width: "4.87%",
    top: "34.62%",
    bottom: "34.62%",
    left: "95.13%",
    maxWidth: "100%",
    maxHeight: "100%",
    opacity: 0.5,
    overflow: "hidden",
  },
  capacity: {
    height: "69.23%",
    width: "62.2%",
    top: "15.38%",
    right: "30.48%",
    bottom: "15.38%",
    left: "7.32%",
    borderRadius: Border.br_11xs,
    position: "absolute",
    backgroundColor: Color.white,
  },
  elementsBatterynormaltrue: {
    right: 11,
    width: 27,
    overflow: "hidden",
  },
  g: {
    top: "-8%",
    left: "-2.94%",
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    lineHeight: 17,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.white,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  elementsConnection5gtrue: {
    marginLeft: 150,
    width: 17,
    left: "50%",
  },
  time: {
    fontSize: FontSize.size_mid,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemibold,
    lineHeight: 17,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.white,
  },
  icon: {
    lineHeight: 14,
    fontStyle: "italic",
    fontWeight: "100",
    fontFamily: FontFamily.montserratThinItalic,
    marginLeft: 2,
    fontSize: FontSize.size_sm,
  },
  elementsTimetruetrue: {
    marginLeft: -192,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -454,
    top: "50%",
  },
  yourAssignmentIs: {
    top: 429,
    left: 47,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.iBMPlexSansBold,
    color: Color.black,
    display: "flex",
    width: 336,
    height: 200,
    fontWeight: "700",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  viewChild: {
    borderRadius: Border.br_xl,
    backgroundColor: "rgba(34, 53, 139, 0.8)",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    right: "0%",
  },
  view1: {
    marginLeft: -21.5,
    top: "28.26%",
    fontWeight: "800",
    fontFamily: FontFamily.montserratExtrabold,
    textAlign: "left",
    fontSize: FontSize.size_base,
    color: Color.white,
    left: "50%",
    position: "absolute",
  },
  view: {
    top: 583,
    left: 136,
    width: 155,
    height: 46,
    position: "absolute",
  },
  listChild: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    backgroundColor: Color.black,
    width: "100%",
    right: "0%",
  },
  settings: {
    left: "17.76%",
  },
  list: {
    width: 107,
    height: 64,
  },
  settings2: {
    left: "28.97%",
  },
  settings3: {
    left: "27.1%",
  },
  listParent: {
    marginLeft: -214,
    top: 862,
    paddingRight: Padding.p_50xl,
    height: 64,
    width: 428,
  },
  iphone13ProMax4: {
    flex: 1,
    overflow: "hidden",
    height: 926,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default IPhone13ProMax4;
