import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const IPhone13ProMax6 = () => {
  return (
    <View style={styles.iphone13ProMax6}>
      <Image
        style={styles.bg4Icon}
        resizeMode="cover"
        source={require("../assets/bg-2.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.nextLocation, styles.lane309FlexBox]}>
          Next location
        </Text>
        <View style={styles.lane309Parent}>
          <Text style={[styles.lane309, styles.lane309Clr]}>{`Lane 309 `}</Text>
          <Image
            style={styles.shapeIcon}
            resizeMode="cover"
            source={require("../assets/shape2.png")}
          />
        </View>
      </View>
      <View style={styles.iphone13ProMax6Child} />
      <View style={[styles.iphone13ProMax6Item, styles.iphone13Layout]} />
      <View style={[styles.iphone13ProMax6Inner, styles.iphone13Layout]} />
      <View style={[styles.rectangleView, styles.iphone13Layout]} />
      <View style={[styles.iphone13ProMax6Child1, styles.iphone13Layout]} />
      <Image
        style={[styles.homeIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/home.png")}
      />
      <Image
        style={[styles.settingsIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/settings.png")}
      />
      <Image
        style={[styles.privacyTipIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/privacy-tip.png")}
      />
      <Image
        style={[styles.barChartIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/bar-chart.png")}
      />
      <View style={styles.iphone13ProMax6Child2} />
      <View style={[styles.elementsTimefalsetrue, styles.elementsPosition1]} />
      <Image
        style={styles.cellularConnectionIcon}
        resizeMode="cover"
        source={require("../assets/cellular-connection.png")}
      />
      <View style={[styles.elementsBatterynormaltrue, styles.elementsPosition]}>
        <View style={[styles.border, styles.borderPosition]} />
        <Image
          style={[styles.capIcon, styles.capIconLayout]}
          resizeMode="cover"
          source={require("../assets/cap.png")}
        />
        <View style={styles.capacity} />
      </View>
      <View style={[styles.elementsConnection5gtrue, styles.elementsPosition]}>
        <Text style={[styles.g, styles.gLayout]}>5G</Text>
      </View>
      <View
        style={[
          styles.elementsTimetruetrue,
          styles.elementsTimetruetruePosition,
        ]}
      >
        <Text style={[styles.time, styles.gLayout]}>9:41</Text>
        <Text style={styles.icon}>􀋒</Text>
      </View>
      <Image
        style={[
          styles.screenshot20230430At1000,
          styles.elementsTimetruetruePosition,
        ]}
        resizeMode="cover"
        source={require("../assets/screenshot-20230430-at-1000-1.png")}
      />
      <View style={styles.component28}>
        <Image
          style={[styles.component28Child, styles.capIconLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-41.png")}
        />
        <Text style={styles.text}>1</Text>
      </View>
      <Image
        style={styles.locationIcon}
        resizeMode="cover"
        source={require("../assets/location1.png")}
      />
      <View style={[styles.confirmPickup, styles.groupChildPosition]}>
        <View style={styles.confirmPickupChild} />
        <Image
          style={styles.shapeIcon1}
          resizeMode="cover"
          source={require("../assets/shape3.png")}
        />
        <Text style={[styles.confirmPickup1, styles.nextLocationTypo]}>
          Confirm pickup
        </Text>
      </View>
      <Image
        style={styles.fullscreenIcon}
        resizeMode="cover"
        source={require("../assets/fullscreen.png")}
      />
      <Text style={[styles.yourAssignment, styles.lane309Clr]}>
        Your Assignment
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 67,
    left: "50%",
    position: "absolute",
  },
  lane309FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  lane309Clr: {
    color: Color.black,
    textAlign: "center",
    position: "absolute",
  },
  iphone13Layout: {
    width: 107,
    backgroundColor: Color.black,
    height: 64,
    top: 862,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    top: 882,
    width: 24,
    position: "absolute",
  },
  elementsPosition1: {
    marginTop: -454,
    justifyContent: "center",
    alignItems: "center",
    top: "50%",
  },
  elementsPosition: {
    height: 13,
    top: 11,
    position: "absolute",
  },
  borderPosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  capIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  gLayout: {
    lineHeight: 17,
    letterSpacing: 0,
    color: Color.white,
    textAlign: "center",
  },
  elementsTimetruetruePosition: {
    marginLeft: -191,
    left: "50%",
    position: "absolute",
  },
  nextLocationTypo: {
    fontFamily: FontFamily.montserratBold,
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
  },
  bg4Icon: {
    marginTop: -463,
    width: 428,
    top: "50%",
    left: 0,
    position: "absolute",
    height: 926,
  },
  groupChild: {
    marginLeft: -188.5,
    backgroundColor: "rgba(217, 217, 217, 0.3)",
    borderRadius: Border.br_xl,
    top: 0,
    width: 377,
    height: 67,
  },
  nextLocation: {
    top: 19,
    left: 20,
    color: Color.orangered,
    width: 150,
    height: 30,
    textAlign: "center",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    position: "absolute",
    fontSize: FontSize.size_xl,
    alignItems: "center",
    display: "flex",
  },
  lane309: {
    fontSize: 18,
    width: 84,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    top: 0,
    left: 0,
    color: Color.black,
  },
  shapeIcon: {
    height: 15,
    width: 24,
  },
  lane309Parent: {
    top: 22,
    width: 124,
    height: 25,
    left: 215,
    position: "absolute",
  },
  rectangleParent: {
    top: 608,
    width: 377,
    height: 67,
    marginLeft: -185,
  },
  iphone13ProMax6Child: {
    borderColor: "#000",
    height: 64,
    top: 862,
    borderWidth: 1,
    borderStyle: "solid",
    left: 1,
    width: 428,
    position: "absolute",
    backgroundColor: Color.white,
  },
  iphone13ProMax6Item: {
    left: 1,
    width: 107,
  },
  iphone13ProMax6Inner: {
    left: 108,
  },
  rectangleView: {
    left: 215,
  },
  iphone13ProMax6Child1: {
    left: 322,
  },
  homeIcon: {
    left: 364,
  },
  settingsIcon: {
    left: 42,
  },
  privacyTipIcon: {
    left: 149,
  },
  barChartIcon: {
    left: 257,
  },
  iphone13ProMax6Child2: {
    height: 34,
    backgroundColor: Color.black,
    left: 1,
    top: 0,
    width: 428,
    position: "absolute",
  },
  elementsTimefalsetrue: {
    marginLeft: -197,
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
    borderColor: "#fff",
    opacity: 0.4,
    borderWidth: 1,
    borderStyle: "solid",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  capIcon: {
    height: "30.77%",
    width: "4.87%",
    top: "34.62%",
    bottom: "34.62%",
    left: "95.13%",
    opacity: 0.5,
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
    right: 10,
    width: 27,
    overflow: "hidden",
  },
  g: {
    top: "-8%",
    left: "-2.94%",
    color: Color.white,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  elementsConnection5gtrue: {
    marginLeft: 151,
    width: 17,
    left: "50%",
  },
  time: {
    fontSize: FontSize.size_mid,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemibold,
    color: Color.white,
  },
  icon: {
    lineHeight: 14,
    fontStyle: "italic",
    fontWeight: "100",
    fontFamily: FontFamily.montserratThinItalic,
    marginLeft: 2,
    color: Color.white,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  elementsTimetruetrue: {
    flexDirection: "row",
    marginTop: -454,
    justifyContent: "center",
    alignItems: "center",
    top: "50%",
  },
  screenshot20230430At1000: {
    top: 140,
    width: 383,
    height: 456,
    borderRadius: Border.br_xl,
  },
  component28Child: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  text: {
    top: "3.45%",
    left: "31.03%",
    fontFamily: FontFamily.iBMPlexSansBold,
    textAlign: "left",
    color: Color.white,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  component28: {
    top: 358,
    left: 120,
    width: 29,
    height: 29,
    position: "absolute",
  },
  locationIcon: {
    top: 343,
    left: 142,
    width: 28,
    height: 35,
    position: "absolute",
  },
  confirmPickupChild: {
    backgroundColor: "rgba(0, 154, 62, 0.74)",
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    borderRadius: Border.br_xl,
    position: "absolute",
    width: "100%",
  },
  shapeIcon1: {
    width: 46,
    height: 27,
  },
  confirmPickup1: {
    top: "28.36%",
    left: "15.36%",
    fontSize: FontSize.size_5xl,
    color: Color.white,
    textAlign: "center",
  },
  confirmPickup: {
    top: 774,
    width: 371,
    marginLeft: -185,
  },
  fullscreenIcon: {
    top: 551,
    left: 351,
    width: 45,
    height: 45,
    position: "absolute",
  },
  yourAssignment: {
    top: 73,
    left: 29,
    fontSize: FontSize.size_21xl,
    fontWeight: "800",
    fontFamily: FontFamily.montserratExtrabold,
  },
  iphone13ProMax6: {
    flex: 1,
    overflow: "hidden",
    height: 926,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default IPhone13ProMax6;
