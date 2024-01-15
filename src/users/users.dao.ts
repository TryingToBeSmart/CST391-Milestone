import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { StreamingService } from "./users.model";
import { userQueries } from './users.queries';

/**
 * Get all users from the database.
 */
export const getAllUsers = async (): Promise<StreamingService[]> => {
    return execute<StreamingService[]>(userQueries.getAllUsers, []);
};

/**
 * Get user by ID from the database.
 * @param id User ID.
 */
export const getUserById = async (id: number): Promise<StreamingService[]> => {
    return execute<StreamingService[]>(userQueries.getUserById, [id]);
};

/**
 * Get user by name search from the database.
 * @param name Name search parameter.
 */
export const getUserByNameSearch = async (name: string): Promise<StreamingService[]> => {
    return execute<StreamingService[]>(userQueries.getUserByNameSearch, [`%${name}%`]);
};

/**
 * Create a new user in the database.
 * @param user User object.
 */
export const createUser = async (user: StreamingService): Promise<OkPacket> => {
    const { userName, email, password, firstName, lastName } = user;
    return execute<OkPacket>(userQueries.createUser, [userName, email, password, firstName, lastName]);
};

/**
 * Update user by ID in the database.
 * @param user User object.
 */
export const updateUser = async (user: StreamingService): Promise<OkPacket> => {
    const { userName, email, password, firstName, lastName, id } = user;
    return execute<OkPacket>(userQueries.updateUser, [userName, email, password, firstName, lastName, id]);
};

/**
 * Delete user by ID from the database.
 * @param id User ID.
 */
export const deleteUser = async (id: number): Promise<OkPacket> => {
    return execute<OkPacket>(userQueries.deleteUser, [id]);
};
