import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import { classificationService } from '../services';

const classifySequence = catchAsync(async (req, res) => {
  const data = await classificationService.classifyProteinSequence(req.file);
  res.status(httpStatus.OK).send(data);
});

export default {
  classifySequence
};
