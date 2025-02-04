import bcrypt from 'bcrypt';
import { createHmac } from 'crypto';

export const doHashing = async (password: string, saltRounds: number): Promise<string> => {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
};

export const doHashingValidation = async (password: string, hashedPassword: string): Promise<boolean> => {
    const result = await bcrypt.compare(password, hashedPassword);
    return result;
}

export const hmacProcess = async (value: string, key: string)=>{
    const result = createHmac('sha256', key).update(value).digest('hex');
    return result;
}

"1:10:39"