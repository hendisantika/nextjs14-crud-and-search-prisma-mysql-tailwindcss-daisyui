"use server";

import {z} from "zod"; //npm i zod https://www.npmjs.com/package/zod

const EmployeeSchema = z.object({
    name: z.string().min(6),
    email: z.string().min(6),
    phone: z.string().min(11),
});
