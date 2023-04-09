import mongoose from "mongoose";

const AffiliateStatsSchema = new mongoose.Schema(
  {
    userId: String,
    affiliateSales: Array,
  },
  { timestamps: true }
);

const AffiliateStat = mongoose.model("AffiliateStat", AffiliateStatsSchema);
export default AffiliateStat;
