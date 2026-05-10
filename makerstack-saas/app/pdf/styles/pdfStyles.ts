import { StyleSheet } from "@react-pdf/renderer";

const pdfStyles = StyleSheet.create({

  
  page: {
    padding: 35,
    backgroundColor: "#F5F7F0",
    fontFamily: "Helvetica"
  },

  header: {
    marginBottom: 30,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#C4FF57",
    borderBottomStyle: "solid"
  },

  logoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15
  },

  logoCircle: {
    width: 18,
    height: 18,
    borderRadius: 50,
    backgroundColor: "#C4FF57",
    marginRight: 10
  },

  companyName: {
    fontSize: 22,
    fontWeight: 700,
    color: "#173232"
  },

  reportTitle: {
    fontSize: 28,
    fontWeight: 700,
    color: "#173232",
    marginBottom: 8
  },

  reportSubtitle: {
    fontSize: 11,
    color: "#8D9999"
  },

  section: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 20,
    marginBottom: 20
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: "#173232",
    marginBottom: 15
  },

  sectionText: {
    fontSize: 11,
    lineHeight: 1.6,
    color: "#4A5452"
  },

  statsGrid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 25
  },

  statCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 18
  },

  statTitle: {
    fontSize: 10,
    color: "#8D9999",
    marginBottom: 8
  },

  statValue: {
    fontSize: 22,
    fontWeight: 700,
    color: "#173232",
    marginBottom: 5
  },

  statDescription: {
    fontSize: 9,
    color: "#597048"
  },

  table: {
    width: "100%",
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderStyle: "solid"
  },

  tableHeader: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#C4FF57"
  },

  tableHeaderCell: {
    flex: 1,
    padding: 10,
    fontSize: 10,
    fontWeight: 700,
    color: "#173232",
    borderRightWidth: 1,
    borderRightColor: "#E5E7EB",
    borderRightStyle: "solid"
  },

  tableRow: {
    display: "flex",
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    borderTopStyle: "solid"
  },

  tableCell: {
    flex: 1,
    padding: 10,
    fontSize: 9,
    color: "#4A5452",
    borderRightWidth: 1,
    borderRightColor: "#E5E7EB",
    borderRightStyle: "solid"
  },

  matchHigh: {
    color: "#22C55E",
    fontWeight: 700
  },

  matchMedium: {
    color: "#FF9E6E",
    fontWeight: 700
  },

  matchLow: {
    color: "#EF4444",
    fontWeight: 700
  },

  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 50,
    backgroundColor: "#C4FF57",
    marginRight: 15
  },

  profileInfo: {
    flex: 1
  },

  profileName: {
    fontSize: 18,
    fontWeight: 700,
    color: "#173232",
    marginBottom: 5
  },

  profileRole: {
    fontSize: 11,
    color: "#8D9999"
  },

  
  list: {
    marginTop: 10
  },

  listItem: {
    fontSize: 11,
    marginBottom: 8,
    color: "#4A5452"
  },


  tagsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 10
  },

  tag: {
    backgroundColor: "#EAF7CB",
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 20,
    fontSize: 9,
    color: "#173232"
  },

  chartBox: {
    height: 180,
    backgroundColor: "#F8FAF2",
    borderRadius: 14,
    marginTop: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  chartText: {
    fontSize: 12,
    color: "#8D9999"
  },

  footer: {
    marginTop: 30,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    borderTopStyle: "solid",
    textAlign: "center"
  },

  footerText: {
    fontSize: 9,
    color: "#8D9999"
  }

});

export default pdfStyles;

