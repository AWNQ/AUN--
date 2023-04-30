import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const IPhone13ProMax5 = () => {
  return (
    <View style={styles.iphone13ProMax5}>
      <Image
        style={styles.bg3Icon}
        resizeMode="cover"
        source={require("../assets/bg-2.png")}
      />
      <Text style={[styles.start, styles.iconFlexBox]}>Start</Text>
      <Text style={[styles.yourAssignment, styles.start2Typo]}>
        Your Assignment
      </Text>
      <View style={styles.iphone13ProMax5Child} />
      <View style={[styles.iphone13ProMax5Item, styles.iphone13Layout]} />
      <View style={[styles.iphone13ProMax5Inner, styles.iphone13Layout]} />
      <View style={[styles.rectangleView, styles.iphone13Layout]} />
      <View style={[styles.iphone13ProMax5Child1, styles.iphone13Layout]} />
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
      <View style={styles.iphone13ProMax5Child2} />
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
        <Text style={[styles.g, styles.gTypo]}>5G</Text>
      </View>
      <View style={[styles.elementsTimetruetrue, styles.mapPosition]}>
        <Text style={[styles.time, styles.gTypo]}>9:41</Text>
        <Text style={[styles.icon, styles.iconFlexBox]}>􀋒</Text>
      </View>
      <View style={[styles.iphone13ProMax5Child3, styles.childLayout]} />
      <Text style={[styles.thisIsThe, styles.textTypo]}>
        This is the optimal route
      </Text>
      <View style={[styles.start1, styles.startLayout]}>
        <View style={[styles.startChild, styles.childLayout]} />
        <Text style={[styles.start2, styles.startLayout]}>Start</Text>
        <Image
          style={[styles.arrowForwardIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-forward.png")}
        />
      </View>
      <View style={[styles.map, styles.mapPosition]}>
        <Image
          style={[styles.screenshot20230430At0944, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/screenshot-20230430-at-0944-2.png")}
        />
        <View style={[styles.component28, styles.componentLayout]}>
          <Image
            style={[styles.component28Child, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-41.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>1</Text>
        </View>
        <View style={[styles.component29, styles.componentLayout]}>
          <Image
            style={[styles.component28Child, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-41.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>2</Text>
        </View>
        <View style={[styles.component30, styles.componentLayout]}>
          <Image
            style={[styles.component28Child, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-41.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>3</Text>
        </View>
        <View style={[styles.component31, styles.componentLayout]}>
          <Image
            style={[styles.component28Child, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-41.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>4</Text>
        </View>
        <View style={[styles.component32, styles.componentLayout]}>
          <Image
            style={[styles.component28Child, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-42.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>S</Text>
        </View>
        <Image
          style={[styles.locationIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/location2.png")}
        />
        <Image
          style={[styles.fullscreenIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/fullscreen.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconFlexBox: {
    textAlign: "center",
    color: Color.white,
  },
  start2Typo: {
    fontFamily: FontFamily.montserratExtrabold,
    fontWeight: "800",
    textAlign: "center",
  },
  iphone13Layout: {
    width: 107,
    backgroundColor: Color.black,
    height: 64,
    top: 862,
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
    top: 11,
    position: "absolute",
  },
  childPosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  gTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    lineHeight: 17,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.white,
  },
  mapPosition: {
    marginLeft: -191,
    left: "50%",
    position: "absolute",
  },
  childLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_xl,
    color: Color.white,
  },
  startLayout: {
    width: 371,
    position: "absolute",
  },
  componentLayout: {
    width: "7.57%",
    height: "6.36%",
    position: "absolute",
  },
  bg3Icon: {
    width: 428,
    left: 0,
    top: "50%",
    marginTop: -454,
    position: "absolute",
    height: 926,
  },
  start: {
    top: 746,
    left: 185,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.iBMPlexSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  yourAssignment: {
    top: 73,
    left: 29,
    fontSize: FontSize.size_21xl,
    color: Color.black,
    position: "absolute",
  },
  iphone13ProMax5Child: {
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
  iphone13ProMax5Item: {
    left: 0,
  },
  iphone13ProMax5Inner: {
    left: 107,
  },
  rectangleView: {
    left: 214,
  },
  iphone13ProMax5Child1: {
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
  iphone13ProMax5Child2: {
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
    top: "50%",
    marginTop: -454,
    justifyContent: "center",
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    top: "50%",
    marginTop: -454,
  },
  iphone13ProMax5Child3: {
    top: 613,
    backgroundColor: "#22358b",
    width: 377,
    height: 67,
    marginLeft: -185,
    left: "50%",
  },
  thisIsThe: {
    top: 635,
    left: 98,
    fontFamily: FontFamily.montserratExtrabold,
    fontWeight: "800",
    textAlign: "center",
    position: "absolute",
  },
  startChild: {
    backgroundColor: Color.forestgreen_200,
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  start2: {
    height: "42.37%",
    top: "28.81%",
    display: "flex",
    fontSize: FontSize.size_xl,
    color: Color.white,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: FontFamily.montserratExtrabold,
    fontWeight: "800",
    textAlign: "center",
    left: 0,
  },
  arrowForwardIcon: {
    height: "49.72%",
    width: "7.91%",
    top: "25.42%",
    right: "5.3%",
    bottom: "24.86%",
    left: "86.79%",
    position: "absolute",
  },
  start1: {
    top: 703,
    height: 59,
    marginLeft: -185,
    left: "50%",
  },
  screenshot20230430At0944: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  component28Child: {
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  text: {
    top: "3.45%",
    left: "31.03%",
    textAlign: "left",
    fontFamily: FontFamily.iBMPlexSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  component28: {
    top: "55.92%",
    right: "21.93%",
    bottom: "37.72%",
    left: "70.5%",
  },
  component29: {
    top: "60.75%",
    right: "46.48%",
    bottom: "32.89%",
    left: "45.95%",
  },
  component30: {
    top: "65.57%",
    right: "70.76%",
    bottom: "28.07%",
    left: "21.67%",
  },
  component31: {
    top: "36.4%",
    right: "72.85%",
    bottom: "57.24%",
    left: "19.58%",
  },
  component32: {
    top: "25.66%",
    right: "42.82%",
    bottom: "67.98%",
    left: "49.61%",
  },
  locationIcon: {
    height: "4.74%",
    width: "4.44%",
    top: "37.94%",
    right: "11.75%",
    bottom: "57.32%",
    left: "83.81%",
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
  iphone13ProMax5: {
    flex: 1,
    overflow: "hidden",
    height: 926,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default IPhone13ProMax5;
