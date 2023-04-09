import mongoose from "mongoose";

const OverallStatsSchema = new mongoose.Schema(
  {
    yearlySalesTotal: Currency,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthly: [
      {
        month: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
    dailyData: [
      {
        date: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
    salesByCategory:{
      type:Map,
      of:Number,
    }
  },
  { timestamps: true }
);


const OverallStat = mongoose.model("OverallStat",OverallStatsSchema)
export default OverallStat