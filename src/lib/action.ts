"use server";

import {z} from "zod"; //npm i zod https://www.npmjs.com/package/zod

const EmployeeSchema = z.object({
    name: z.string().min(6),
    email: z.string().min(6),
    phone: z.string().min(11),
});

export const saveEmployee = async (prevSate: any, formData: FormData) => {
    const validatedFields = EmployeeSchema.safeParse(
        Object.fromEntries(formData.entries())
    );

    if (!validatedFields.success) {
        return {
            Error: validatedFields.error.flatten().fieldErrors,
        };
    }

    try {
        await prisma.employee.create({
            data: {
                name: validatedFields.data.name,
                email: validatedFields.data.email,
                phone: validatedFields.data.phone,
            },
        });

    } catch (error) {
        return {message: "Failed to create new employee"};
    }

    revalidatePath("/employee");
    redirect("/employee");
};
