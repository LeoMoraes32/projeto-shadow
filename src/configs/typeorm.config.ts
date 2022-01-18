import { TypeOrmModuleOptions } from '@nestjs/typeorm';
 
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'ProjectShadow',
  entities: ["dist/models/*.entity{.ts,.js}"],
  autoLoadEntities: true,
  synchronize: true,
}