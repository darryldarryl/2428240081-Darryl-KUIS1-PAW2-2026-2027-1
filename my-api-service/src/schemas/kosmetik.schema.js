import z from 'zod'

export const StoreKosmetikSchema = z.object({
    nama_kosmetik: z.string().trim().min(3, "Nama Kosmetik Minimal 3 Karakter"),
    merk: z.string().trim().min(3, "Merk Kosmetik Minimal 3 Karakter"),
    harga: z.number().min(1000, "Harga Kosmetik Minimal 1000")
})

export const UpdateKosmetikSchema = z.object({
    nama_kosmetik: z.string().trim().min(3, "Nama Kosmetik Minimal 3 Karakter"),
    merk: z.string().trim().min(3, "Merk Kosmetik Minimal 3 Karakter"),
    harga: z.number().min(1000, "Harga Kosmetik Minimal 1000")
})