import * as React from "react";
import { Image, StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const IPhone13ProMax7 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13ProMax7}>
      <Pressable
        style={styles.bg5}
        onPress={() => navigation.navigate("IPhone13ProMax8")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/bg-2.png")}
        />
      </Pressable>
      <Image
        style={styles.shapeIcon}
        resizeMode="cover"
        source={require("../assets/shape.png")}
      />
      <View style={styles.iphone13ProMax7Child} />
      <View style={[styles.iphone13ProMax7Item, styles.iphone13Layout]} />
      <View style={[styles.iphone13ProMax7Inner, styles.iphone13Layout]} />
      <View style={[styles.rectangleView, styles.iphone13Layout]} />
      <View style={[styles.iphone13ProMax7Child1, styles.iphone13Layout]} />
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
      <View style={styles.iphone13ProMax7Child2} />
      <View style={[styles.elementsTimefalsetrue, styles.elementsFlexBox]} />
      <Image
        style={styles.cellularConnectionIcon}
        resizeMode="cover"
        source={require("../assets/cellular-connection.png")}
      />
      <View style={[styles.elementsBatterynormaltrue, styles.elementsPosition]}>
        <View style={[styles.border, styles.borderPosition]} />
        <Image
          style={[styles.capIcon, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/cap.png")}
        />
        <View style={styles.capacity} />
      </View>
      <View style={[styles.elementsConnection5gtrue, styles.elementsPosition]}>
        <Text style={[styles.g, styles.gFlexBox]}>5G</Text>
      </View>
      <View style={[styles.elementsTimetruetrue, styles.mapPosition]}>
        <Text style={[styles.time, styles.gFlexBox]}>9:41</Text>
        <Text style={[styles.icon1, styles.gFlexBox]}>􀋒</Text>
      </View>
      <Text style={[styles.yourAssignment, styles.textTypo1]}>
        Your Assignment
      </Text>
      <View style={[styles.saved, styles.savedPosition]}>
        <View style={[styles.savedChild, styles.childPosition]} />
        <Text style={[styles.peopleSaved, styles.textTypo]}>People Saved</Text>
        <Image
          style={styles.shapeIcon}
          resizeMode="cover"
          source={require("../assets/shape.png")}
        />
        <View style={[styles.savedItem, styles.itemLayout]} />
        <Text style={[styles.text, styles.textPosition]}>1</Text>
        <Text style={[styles.peopleSaved, styles.textTypo]}>People Saved</Text>
        <Image
          style={styles.shapeIcon}
          resizeMode="cover"
          source={require("../assets/shape.png")}
        />
        <Text style={[styles.text, styles.textPosition]}>1</Text>
      </View>
      <View style={[styles.remaining, styles.savedPosition]}>
        <View style={[styles.remainingChild, styles.childPosition]} />
        <Image
          style={styles.shapeIcon3}
          resizeMode="cover"
          source={require("../assets/shape1.png")}
        />
        <Text
          style={[styles.peopleRemaining, styles.textTypo]}
        >{`People Remaining `}</Text>
        <View style={[styles.remainingItem, styles.textPosition]} />
        <Text style={[styles.text, styles.textPosition]}>3</Text>
      </View>
      <View style={[styles.map, styles.mapPosition]}>
        <Image
          style={[styles.screenshot20230430At0944, styles.childPosition]}
          resizeMode="cover"
          source={require("../assets/screenshot-20230430-at-0944-2.png")}
        />
        <View style={[styles.component28, styles.componentLayout]}>
          <Image
            style={[styles.component28Child, styles.iconChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-4.png")}
          />
          <Text style={[styles.text3, styles.textTypo]}>1</Text>
        </View>
        <View style={[styles.component29, styles.componentLayout]}>
          <Image
            style={[styles.component28Child, styles.iconChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-41.png")}
          />
          <Text style={[styles.text3, styles.textTypo]}>2</Text>
        </View>
        <View style={[styles.component30, styles.componentLayout]}>
          <Image
            style={[styles.component28Child, styles.iconChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-41.png")}
          />
          <Text style={[styles.text3, styles.textTypo]}>3</Text>
        </View>
        <View style={[styles.component31, styles.component31Position]}>
          <Image
            style={[styles.component28Child, styles.iconChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-41.png")}
          />
          <Text style={[styles.text3, styles.textTypo]}>4</Text>
        </View>
        <View style={[styles.component32, styles.componentLayout]}>
          <Image
            style={[styles.component28Child, styles.iconChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-42.png")}
          />
          <Text style={[styles.text3, styles.textTypo]}>S</Text>
        </View>
        <Image
          style={[styles.locationIcon, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/location.png")}
        />
        <Image
          style={[styles.fullscreenIcon, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/fullscreen.png")}
        />
      </View>
      <Image
        style={[styles.ellipseIcon, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.polygonIcon, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/polygon-1.png")}
      />
      <Image
        style={[styles.iphone13ProMax7Child3, styles.component31Position]}
        resizeMode="cover"
        source={require("../assets/ellipse-6.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iphone13Layout: {
    width: 107,
    backgroundColor: Color.black,
    height: 64,
    top: 862,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    top: 882,
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
  borderPosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  iconChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  gFlexBox: {
    textAlign: "center",
    color: Color.white,
  },
  mapPosition: {
    marginLeft: -191,
    left: "50%",
    position: "absolute",
  },
  textTypo1: {
    fontSize: FontSize.size_21xl,
    textAlign: "center",
  },
  savedPosition: {
    height: 67,
    width: 371,
    marginLeft: -185,
    left: "50%",
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_xl,
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  textTypo: {
    fontFamily: FontFamily.iBMPlexSansBold,
    fontWeight: "700",
  },
  itemLayout: {
    left: "82.75%",
    right: "2.7%",
    width: "14.56%",
    height: "80.6%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.white,
  },
  textPosition: {
    top: "11.94%",
    position: "absolute",
  },
  componentLayout: {
    width: "7.57%",
    height: "6.36%",
  },
  component31Position: {
    bottom: "57.24%",
    position: "absolute",
  },
  icon: {
    marginTop: -463,
    height: "100%",
    width: "100%",
  },
  bg5: {
    width: 428,
    top: "50%",
    left: 0,
    position: "absolute",
    height: 926,
  },
  shapeIcon: {
    width: 29,
    height: 20,
  },
  iphone13ProMax7Child: {
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
  iphone13ProMax7Item: {
    left: 0,
    width: 107,
  },
  iphone13ProMax7Inner: {
    left: 107,
  },
  rectangleView: {
    left: 214,
  },
  iphone13ProMax7Child1: {
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
  iphone13ProMax7Child2: {
    top: 0,
    left: 1,
    height: 34,
    backgroundColor: Color.black,
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
    maxWidth: "100%",
    position: "absolute",
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
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    lineHeight: 17,
    letterSpacing: 0,
    textAlign: "center",
    fontSize: FontSize.size_sm,
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
    lineHeight: 17,
    letterSpacing: 0,
    textAlign: "center",
  },
  icon1: {
    lineHeight: 14,
    fontStyle: "italic",
    fontWeight: "100",
    fontFamily: FontFamily.montserratThinItalic,
    marginLeft: 2,
    fontSize: FontSize.size_sm,
  },
  elementsTimetruetrue: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -454,
    top: "50%",
  },
  yourAssignment: {
    top: 73,
    left: 29,
    fontWeight: "800",
    fontFamily: FontFamily.montserratExtrabold,
    color: Color.black,
    position: "absolute",
  },
  savedChild: {
    backgroundColor: Color.forestgreen_100,
  },
  peopleSaved: {
    fontSize: FontSize.size_5xl,
    left: "16.17%",
    top: "26.87%",
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
    color: Color.white,
  },
  savedItem: {
    top: "10.45%",
    bottom: "8.96%",
    position: "absolute",
  },
  text: {
    left: "86.79%",
    color: Color.orangered,
    fontFamily: FontFamily.iBMPlexSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_21xl,
    textAlign: "center",
  },
  saved: {
    top: 620,
  },
  remainingChild: {
    backgroundColor: Color.goldenrod,
  },
  shapeIcon3: {
    width: 22,
    height: 26,
  },
  peopleRemaining: {
    fontSize: FontSize.size_5xl,
    left: "16.17%",
    top: "26.87%",
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
    color: Color.black,
  },
  remainingItem: {
    bottom: "7.46%",
    left: "82.75%",
    right: "2.7%",
    width: "14.56%",
    height: "80.6%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.white,
  },
  remaining: {
    top: 704,
  },
  screenshot20230430At0944: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  component28Child: {
    right: "0%",
    maxWidth: "100%",
    position: "absolute",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  text3: {
    top: "3.45%",
    left: "31.03%",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  component28: {
    top: "55.92%",
    right: "21.93%",
    bottom: "37.72%",
    left: "70.5%",
    position: "absolute",
  },
  component29: {
    top: "60.75%",
    right: "46.48%",
    bottom: "32.89%",
    left: "45.95%",
    position: "absolute",
  },
  component30: {
    top: "65.57%",
    right: "70.76%",
    bottom: "28.07%",
    left: "21.67%",
    position: "absolute",
  },
  component31: {
    top: "36.4%",
    right: "72.85%",
    left: "19.58%",
    width: "7.57%",
    height: "6.36%",
  },
  component32: {
    top: "25.66%",
    right: "42.82%",
    bottom: "67.98%",
    left: "49.61%",
    position: "absolute",
  },
  locationIcon: {
    height: "4.39%",
    width: "4.18%",
    top: "37.94%",
    right: "11.75%",
    bottom: "57.68%",
    left: "84.07%",
    position: "absolute",
  },
  fullscreenIcon: {
    height: "9.87%",
    width: "11.75%",
    top: "89.69%",
    right: "2.61%",
    bottom: "0.44%",
    left: "85.64%",
    position: "absolute",
  },
  map: {
    top: 140,
    width: 383,
    height: 456,
  },
  ellipseIcon: {
    height: "1.4%",
    width: "3.27%",
    top: "41.68%",
    right: "34.11%",
    bottom: "56.91%",
    left: "62.62%",
    position: "absolute",
  },
  polygonIcon: {
    height: "1.47%",
    width: "2.97%",
    top: "42.55%",
    right: "34.26%",
    bottom: "55.98%",
    left: "62.76%",
    borderRadius: 1,
    position: "absolute",
  },
  iphone13ProMax7Child3: {
    height: "0.86%",
    width: "1.87%",
    top: "41.9%",
    right: "34.81%",
    left: "63.32%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iphone13ProMax7: {
    flex: 1,
    overflow: "hidden",
    height: 926,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default IPhone13ProMax7;
