import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file');

    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: 'Arquivo obrigatório' }, { status: 400 });
    }

    // ⚠️ Aqui seria S3, Cloudinary etc
    const fakeUrl = `/uploads/${file.name}`;

    return NextResponse.json({
      message: 'Upload realizado',
      url: fakeUrl,
    });

  } catch (error) {
    return NextResponse.json({ error: 'Erro no upload' }, { status: 500 });
  }
}