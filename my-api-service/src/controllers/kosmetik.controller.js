import kosmetikmodel from "../model/kosmetik.model.js"
import { StoreKosmetikSchema, UpdateKosmetikSchema } from "../schemas/kosmetik.schema.js"
import { apiResponse, apiResponseValidation } from "../utils/response.js"

class kosmetikcontroller {
    static async index(req, res) {
        const listkosmetik = await kosmetikmodel.find()
        return apiResponse({ res, status: 200, data: listkosmetik })
    }

    static async show(req, res) {
        const kosmetikid = req.params.id
        const kosmetik = await kosmetikmodel.findById(kosmetikid)

        if (!kosmetik) {
            return apiResponse({ res, status: 404, message: 'data kosmetik tidak ditemukan' })
        }

        return apiResponse({ res, status: 200, data: kosmetik })
    }

    static async store(req, res) {
        const result = StoreKosmetikSchema.safeParse(req.body)
        if (!result.success) {
            return apiResponseValidation({
                res,
                errors: result.error
            })
        }

        const { nama_kosmetik, merk, harga } = result.data

        const newkosmetik = await kosmetikmodel.create({ nama_kosmetik, merk, harga })
        return apiResponse({ res, status: 201, data: newkosmetik })
    }

    static async update(req, res) {
        const kosmetikid = req.params.id
        const result = UpdateKosmetikSchema.safeParse(req.body)
        if (!result.success) {
            return apiResponseValidation({
                res,
                errors: result.error
            })
        }

        const { nama_kosmetik, merk, harga } = result.data

        const exists = await kosmetikmodel.exists({ _id: kosmetikid })
        if (!exists) {
            return apiResponse({ res, status: 404, message: 'data kosmetik tidak ditemukan' })
        }

        const updatekosmetik = await kosmetikmodel.findOneAndUpdate(
            { _id: kosmetikid },
            { nama_kosmetik, merk, harga },
            { new: true }
        )

        return apiResponse({ res, status: 200, data: updatekosmetik })
    }

    static async delete(req, res) {
        const kosmetikid = req.params.id

        const exists = await kosmetikmodel.exists({ _id: kosmetikid })
        if (!exists) {
            return apiResponse({ res, status: 404, message: 'data kosmetik tidak ditemukan' })
        }

        await kosmetikmodel.findOneAndDelete({ _id: kosmetikid })
        return apiResponse({ res, status: 200, message: 'data kosmetik berhasil dihapus', data: null })
    }
}

export default kosmetikcontroller