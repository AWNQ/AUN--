import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone13ProMax8 = () => {
  return (
    <View style={styles.iphone13ProMax8}>
      <Image
        style={[styles.bg6Icon, styles.bg6IconLayout]}
        resizeMode="cover"
        source={require("../assets/bg-2.png")}
      />
      <View style={[styles.iphone13ProMax8Child, styles.iphone13ChildBg]} />
      <Text style={[styles.youHaveReached, styles.youFlexBox]}>
        You have reached the shelter!
      </Text>
      <Text style={[styles.thankYouFor, styles.youFlexBox]}>
        Thank you for your service!
      </Text>
      <View style={styles.iphone13ProMax8Item} />
      <View style={[styles.iphone13ProMax8Inner, styles.iphone13ChildLayout]} />
      <View style={[styles.rectangleView, styles.iphone13ChildLayout]} />
      <View
        style={[styles.iphone13ProMax8Child1, styles.iphone13ChildLayout]}
      />
      <View
        style={[styles.iphone13ProMax8Child2, styles.iphone13ChildLayout]}
      />
      <Image
        style={[styles.homeIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/home.png")}
      />
      <Image
        style={[styles.settingsIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/settings.png")}
      />
      <Image
        style={[styles.privacyTipIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/privacy-tip.png")}
      />
      <Image
        style={[styles.barChartIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/bar-chart.png")}
      />
      <View style={[styles.iphone13ProMax8Child3, styles.iphone13ChildBg]} />
      <View style={[styles.elementsTimefalsetrue, styles.elementsFlexBox]} />
      <Image
        style={styles.cellularConnectionIcon}
        resizeMode="cover"
        source={require("../assets/cellular-connection.png")}
      />
      <View style={[styles.elementsBatterynormaltrue, styles.elementsPosition]}>
        <View style={[styles.border, styles.childPosition]} />
        <Image
          style={[styles.capIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/cap.png")}
        />
        <View style={styles.capacity} />
      </View>
      <View style={[styles.elementsConnection5gtrue, styles.elementsPosition]}>
        <Text style={[styles.g, styles.gLayout]}>5G</Text>
      </View>
      <View style={[styles.elementsTimetruetrue, styles.elementsFlexBox]}>
        <Text style={[styles.time, styles.gLayout]}>9:41</Text>
        <Text style={[styles.icon, styles.youFlexBox]}>􀋒</Text>
      </View>
      <Text style={[styles.assignmentComplete, styles.start1Typo]}>
        Assignment Complete
      </Text>
      <Image
        style={styles.shapeIcon}
        resizeMode="cover"
        source={require("../assets/shape.png")}
      />
      <View style={[styles.saved, styles.savedPosition]}>
        <View style={[styles.savedChild, styles.childPosition]} />
        <Text style={[styles.peopleSaved, styles.peopleTypo]}>
          People Saved
        </Text>
        <Image
          style={styles.shapeIcon}
          resizeMode="cover"
          source={require("../assets/shape.png")}
        />
        <View style={styles.savedItem} />
        <Text style={[styles.text, styles.textTypo]}>4</Text>
        <Text style={[styles.peopleSaved, styles.peopleTypo]}>
          People Saved
        </Text>
        <Image
          style={styles.shapeIcon}
          resizeMode="cover"
          source={require("../assets/shape.png")}
        />
        <Text style={[styles.text1, styles.textTypo]} />
      </View>
      <View style={[styles.remaining, styles.savedPosition]}>
        <View style={[styles.remainingChild, styles.childPosition]} />
        <Image
          style={styles.shapeIcon3}
          resizeMode="cover"
          source={require("../assets/shape1.png")}
        />
        <Text
          style={[styles.peopleRemaining, styles.peopleTypo]}
        >{`People Remaining `}</Text>
        <View style={styles.remainingItem} />
        <Text style={[styles.text, styles.textTypo]}>0</Text>
      </View>
      <View style={[styles.start, styles.startLayout]}>
        <View style={[styles.startChild, styles.childPosition]} />
        <Text style={[styles.start1, styles.startLayout]}>
          Start New Mission
        </Text>
        <Image
          style={[styles.arrowForwardIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-forward.png")}
        />
      </View>
      <Image
        style={[styles.rotationIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/rotation.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bg6IconLayout: {
    width: 428,
    left: 0,
  },
  iphone13ChildBg: {
    backgroundColor: Color.black,
    position: "absolute",
  },
  youFlexBox: {
    textAlign: "center",
    color: Color.white,
  },
  iphone13ChildLayout: {
    width: 107,
    height: 64,
    top: 862,
    backgroundColor: Color.black,
    position: "absolute",
  },
  iconLayout1: {
    height: 24,
    width: 24,
    top: 882,
    position: "absolute",
  },
  elementsFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  elementsPosition: {
    height: 13,
    top: 10,
    position: "absolute",
  },
  childPosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  gLayout: {
    lineHeight: 17,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.white,
  },
  start1Typo: {
    fontFamily: FontFamily.montserratExtrabold,
    fontWeight: "800",
    textAlign: "center",
  },
  savedPosition: {
    height: 67,
    marginLeft: -185,
    width: 371,
    left: "50%",
    position: "absolute",
  },
  peopleTypo: {
    left: "16.17%",
    top: "26.87%",
    textAlign: "center",
    fontFamily: FontFamily.iBMPlexSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  textTypo: {
    color: Color.orangered,
    fontSize: FontSize.size_21xl,
    top: "11.94%",
    textAlign: "center",
    fontFamily: FontFamily.iBMPlexSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  startLayout: {
    width: 371,
    position: "absolute",
  },
  iconPosition: {
    top: "50%",
    position: "absolute",
  },
  bg6Icon: {
    marginTop: -463,
    top: "50%",
    position: "absolute",
    height: 926,
  },
  iphone13ProMax8Child: {
    marginLeft: -191,
    top: 140,
    width: 383,
    height: 456,
    borderRadius: Border.br_xl,
    left: "50%",
  },
  youHaveReached: {
    marginLeft: -167,
    top: 164,
    fontFamily: FontFamily.iBMPlexSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  thankYouFor: {
    marginLeft: -152,
    top: 195,
    fontFamily: FontFamily.iBMPlexSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  iphone13ProMax8Item: {
    borderColor: "#000",
    height: 64,
    top: 862,
    borderWidth: 1,
    borderStyle: "solid",
    width: 428,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  iphone13ProMax8Inner: {
    left: 0,
  },
  rectangleView: {
    left: 107,
  },
  iphone13ProMax8Child1: {
    left: 214,
  },
  iphone13ProMax8Child2: {
    left: 321,
  },
  homeIcon: {
    left: 363,
  },
  settingsIcon: {
    left: 41,
  },
  privacyTipIcon: {
    left: 148,
  },
  barChartIcon: {
    left: 256,
  },
  iphone13ProMax8Child3: {
    top: -1,
    height: 34,
    width: 428,
    left: 0,
  },
  elementsTimefalsetrue: {
    marginLeft: -198,
    marginTop: -455,
    justifyContent: "center",
    left: "50%",
    top: "50%",
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
    bottom: "0%",
    top: "0%",
    height: "100%",
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
    flexDirection: "row",
    marginTop: -455,
    justifyContent: "center",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  assignmentComplete: {
    top: 77,
    left: 10,
    fontSize: 34,
    color: Color.black,
    position: "absolute",
  },
  shapeIcon: {
    width: 29,
    height: 20,
  },
  savedChild: {
    backgroundColor: Color.forestgreen_100,
    right: "0%",
    borderRadius: Border.br_xl,
    width: "100%",
  },
  peopleSaved: {
    color: Color.white,
  },
  savedItem: {
    top: "10.45%",
    bottom: "8.96%",
    left: "82.75%",
    right: "2.7%",
    width: "14.56%",
    height: "80.6%",
    borderRadius: Border.br_xl,
    position: "absolute",
    backgroundColor: Color.white,
  },
  text: {
    left: "86.79%",
  },
  text1: {
    left: "90.03%",
  },
  saved: {
    top: 620,
  },
  remainingChild: {
    backgroundColor: Color.goldenrod,
    right: "0%",
    borderRadius: Border.br_xl,
    width: "100%",
  },
  shapeIcon3: {
    width: 22,
    height: 26,
  },
  peopleRemaining: {
    color: Color.black,
  },
  remainingItem: {
    bottom: "7.46%",
    top: "11.94%",
    left: "82.75%",
    right: "2.7%",
    width: "14.56%",
    height: "80.6%",
    borderRadius: Border.br_xl,
    position: "absolute",
    backgroundColor: Color.white,
  },
  remaining: {
    top: 697,
  },
  startChild: {
    backgroundColor: Color.forestgreen_200,
    right: "0%",
    borderRadius: Border.br_xl,
    width: "100%",
  },
  start1: {
    height: "42.37%",
    top: "28.81%",
    fontSize: FontSize.size_xl,
    display: "flex",
    fontFamily: FontFamily.montserratExtrabold,
    fontWeight: "800",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    color: Color.white,
    left: 0,
  },
  arrowForwardIcon: {
    height: "49.72%",
    width: "7.91%",
    top: "25.42%",
    right: "5.3%",
    bottom: "24.86%",
    left: "86.79%",
  },
  start: {
    top: 774,
    left: 29,
    height: 59,
  },
  rotationIcon: {
    marginTop: -236,
    marginLeft: -180,
    width: 360,
    height: 360,
    left: "50%",
  },
  iphone13ProMax8: {
    flex: 1,
    overflow: "hidden",
    height: 926,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default IPhone13ProMax8;
