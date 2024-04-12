const db = require("../data/database");

const sinhVienSchema = new db.mongoose.Schema(
  {
    ma_sinh_vien: { type: String },
    ho_ten: { type: String },
    email: { type: String },
    dia_chi: { type: String },
    diem: { type: String },
    anh_sinh_vien: { type: String },
  },
  {
    collection: "SinhVien",
  }
);

const sinhVienModel = db.mongoose.model("sinhVienModel", sinhVienSchema);

module.exports = { sinhVienModel };
