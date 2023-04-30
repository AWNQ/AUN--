import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const IPhone13ProMax1 = () => {
  return (
    <View style={styles.iphone13ProMax1}>
      <Image
        style={[styles.bg1Icon, styles.bg1IconPosition]}
        resizeMode="cover"
        source={require("../assets/bg-2.png")}
      />
      <View style={[styles.iphone13ProMax1Child, styles.childBg]} />
      <View style={[styles.elementsTimefalsetrue, styles.elementsFlexBox]} />
      <Image
        style={styles.cellularConnectionIcon}
        resizeMode="cover"
        source={require("../assets/cellular-connection.png")}
      />
      <View style={[styles.elementsBatterynormaltrue, styles.elementsPosition]}>
        <View style={[styles.border, styles.childPosition]} />
        <Image
          style={[styles.capIcon, styles.toggleLayout]}
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
      <Image
        style={styles.logoawnq2Icon}
        resizeMode="cover"
        source={require("../assets/logoawnq-2.png")}
      />
      <Text style={styles.helperMode}>Helper mode</Text>
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
      <View style={styles.toggleOn}>
        <Image
          style={[styles.toggleOnChild, styles.toggleLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-1.png")}
        />
        <Image
          style={[styles.toggleOnItem, styles.toggleLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Text style={[styles.off, styles.onTypo]}>OFF</Text>
        <Text style={[styles.on, styles.onTypo]}>ON</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg1IconPosition: {
    left: 0,
    top: 0,
    width: 428,
  },
  childBg: {
    backgroundColor: Color.black,
    position: "absolute",
  },
  elementsFlexBox: {
    alignItems: "center",
    justifyContent: "center",
    top: "50%",
    marginTop: -454,
  },
  elementsPosition: {
    height: 13,
    top: 11,
    position: "absolute",
  },
  childPosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  toggleLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
    fontSize: FontSize.size_base,
    top: "34.38%",
    fontWeight: "700",
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  onTypo: {
    fontSize: FontSize.size_xl,
    top: "22.45%",
    textAlign: "left",
    fontFamily: FontFamily.iBMPlexSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  bg1Icon: {
    width: 428,
    position: "absolute",
    height: 926,
  },
  iphone13ProMax1Child: {
    height: 34,
    width: 428,
    left: 0,
    top: 0,
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
    opacity: 0.5,
    right: "0%",
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
    top: "50%",
    marginTop: -454,
  },
  logoawnq2Icon: {
    marginLeft: -140,
    top: 106,
    width: 279,
    height: 81,
    left: "50%",
    position: "absolute",
  },
  helperMode: {
    marginLeft: -121,
    top: 281,
    fontSize: FontSize.size_21xl,
    color: Color.black,
    width: 247,
    height: 52,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 3,
    },
    textShadowRadius: 2,
    textAlign: "left",
    fontFamily: FontFamily.iBMPlexSansBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  listChild: {
    right: "0%",
    backgroundColor: Color.black,
    position: "absolute",
    width: "100%",
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
  toggleOnChild: {
    borderRadius: 100,
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  toggleOnItem: {
    height: "91.84%",
    width: "47.37%",
    top: "4.08%",
    right: "50.53%",
    bottom: "4.08%",
    left: "2.11%",
  },
  off: {
    left: "53.68%",
    color: Color.white,
    top: "22.45%",
  },
  on: {
    left: "11.58%",
    color: "rgba(255, 255, 255, 0)",
  },
  toggleOn: {
    marginLeft: -47,
    top: 390,
    width: 95,
    height: 49,
    left: "50%",
    position: "absolute",
  },
  iphone13ProMax1: {
    flex: 1,
    overflow: "hidden",
    height: 926,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default IPhone13ProMax1;
