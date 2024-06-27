import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema(
  {
    shortId: { type: String, required: true, unique: true },
    longUrl: { type: String, required: true },
    numOfClicks: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const UrlModel = mongoose.model('UrlModel', urlSchema);

export default UrlModel;
