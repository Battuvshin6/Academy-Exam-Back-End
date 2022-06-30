const e = require("express");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const model = require("./modal");
const createData = (req, res, next) => {
  const newModel = new model({
    _id: new mongoose.Types.ObjectId(),
    date: req.body.date,
    topic: req.body.topic,
  });
  newModel
    .save()
    .then((data) => {
      res.status(200).json({
        message: "new topic added",
        data: data,
      });
    })
    .catch(next);
};
const getData = (req, res, next) => {
  model.find((err, data) => {
    if (err) {
      return res.json({
        message: "Error",
      });
    } else {
      return res.status(200).json({
        message: "Your Data",
        data: data,
      });
    }
  });
};
const deleteData = (req, res, next) => {
  model
    .findByIdAndDelete({ id: req.query.id }, (err, data) => {
      if (err) {
        return res.json(err);
      } else {
        res.status(200).json({
          message: "Deleted",
          data: data,
        });
      }
    })
    .catch(next);
};
const updateData = (req, res, next) => {
  const body = req.body;
  model
    .findByIdAndUpdate({ id: req.body.id }, body, { new: true })
    .then((data) => {
      res.status(255).json({
        message: "Updated",
        data: data,
      });
    })
    .catch(next);
};
module.exports = { createData, deleteData, getData, updateData };
