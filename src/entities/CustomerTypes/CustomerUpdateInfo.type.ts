import { CustomerExtendInfo } from './CustomerExtendInfo.type';

export type CustomerUpdateInfo = {email: string} & CustomerExtendInfo;

export interface CustomerPasswordUpdateInfo {
  currentPassword: string;
  newPassword: string;
}
