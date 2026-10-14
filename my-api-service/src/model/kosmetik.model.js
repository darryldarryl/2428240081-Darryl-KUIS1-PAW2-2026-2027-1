import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        nama_kosmetik: {
            type: String,
            required: true
        },
        merk: {
            type: String,
            required: true,
        },
        harga: {
            type: Number,
            required: true,
        }
    }
)

const kosmetikModel = mongoose.model('kosmetik', schema)
export default kosmetikModel