import { NextResponse } from "next/server";
import { prisma } from '@/app/libs/prisma';

interface Params {
    params: { id: string };
}

export async function GET(request: Request, { params }: Params) {
    try {
        const note = await prisma.note.findFirst({
            where: {
                id: Number(params.id)
            }
        });

        if(!note)
            return NextResponse.json({ message: "Note not found"}, { status: 404});

        return NextResponse.json(note)
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({
                message: error.message
            }, {
                status: 500,
            })
        }
    }
}

export function DELETE(request: Request) {
    return NextResponse.json({
        msg: "Deleting single note"
    })
}

export function PUT(request: Request) {
    return NextResponse.json({
        msg: "Updating single note"
    })
}