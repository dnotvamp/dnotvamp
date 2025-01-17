import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client';

@Injectable() 

export default class PrismaService extends 
PrismaClient 
implements OnModuleInit {
    
    async onModuleInit() {
        await this.$connect();
        console.log('Prisma Client terhubung dengan database!');
    }
  
}