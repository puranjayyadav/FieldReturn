const Conclusion = require('./../models/conclusionModel');
//const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');

exports.setConclusionIds = (req, res, next) => {
  if (!req.body.pump) req.body.pump = req.params.pumpId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};
exports.createConclusion = factory.createOne(Conclusion);
exports.updateConclusion = factory.updateOne(Conclusion);
exports.deleteConclusion = factory.deleteOne(Conclusion);
exports.getAllConclusion = factory.getAll(Conclusion);
exports.getConclusion = factory.getOne(Conclusion);
