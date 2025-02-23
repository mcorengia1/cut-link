import z from 'zod';

export const UrlSchema = z.object({
    url: z.string({ invalid_type_error: "URL must be a string" }).url()
})