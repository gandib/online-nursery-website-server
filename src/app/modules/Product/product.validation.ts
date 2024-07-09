import { z } from 'zod';

const createProductValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required!' }),
    category: z.string({ required_error: 'Category is required!' }),
    description: z.string({ required_error: 'Description is required!' }),
    price: z.number({ required_error: 'Price is required!' }),
    rating: z.number({ required_error: 'Rating is required!' }),
    image: z.string({ required_error: 'Image is required!' }),
    quantity: z.number({ required_error: 'Quantity is required!' }),
  }),
});

const updateProductValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    category: z.string().optional(),
    description: z.string().optional(),
    price: z.number().optional(),
    rating: z.number().optional(),
    image: z.string().optional(),
    quantity: z.number().optional(),
  }),
});

export const productValidations = {
  createProductValidationSchema,
  updateProductValidationSchema,
};
