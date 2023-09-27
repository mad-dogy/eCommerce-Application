import { CustomerExtendInfo } from './CustomerExtendInfo.type';

export type CustomerUpdateInfo = {email: string} & CustomerExtendInfo;

export interface PasswordUpdateInfo {
  currentPassword: string;
  newPassword: string;
}
