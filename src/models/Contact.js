import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, 'Please provide your full name.'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email address.'],
  },
  phone: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: [true, 'Please provide a message.'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
