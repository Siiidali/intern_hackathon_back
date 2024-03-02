import axios from 'axios';
import config from '../config/config';

const { apiUrl } = config.model;

const classifyProteinSequence = async (file: any) => {
  try {
    const response = await axios.post(`${apiUrl}/classifyProteinSequence`, {
      sequence: file.buffer.toString()
    });

    return response.data;
  } catch (error: any) {
    if (error.response) {
      const status = error.response.status;
      const data = error.response.data;

      throw new CustomError(`Request failed with status ${status}`, status, data);
    } else if (error.request) {
      console.error('No response received from the server');
      throw new CustomError('No response received from the server');
    } else {
      console.error('Error setting up the request', error.message);
      throw new CustomError('Error setting up the request', error.message);
    }
  }
};

class CustomError extends Error {
  status?: number;
  data?: any;

  constructor(message: string, status?: number, data?: any) {
    super(message);
    this.status = status;
    this.data = data;
  }
}

export default {
  classifyProteinSequence
};
