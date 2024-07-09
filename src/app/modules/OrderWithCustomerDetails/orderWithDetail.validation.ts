import { z } from 'zod';

const orderWithDetailValidationSchema = z.object({
  body: z.object({
    productId: z.string({ required_error: 'Product id is required!' }),
    quantity: z.number({ required_error: 'Quantity is required!' }),
    name: z.string({ required_error: 'Name is required!' }),
    phone: z.string({ required_error: 'Phone number is required!' }),
    address: z.string({ required_error: 'Address is required!' }),
  }),
});

export const orderWithDetailValidations = {
  orderWithDetailValidationSchema,
};
