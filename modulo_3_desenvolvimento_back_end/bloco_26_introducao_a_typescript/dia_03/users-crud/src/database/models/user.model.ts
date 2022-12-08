import { ResultSetHeader } from 'mysql2';
import IUser from '../../interfaces/user.interface';
import connection from './connection';

export async function getAll(): Promise<IUser[]> {
  const query = 'SELECT * FROM Users';
  const [users] = await connection.execute(query);
  return users as IUser[];
}

export async function getById(id: number): Promise<IUser | null> {
  const query = 'SELECT * FROM Users WHERE id = ?';
  const values = [id];

  const [data] = await connection.execute(query, values);
  const [user] = data as IUser[];
  return user || null;
}

export async function getByEmail(email: string): Promise<IUser | null> {
  const query = 'SELECT * FROM Users WHERE email = ?';
  const values = [email];

  const [data] = await connection.execute(query, values);
  const [user] = data as IUser[];
  return user || null;
}

export async function create(user: IUser): Promise<IUser> {
  const { name, email, password } = user;

  const query = 'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)';
  const values = [name, email, password];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newUser: IUser = { id, name, email, password };
  return newUser;
}

export async function update(id: number, user: IUser): Promise<IUser> {
  const { name, email, password } = user;

  const query = 'UPDATE Users SET name = ?, email = ?, password = ? WHERE id = ?';
  const values = [name, email, password, id];

  await connection.execute(query, values);

  const editedUser: IUser = { id, name, email, password };
  return editedUser;
}

export async function remove(id: number): Promise<IUser | null> {
  const userToBeDeleted = await getById(id);
  if (!userToBeDeleted) return null;

  const query = 'DELETE FROM Users WHERE id = ?';
  const values = [id];

  await connection.execute(query, values);

  return userToBeDeleted;
}