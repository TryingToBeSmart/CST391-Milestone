// src/features/allMedia/allMedia.dao.ts
import { Pool } from 'mysql';
import { execute } from '../services/mysql.connector';
import { AllMedia } from './allMedia.models';

export class AllMediaDAO {
  constructor(private pool: Pool) {}

  async getAllMedia(): Promise<AllMedia[]> {
    // Implement your database query to fetch all media
    return [];
  }

  // Add other DAO methods as needed
}
