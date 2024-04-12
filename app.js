const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models/sinhvien.model");

const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/sinhvien/list", async (req, res) => {
  try {
    const result = await db.sinhVienModel.find();
    console.log(result);
    res.json(result);
  } catch (error) {
    console.log(error);
  }
});

app.get("/api/sinhvien/list/:id", async (req, res) => {
  try {
    const result = await db.sinhVienModel.findById(req.params.id);
    res.json(result);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
});

app.post("/api/sinhvien/add", async (req, res) => {
  try {
    const obj = new db.sinhVienModel(req.body);
    console.log(obj);
    const result = await obj.save();
    res.json(result);
  } catch (error) {
    console.log(error);
  }
});

app.put("/api/sinhvien/edit/:id", async (req, res) => {
  try {
    const obj = await db.sinhVienModel.findById(req.params.id);

    obj.ma_sinh_vien = req.body.ma_sinh_vien;
    obj.ho_ten = req.body.ho_ten;
    obj.email = req.body.email;
    obj.dia_chi = req.body.dia_chi;
    obj.diem = req.body.diem;
    obj.anh_sinh_vien = req.body.anh_sinh_vien;

    const result = await db.sinhVienModel.findByIdAndUpdate(
      req.params.id,
      obj,
      { new: true }
    );
    res.json(result);
  } catch (error) {
    console.log(error);
  }
});

app.delete("/api/sinhvien/delete/:id", async (req, res) => {
  try {
    await db.sinhVienModel.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Xoá sản phẩm thành công." });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
