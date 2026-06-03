import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
// 👇 Импортируем dotenv
import * as dotenv from 'dotenv';

// 👇 Принудительно загружаем переменные из .env файла
dotenv.config();

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    const databaseUrl = process.env.DATABASE_URL;

    // Проверка-предохранитель: если строки нет, приложение сразу скажет об этом, а не упадет глубоко в pg
    if (!databaseUrl) {
      throw new Error('DATABASE_URL is not defined in your .env file!');
    }

    // Создаем пул с гарантированно существующей строкой
    const pool = new Pool({ connectionString: databaseUrl });
    const adapter = new PrismaPg(pool);

    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}